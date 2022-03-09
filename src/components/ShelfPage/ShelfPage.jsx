import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfList from '../ShelfList/ShelfList'

function ShelfPage() {

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF_ITEMS' });
  }, []);


  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
