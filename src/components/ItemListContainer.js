import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap"
import { products } from "../data";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

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

            if(!categoryId){
                setItems(resp)
            } else {
                setItems(resp.filter((item) => item.categoria === categoryId))
            }
        })
        .catch((err) => {
            console.log('ERROR',err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])
    


    return (
        <section>
            {
                loading
                ?   <Spinner animation="border" role="status" className="spinner">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : 
                <>
                  <ItemList items={items} />
                  
                </> 
            }
        </section>
    )

}

export { ItemListContainer };