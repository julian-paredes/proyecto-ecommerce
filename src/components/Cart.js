import React, { useContext } from "react"
import {BsFillTrashFill} from "react-icons/bs"
import { CartContext } from "../context/CartContext"



function Cart() {

    const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext)

    return (
        <div className="cart-detail">
        
        <h2>Tu compra:</h2>
        <hr></hr>
        
        {
            cart.map((item) => (
                <div key={item.id} className='my-2'>
                    <h5>{item.nombre}</h5>
                    <img className="img-cart-detail" src={item.imagen} alt={item.nombre}/>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))
        }

        <h4>Total: ${totalPrice()}</h4>

        <button onClick={clearCart} className="btn btn-danger">Vaciar carrito</button>
        </div>
    )
}

export { Cart }