import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Loader } from "./Loader";


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
            })
            .finally(
                setLoading(false)
            )
        
    }, [categoryId])
    
    return (
        <section>
            {
                loading
                ?  <Loader />
                :  <ItemList items={items} />
            }
        </section>
    )
}

export { ItemListContainer };