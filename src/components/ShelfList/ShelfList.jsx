import React, { useEffect } from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useDispatch, useSelector } from 'react-redux';

function shelfList() {

    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
    }, []);


    const dispatch = useDispatch();
    const shelf = useSelector(store => store.shelf);



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