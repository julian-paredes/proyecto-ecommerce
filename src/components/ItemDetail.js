import React from 'react';




function ItemDetail( {item} ) {

    return (
        <div>
            <h2 class="name-prod">{item.nombre}</h2>
            <img class="img-prod" src={item.imagen} alt={item.nombre}/>
            <h4 class="price-prod">Precio: ${item.precio} </h4>
            <h5 class="desc-prod">{item.descripcion}</h5>
        </div>
    )
}

export {ItemDetail}