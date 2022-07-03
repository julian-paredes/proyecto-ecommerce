import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {db} from '../firebase/config'
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"

function Checkout() {

    const { cart, totalPrice, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        phone: '',
        email: ''
    })

    const [orderId, setOrderId] = useState(null)

    const [errCheck, setErrCheck] = useState({})

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            setErrCheck({
                nombre: "El nombre es inválido o demasiado corto"})
            return
        }

        if (values.direccion.length < 5) {
            setErrCheck({
                direccion: "La direccion es inválida"})
            return
        }

        if (values.phone.length < 5) {
            setErrCheck({
                phone: "El número de contacto es inválido"})
            return
        }
        if (values.email.length < 5) {
            setErrCheck({
                email: "El email es inválido"})
            return
        }

        const orden = {
            client: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalPrice()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
        
        const productos = await getDocs(q)

        const outOfStock = []
        productos.docs.forEach((doc) => {

            const itemtoUpdate = cart.find(prod => prod.id === doc.id)
            if ((doc.data().stock - itemtoUpdate.cantidad) >= 0 ) {

                batch.update(doc.ref, {
                    stock: doc.data().stock - itemtoUpdate.cantidad
                })
            } else {
                outOfStock.push(itemtoUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    clearCart()
                })
        } else {
            alert("Hay items sin stock!")
        }
        
     }

     if (orderId) {
        return (
            <div className="container my-5 detail-container">
                <h2>Gracias por su compra!</h2>
                <hr />
                <img src="https://cdn.makestickers.com/templates/large/ThankYou-YouRock.jpg" alt="imagen de gracias"></img>
                <h3 className="my-2">Su número de orden es: {orderId}</h3>
            </div>
        )
     }

     if (cart.length === 0)
     return <Navigate to={"/"} />

    return(

        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Nombre"
                    className="form-control my-2"
                />

                {errCheck.nombre && <p className="text-danger">{errCheck.nombre}</p>}

                <input
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="Direccion"
                    className="form-control my-2"
                />

                {errCheck.direccion && <p className="text-danger">{errCheck.direccion}</p>}

                <input
                    value={values.phone}
                    name="phone"
                    onChange={handleInputChange}
                    type={"tel"}
                    placeholder="Número de contacto"
                    className="form-control my-2"
                />

                {errCheck.phone && <p className="text-danger">{errCheck.phone}</p>}

                <input
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder="E-mail"
                    className="form-control my-2"
                />

                {errCheck.email && <p className="text-danger">{errCheck.email}</p>}

                <button type="submit" className="text-white btn button-detail">Enviar</button>
            </form>
            <button onClick={clearCart} className="btn btn-danger my-2">Cancelar mi compra</button>
        </div>
    )
}

export { Checkout }