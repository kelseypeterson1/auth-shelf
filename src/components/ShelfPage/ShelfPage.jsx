import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfList from '../ShelfList/ShelfList';
import './ShelfPage.css';

function ShelfPage() {

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_SHELF_ITEMS' });
  // }, []);

  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  const userId = useSelector(store => store.user.id);


  const handleSubmit = () => {
    let bundledObject = {
      description: description,
      image_url: imageUrl,
      user_id: userId
    }

    dispatch({type: 'ADD_ITEM', payload: bundledObject});

    setDescription('');
    setImageUrl('');
  }

  return (
    <div className="container">
      <h2>Shelf Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="enter image url"
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <button type="submit">Add to shelf!</button>
      </form>
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
