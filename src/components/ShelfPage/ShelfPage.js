import React from 'react';
import { useHistory } from 'react-router-dom';

  function ShelfPage() {

    const history = useHistory();

    const navigateAdd = () => {
      history.push(`/addItem`)
    }
    return (
      <div className="container">
        <p onClick={navigateAdd}>Add an Item</p>
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
      </div>
    );
  }

export default ShelfPage;
