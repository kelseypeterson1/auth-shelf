import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ShelfItem({item}) {


    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
      }, [dispatch]);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: item.id });
    }

    return (
        <>
        <h3>{item.description}</h3>
        <img src ={item.image_url} />
        <button onClick={handleDelete}>delete</button>
        </>
    )
}

export default ShelfItem;