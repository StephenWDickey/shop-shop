import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

// import globale state variable function
import { useStoreContext } from "../../utils/GlobalState";


// import actions
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY} from '../../utils/actions';


function CategoryMenu({ setCategory }) {
  
  // we make declaration for globale state variable
  const [state, dispatch] = useStoreContext();

  // assign categories with data from global state variable
  const { categories } = state;

  // use our QUERY_CATEGORIES query to assign value for data
  // we assign data to variable called categoryData
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);


  // here we take categoryData then use the dispatch() method
  // to populate global state with data
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
