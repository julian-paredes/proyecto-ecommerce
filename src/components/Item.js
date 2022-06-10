import React from 'react';
import { Link } from 'react-router-dom';

function Item({item}) {

    return(

            <div className='item-container'>
                <h2 class="name-prod">{item.nombre}</h2>
                <img class="img-prod" src={item.imagen} alt="imagen de producto"/>
                <p class="price-prod">Precio: {item.precio} USD</p>
                <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2 button-detail">Ver más</button>
                </Link>
                <hr/>
            </div>
    )
}
export default Item