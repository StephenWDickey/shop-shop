import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';


// import indexed DB helper function
import { idbPromise } from "../../utils/helpers";


const Cart = () => {
  
  // we use global state data
  const [ state, dispatch ] = useStoreContext();


  // use TOGGLE_CART action with dispatch method
  function toggleCart() {
    dispatch({type: TOGGLE_CART});
  }  
  

  // function to calculate total price
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });

    // sets the number of decimal places
    return sum.toFixed(2);

  }


  // use useEffect hook to retrieve data from cache for cart
  useEffect(() => {

    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };
  
    // if cart is empty we will check if cart data has been cached
    // then getCart() function will retrieve it
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);
  

  // if cart is closed, we will display a different image
  // clicking it will change toggleCart to TRUE
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span
          role="img"
          aria-label="trash">🛒</span>
      </div>
    );
  }


  // conditionally render cart if loggedin or not
  // also if cart length is 0 then notify user
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;