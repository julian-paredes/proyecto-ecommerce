import React from "react";

function ItemListContainer({ nombre }) {


    return (
        <section>
            <h2 className="title-itemList">Lista de productos</h2>
            <hr></hr>
            <p className="p-itemList">Bienvenido {nombre}</p>
        </section>
    )

}

export { ItemListContainer };