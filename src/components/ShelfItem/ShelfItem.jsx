import React from 'react';



function ShelfItem({item}) {

    return (
        <>
        <h3>{item.description}</h3>
        <img src ={item.image_url} />
        </>
    )
}

export default ShelfItem;