import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = (props) => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', clave: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        /*console.log("e.target.name::: ", e.target.name)
        console.log("e.target.value::: ", e.target.value)*/
        console.log("credentials: ", credentials)
    }

    const logeame = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://reto-api.herokuapp.com/api/signin", body);
            console.log("imprimir ", res);
            // localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
            // localStorage.setItem("token", JSON.stringify(res.data.token));

             console.log("toda la info",res);
             console.log("token: ",res.data.token);
            
                  
            history("/profile");
            } catch (error) {
            setmsgError("Error al logearme");
            }
        }

    return (

        <div className="designLogin">
            <div id="style-div-form-login">
                {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
                <h1>Acceder</h1>
                <input className="style-form-login" type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' placeholder="Email" />
                <input className="style-form-login" type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' placeholder="Contraseña" />
                <div className="sendButton" onClick={() => logeame()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )
};

//export default Login;

export default Login;