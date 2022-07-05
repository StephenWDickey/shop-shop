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
  const { products } = state;


  // if there is products data, then use setCurrentProduct setter
  // if not, we use data returned from useQuery to set product data
  // of the global state object
  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
    }
  }, [products, data, dispatch, id]);


  // use dispatch method to execute ADD_TO_CART action
  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: { ...currentProduct, purchaseQuantity: 1 }
    });
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
            <button>Remove from Cart</button>
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
