import React, { useContext } from "react"
import {BsFillTrashFill} from "react-icons/bs"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


function Cart() {

    const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="cart-detail">
                <h2>Tu carrito esta vacío </h2>
                <Link to="/" className='btn btn-success my-3 button-detail'>Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart-detail">
        
        <h3>Tu compra:</h3>
        <hr></hr>
        
        {
            cart.map((item) => (
                <div key={item.id} className='my-2'>
                    <h5>{item.nombre}</h5>
                    <img className="img-cart-detail" src={item.imagen} alt={item.nombre}/>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>{item.precio * item.cantidad} USD</h6>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))
        }

        <h4>Total: {totalPrice()} USD</h4>
        <button onClick={clearCart} className="btn btn-danger">Vaciar carrito</button>
        <Link to="/checkout" className='btn btn-success mx-4 button-detail'>Ir al Checkout</Link>
        
        </div>
    )
}

export { Cart }