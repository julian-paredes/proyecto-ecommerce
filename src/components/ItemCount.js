import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({prod}) {

    const [contador,setContador] = useState(1);

    const sumarProducto = () => {
        if(contador< prod)
        setContador(contador + 1)
    }

    const restarProducto = () =>{
        if(contador>1)
        setContador(contador - 1)
    }


    return(
        <>
        <section className="botonera">
        <Button className="boton" onClick={restarProducto}>-</Button>
        <span className="counter">{contador}</span>
        <Button className="boton" onClick={sumarProducto}>+</Button>
        </section>
        <div className="boton-agregar-cart"><Button className="boton">Agregar al Carrito</Button></div>
        </>
    )
}

export {ItemCount};
