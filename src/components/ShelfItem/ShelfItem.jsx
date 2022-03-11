import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ShelfItem.css';

function ShelfItem({item}) {


    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SHELF_ITEMS' });
    //   }, []);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: item.id });
    }

    return (
        <div className='shelfItemContainer'>
            <h3>{item.description}</h3>
            <img src ={item.image_url} />
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default ShelfItem;