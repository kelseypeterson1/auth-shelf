import React, { useEffect } from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function shelfList() {

    const dispatch = useDispatch();

    const shelf = useSelector(store => store.shelf);
    
    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
      }, []);

    return (
        <>
            {shelf.map((item, i) => {
                return (
                    <ShelfItem key={i} item={item} />
                )
            })}

        </>
    )
}

export default shelfList;