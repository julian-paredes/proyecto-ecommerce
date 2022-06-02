import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap"
import { products } from "../data";
import ItemList from "./ItemList"


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const pedirDatos = () => {
        
        return new Promise ((resolve,reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)
        pedirDatos()
        .then ((resp) => {
            setItems(resp)
        })
        .catch((err) => {
            console.log('ERROR',err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    


    return (
        <section>
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : <ItemList items={items} />
            }
        </section>
    )

}

export { ItemListContainer };