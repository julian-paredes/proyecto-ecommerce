import React, { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

function LoginScreen() {

    const {login} = useContext(AuthContext)

    const [values, setValues] = useState({

        email:'',
        password:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values)
    }


    return(
        <div className="login-screen">
            <div className="login-container">
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input className="form-control my-2"
                        type={"email"}
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />

                    <input className="form-control my-2"
                        type={"password"}
                        name="password"
                        values={values.password}
                        onChange={handleInputChange}
                        placeholder="Contraseña"
                    />

                    <button type="submit" className=" btn btn-primary button-detail">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export { LoginScreen }