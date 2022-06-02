import React from 'react';
import Item from "./Item";


function ItemList( {items} ) {

    return (
        <div>
            <h2 className="title-itemList">Lista de productos</h2>
            <hr></hr>

            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }

        </div>
    )
}

export default ItemList