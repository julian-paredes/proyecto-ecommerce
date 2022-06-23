import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";



function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true);


    const { itemId } = useParams();
    
    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem( { id: doc.id, ...doc.data()} )
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }, [])

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, "productos", itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem( {id: doc.id, ...doc.data()} )
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







