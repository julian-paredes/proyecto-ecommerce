import React from "react";
import { Button } from "react-bootstrap";

function ItemCount({maxProd, contador, setContador, onAdd}) {

    const handleSumar = () => {
        if(contador< maxProd)
        setContador(contador + 1)
    }

    const handleRestar = () => {
        contador > 1 && setContador(contador - 1)
    }

   


    return(
        <>
        <section className="botonera">
        <Button className="boton" onClick={handleRestar}>-</Button>
        <span className="counter">{contador}</span>
        <Button className="boton" onClick={handleSumar}>+</Button>
        </section>
        <div className="boton-agregar-cart"><Button onClick={onAdd} className="boton">Agregar al Carrito</Button></div>
        </>
    )
}

export {ItemCount};
