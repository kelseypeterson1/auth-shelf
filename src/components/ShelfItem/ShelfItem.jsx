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
        <div>
        <div className='shelfItemContainer'>
            <h3>{item.description}</h3>
            <img src ={item.image_url} />
            <button onClick={handleDelete}>delete</button>
        </div>
        <img src='https://testbucketstn.s3.us-east-2.amazonaws.com/0a6e5c4d2b330e3f3e8a6d0bf5562298'></img>
        </div>
    )
}

export default ShelfItem;