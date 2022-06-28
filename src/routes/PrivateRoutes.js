import React from "react"
import { NavBar } from '../components/NavBar';
import { ItemListContainer } from '../components/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
import { Cart } from '../components/Cart'
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserInfo } from '../components/UserInfo'
import { Checkout } from "../components/Checkout";


function PrivateRoutes() {


    return(
    <>
        <NavBar />
        <UserInfo />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={ <Navigate to="/" />} />
        </Routes>
    </>
    )
}


export { PrivateRoutes }