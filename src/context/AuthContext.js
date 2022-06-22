import React, { useState } from "react";
import { createContext } from "react";

const mockUsers = [
    {email: 'julikmet24@hotmail.com', pass: 'julikmet24'},
    {email: 'john@gmail.com', pass: 'john'},
    {email: 'abc@gmail.com', pass: 'abc'},
]

export const AuthContext = createContext()



function AuthProvider({children}) {

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    console.log(auth);

    const login = (values) => {
        const {email, password} = values

        const match = mockUsers.find((user) => user.email === email)

        if (match){
            
            if (match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else{
                alert("Password Incorrecto")

            }
        } else {
            alert("Usuario no encontrado")

        }
    }

    const logout = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return (
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}



export { AuthProvider }