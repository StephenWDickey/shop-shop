import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

function ProductItem(item) {

  // use data from global state
  const [state, dispatch] = useStoreContext();

  // define state.cart as cart for easier reading
  const { cart } = state;


  // use the dispatch method to execute the ADD_TO_CART action
  const addToCart = () => {

    // check if cart item matches id 
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if _id matches cart item, we will use UPDATE_CART_QUANTITY 
    // instead of ADD_TO_CART
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    }

    // if id does not match, use ADD_TO_CART
    else {
      dispatch({
      type: ADD_TO_CART,
      product: { ...item, purchaseQuantity: 1 }
      });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
