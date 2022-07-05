import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';

// import global state function
import { useStoreContext } from '../../utils/GlobalState';
// import action
import { UPDATE_PRODUCTS } from '../../utils/actions';


// import indexedDB helper function
import { idbPromise } from "../../utils/helpers";

function ProductList() {

  // create declaration for global state
  const [state, dispatch] = useStoreContext();

  // assign currentCategory to global state
  const { currentCategory } = state;
  
  // we will asign our query data to data variable, and also have loading variable
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  


  ///////////////////////////////////////////////////////

  // take data from query and use dispatch method to update global state with data
  useEffect(() => {

    // if data
    if (data) {

      // store in global state object
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });


      // AND store data in indexedDB cache
      data.products.forEach((product) => {
        
        // note PUT request to update, we store it in 'products' object store
        idbPromise('products', 'put', product);
        
      });
    }


    // now we add in capability to retrieve cached data if offline!
    // if loading variable doesnt exist in useQuery hook (offline)
    else if (!loading) {

      // retrieve cached data
      idbPromise('products', 'get').then((products) => {

        // set cached data to global state for use
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });

    }

  // the condition is that we have data then we use the dispatch method
  // remember useEffect takes 2 arguments: a function
  // and a condition
  }, [data, loading, dispatch]);
  


  //////////////////////////////////////////////////////////////

  
  function filterProducts() {

    // if no data then return products
    if (!currentCategory) {
      return state.products;
    }
  
    // take state data and assign currentCategory based on data
    return state.products.filter(product => product.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
