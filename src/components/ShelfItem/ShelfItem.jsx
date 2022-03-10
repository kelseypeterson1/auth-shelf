import React from 'react';



function ShelfItem({item}) {

console.log('item is:', item)

    return (
        <>
        <h3>{item.description}</h3>
        <img src ={item.image_url} />
        </>
    )
}

export default ShelfItem;