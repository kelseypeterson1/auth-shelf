import req from 'express/lib/request';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfList from '../ShelfList/ShelfList';
import './ShelfPage.css';

// // ========multer stuff===============
// const multer  = require('multer')
// const upload = multer({ dest: 'public/user' })

// exports.uploadImage = upload.single('photo');




function ShelfPage() {

 

  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  const userId = useSelector(store => store.user.id);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imageUrl.name, 'and', userId);
 
     

    dispatch({type: 'ADD_ITEM', payload:{ imageUrl } });

    setDescription('');
    setImageUrl('');
  }

  return (
    <div className="container">
      <h2>Shelf Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" >
        {/* <input
          type="text"
          placeholder="enter name"
          onChange={(event) => setDescription(event.target.value)}
        /> */}
        <input
          type='file'
          name='file'
          placeholder="enter image url"
          onChange={(event) => setImageUrl(event.target.files[0])}
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
