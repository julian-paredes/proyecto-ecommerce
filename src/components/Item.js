import React from 'react';

function Item({item}) {

    return(

            <div>
                <h2 class="name-prod">{item.nombre}</h2>
                <img class="img-prod" src={item.imagen} />
                <p class="price-prod">Precio: {item.precio} USD</p>
                <hr/>
            </div>
    )
}
export default Item