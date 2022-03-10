import React from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useSelector } from 'react-redux';

function shelfList() {

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