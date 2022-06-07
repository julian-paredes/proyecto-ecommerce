import { useEffect, useState } from "react";
import React from "react";
import { Spinner } from "react-bootstrap";
import { ItemDetail } from "./ItemDetail"
import { products } from "../data";


function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);




    const pedirDatos = (itemId) => {
        
        return new Promise ((resolve,reject) => {
    
            setTimeout(() => {
                resolve(
                    () => products.find((item) => item.id === itemId)
                )
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)
        pedirDatos(2)
        .then ((resp) => {
            setItem(resp)
        })
        .catch((err) => {
            console.log('ERROR',err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])


    return (

        <>
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                :
                <div class="detail-container">
                    <h2>Detalle de Producto:</h2>
                    <ItemDetail item={item} />
                </div> 
            }
        </>
    )
}

export { ItemDetailContainer }







