// ⬇ Dependent functionality:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ShelfPage() {

  const history = useHistory();

  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const itemReducer = useSelector(store => store.itemReducer);
  // ⬇ GET on page load:
  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);
  //#endregion ⬆⬆ All state variables above.

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
            <>
              <li>{item?.description}</li>
              <li><img src={item?.image_url} /></li>
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
