import React from "react";
import {BsCart} from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


function CartWidget() {

    const { totalQuantity } = useContext(CartContext)

    return(
        <section >
            <BsCart className="nav-cart"/>
            <span>{totalQuantity()}</span>
        </section>
    )
}

export { CartWidget };