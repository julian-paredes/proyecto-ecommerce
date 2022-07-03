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

    if (maxProd === 0) {
        return (
            <div className="my-3">
                <p className="text-danger">NO HAY STOCK DE ESTE PRODUCTO!</p>
            </div>
        )
    }

    if (maxProd === 1) {
        return(
            <div className="my-3">
                <p className="text-danger">Queda solo 1 producto!</p>
                <div className="boton-agregar-cart"><Button onClick={onAdd} className="boton">Agregar al Carrito</Button></div>
            </div>
        )
    }

    return(
        <>
        <section className="botonera">
        <Button className="boton" onClick={handleRestar} disabled={contador === 1}>-</Button>
        <span className="counter">{contador}</span>
        <Button className="boton" onClick={handleSumar} disabled={contador === maxProd}>+</Button>
        </section>
        <div className="boton-agregar-cart"><Button onClick={onAdd} className="boton">Agregar al Carrito</Button></div>
        </>
    )
}

export {ItemCount};
