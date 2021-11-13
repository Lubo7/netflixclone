import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';


const Login = (props) => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });

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
            // localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
            // localStorage.setItem("token", JSON.stringify(res.data.token));         

            props.dispatch({type:LOGIN, payload: res.data}); //this line store/log in what we asked for

            history("/profile");
        } catch (error) {
            setmsgError("Error in login");
        }
    }

    return (

        <div className="designLogin">
            <div id="style-div-form-login">
                {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
                <h1>Log me in</h1>
                <input className="style-form-login" type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' placeholder="Email" />
                <input className="style-form-login" type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' placeholder="Password" />
                <div className="sendButton" onClick={() => logeame()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )
};

//export default Login;
export default connect()(Login);