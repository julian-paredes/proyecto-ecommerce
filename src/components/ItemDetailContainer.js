import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom";
import { products } from "../data";



function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);


    const { itemId } = useParams();
    


    const pedirDatos = () => {
        
        return new Promise ((resolve,reject) => {
    
            setTimeout(() => {
                resolve(
                    products
                )
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)
        pedirDatos()
        .then ((resp) => {
            setItem(resp.find((item) => item.id === Number(itemId)))
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
                ?   <Spinner className="spinner" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                :
                <div className="detail-container">
                    <ItemDetail item={item} />
                </div> 
            }
        </>
    )
}

export { ItemDetailContainer }







