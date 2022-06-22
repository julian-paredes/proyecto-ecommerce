import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function UserInfo() {

    const {auth, logout} = useContext(AuthContext)
    return(

        <div className="container d-flex justify-content-between py-2">
            <p>Bienvenido, {auth.userId}</p>
            <button onClick={logout} className="btn button-detail">Cerrar Sesion</button>
        </div>
    )
}

export { UserInfo }