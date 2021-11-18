import React, { useState } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import axios from 'axios';

const RegistroUsuarios = () => {

    //HOOKS
    //Register the users
    const [datosRegistro, setDatosRegistro] = useState({});

    const guardarDatosRegistro = (e) => {
        setDatosRegistro({ ...datosRegistro, [e.target.name]: e.target.value })
    }

    const registrarUsuario = async () => {

        //to register a new user and put it into the database
        await axios.post("https://reto-api.herokuapp.com/api/signup", datosRegistro);

        //to empty the hook
        setDatosRegistro(({}));

        //Go for every input and let it free to register another user
        let inputs = document.getElementById("cuadro-registro").childNodes
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

    return (
        
        
        <div className="designRegister" id="container-registro">
            <div className="contentRegister" id="contenido-registro">
                <h2>Register</h2>
                <div className="input-form-register" id="cuadro-registro">
                    <input autoComplete="off" placeholder="Email" type="email" name="email" id="email-register" onChange={(e) => guardarDatosRegistro(e)} />
                    <input autoComplete="off" placeholder="Password" type="password" name="password" id="password-register" onChange={(e) => guardarDatosRegistro(e)} />
                    {/* <input autoComplete="off" placeholder="DNI" type="text" name="dni" id="dni-registro" onChange={(e)=>guardarDatosRegistro(e)}/> */}
                    <input autoComplete="off" placeholder="Name" type="text" name="name" id="name-register" onChange={(e) => guardarDatosRegistro(e)} />
                    {/* <input autoComplete="off" placeholder="Surname" type="text" name="apellidos" id="apellidos-registro" onChange={(e)=>guardarDatosRegistro(e)}/> */}
                    {/* <input autoComplete="off" placeholder="Address (street, number, flat_number)" type="text" name="direccion" id="direccion-registro" onChange={(e)=>guardarDatosRegistro(e)}/> */}
                    {/* <input autoComplete="off" placeholder="City" type="text" name="ciudad" id="ciudad-registro" onChange={(e)=>guardarDatosRegistro(e)}/> */}
                    {/* <input autoComplete="off" placeholder="Phone" type="text" name="telefono" id="telefono-registro" onChange={(e)=>guardarDatosRegistro(e)}/> */}
                    {/*<input autoComplete="off" placeholder="Role (admin or user)" type="text" name="rol" id="role-register" onChange={(e) => guardarDatosRegistro(e)} /> */}
                </div>
                <div className="sendButton" onClick={() => registrarUsuario()}>Register</div>
            </div>
        </div>
       )
       
};

export default connect((state) => ({
    datosLogin: state.datosLogin
}))(RegistroUsuarios);