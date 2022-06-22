import React from 'react';
import { Link } from 'react-router-dom';

function Item({item}) {

    return(

            <div className='item-container'>
                <h2 className="name-prod">{item.nombre}</h2>
                <img className="img-prod" src={item.imagen} alt="imagen de producto"/>
                <p className="price-prod">Precio: {item.precio} USD</p>
                <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2 button-detail">Ver más</button>
                </Link>
                <hr/>
            </div>
    )
}
export default Item