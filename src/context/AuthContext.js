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

    const [error, setError] = useState({})

    const login = (values) => {
        const {email, password} = values

        setError({})
        const match = mockUsers.find((user) => user.email === email)

        if (match){
            
            if (match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else{
                
                setError({
                    password: "Contraseña incorrecta!"
                })

            }
        } else {
        
            setError({
                email: "Usuario inválido!"
            })
        }
    }

    const logout = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return (
        <AuthContext.Provider value={{auth,login,logout,error, setError}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }