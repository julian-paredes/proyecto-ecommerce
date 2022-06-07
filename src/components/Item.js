import React from 'react';

function Item({item}) {

    return(

            <div>
                <h2 class="name-prod">{item.nombre}</h2>
                <img class="img-prod" src={item.imagen} alt="imagen de producto"/>
                <p class="price-prod">Precio: {item.precio} USD</p>
                <hr/>
            </div>
    )
}
export default Item