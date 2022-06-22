import React, { useContext } from "react"
import { BrowserRouter} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

function AppRoutes(){

    const {auth} = useContext(AuthContext)

    console.log(auth);

    return(

        
    <BrowserRouter>
        {
            auth.loggedIn
            ? <PrivateRoutes />
            : <PublicRoutes />
        }
        
    </BrowserRouter>

    )
}


export { AppRoutes }