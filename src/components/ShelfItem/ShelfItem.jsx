import React from 'react';



function ShelfItem(item) {

    return (
        <>
        <h3>{item.description}</h3>
        <img src ={item.url} />
        </>
    )
}

export default ShelfItem;