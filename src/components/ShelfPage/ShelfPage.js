// ⬇ Dependent functionality:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ShelfPage() {

  const history = useHistory();

  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const itemReducer = useSelector(store => store.itemReducer);
  const userReducer = useSelector(store => store.userReducer);
  // ⬇ GET on page load:
  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);
  //#endregion ⬆⬆ All state variables above.

  const handleDelete = (item) => {
    console.log('Item to be deleted', item)
    dispatch({type: 'REMOVE_ITEMS', payload:  item})
  }
  const navigateAdd = () => {
    history.push(`/addItem`)
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p onClick={navigateAdd}>Add an Item</p>
      <p>All of the available items can be seen here.</p>
      <ul>
        {itemReducer.map(item => {
          return (
            <div key={item?.id}>
              <li>{item?.description}</li>
              <li><img src={item?.image_url} /></li>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
