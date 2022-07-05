import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

import { useStoreContext } from "../utils/GlobalState";
import { 
  UPDATE_PRODUCTS,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART
} from "../utils/actions";

import Cart from '../components/Cart';


// import IndexedDB helper function
import { idbPromise } from "../utils/helpers";



function Detail() {

  // declare global state info
  const [state, dispatch] = useStoreContext();

  // define id using useParams hook
  const { id } = useParams();

  // state and setter for useState hook
  const [currentProduct, setCurrentProduct] = useState({})

  // define data via QUERY_PRODUCTS query, account for loading
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  // use global state data for products
  // products data is destructured from state data
  // destructure cart data from state as well
  const { products, cart } = state;


  // if there is products data, then use setCurrentProduct setter
  // if not, we use data returned from useQuery to set product data
  // of the global state object
  useEffect(() => {

    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      // store product data in indexedDB cache
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }


    // if offline, retrieve data from cache
    else if (!loading) {
      
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });

    }
  }, [products, data, loading, dispatch, id]);


  // use dispatch method to execute ADD_TO_CART action
  // if id matches item to add, use UPDATE_CART_QUANTITY action
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
  
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });

      // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } 
    
    
    else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });

      // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });

    // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('cart', 'delete', { ...currentProduct });

  };

  return (
    <>
      {currentProduct ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button 
              disabled={!cart.find(p=> p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
