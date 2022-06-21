import React from "react";
import {BsCart} from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


function CartWidget() {

    const { cart, totalQuantity } = useContext(CartContext)

    if (cart.length)
        return(
            <section>
                 
                <BsCart className="nav-cart"/>
                <span>{totalQuantity()}</span>
                
            </section>
        )
}

export { CartWidget };