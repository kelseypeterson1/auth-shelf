import React, { useEffect } from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ShelfList.css';

function shelfList() {

    const dispatch = useDispatch();

    const shelf = useSelector(store => store.shelf);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
      }, []);

    return (
        <div className="shelfContainer">
            {shelf.map((item, i) => {
                return (
                    <ShelfItem key={i} item={item} />
                )
            })}

        </div>
    )
}

export default shelfList;