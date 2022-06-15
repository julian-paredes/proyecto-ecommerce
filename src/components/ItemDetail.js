import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';



function ItemDetail( {item} ) {

    const {addItem, isInCart} = useContext(CartContext)
    const [cantidad,setCantidad] = useState(1);
    

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1)
    }

     const handleAgregar = () => {

        const itemToCart = {
            ...item,
            cantidad
        }

        
        
        addItem(itemToCart)

        console.log(itemToCart);
    }

    return (
        <div>
            <h2>Detalle del producto:</h2>
            <h2 className="name-prod">{item.nombre}</h2>
            <img className="img-prod" src={item.imagen} alt={item.nombre}/>
            <h5 className="desc-prod">{item.descripcion}</h5>
            <h4 className="price-prod">Precio: {item.precio} USD</h4>
            
            {
            isInCart(item.id)
            ? <Link to="/cart" className='btn btn-success my-3 button-detail'>Finalizar mi compra</Link>
            :
            <ItemCount 
            maxProd={item.stock} 
            contador={cantidad} 
            setContador={setCantidad} 
            onAdd={handleAgregar} 
            />
            }
            <br/>
            <button onClick={handleGoBack} className="btn btn-primary my-2 button-detail">Volver</button>

        </div>
    )
}

export {ItemDetail}