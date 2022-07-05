import React from 'react';

// we need to update global state data when we remove item from cart
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';


// import indexedDB helper function
import { idbPromise } from "../../utils/helpers";


const CartItem = ({ item }) => {

  // initiate global state function
  // we only destructured dispatch because CartItem does not need state
  // for some reason COMMA MUST BE HERE OR IT DOESNT WORK!!!
  const [, dispatch ] = useStoreContext();


  const removeFromCart = item => {
    
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });

    // if we remove item from cart we will also delete from cache
    idbPromise('cart', 'delete', { ...item });

  };


  // create an onChange function for changing quantity value
  const onChange = (e) => {
    
    const value = e.target.value;


    // if value is 0 remove it from the cart
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });

      // if we alter quantity in cart to 0, delete from cache
      idbPromise('cart', 'delete', { ...item });
    }

    // otherwise UPDATE_CART_QUANTITY
    else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });

      // if cart is not empty and we alter the quantity
      // we will use a PUT request to alter quantity in cache
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };


  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;