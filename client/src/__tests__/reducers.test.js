// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';


// import reducer function from
// reducers.js
import { reducer } from '../utils/reducers';
  
// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};


// testing the UPDATE_PRODUCTS action
test('UPDATE_PRODUCTS', () => {

    // notice how we create new state
    // we don't alter the other state
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      // we are adding two objects 
      // to the array, to test UPDATE_PRODUCTS
      products: [{}, {}]
    });
    
    // we check if the array length is increased
    expect(newState.products.length).toBe(2);
    // our initial state declaration earlier
    // is an empty array, so length = 0
    expect(initialState.products.length).toBe(0);
});