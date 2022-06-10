import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount';




function ItemDetail( {item} ) {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1)
    }

    return (
        <div>
            <h2 className="name-prod">{item.nombre}</h2>
            <img className="img-prod" src={item.imagen} alt={item.nombre}/>
            <h4 className="price-prod">Precio: {item.precio} USD</h4>
            <h5 className="desc-prod">{item.descripcion}</h5>
            <ItemCount prod="3"/>

            <button onClick={handleGoBack} className="btn btn-primary my-2 button-detail">Volver</button>
        </div>
    )
}

export {ItemDetail}