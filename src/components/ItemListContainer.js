import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map( (doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setItems(newItems);
                console.log(newItems);
            })
            .finally(
                setLoading(false)
            )
        
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