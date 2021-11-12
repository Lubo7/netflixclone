import React, {useState} from 'react';
import Lateral from '../../Components/Lateral/Lateral';
import './Register.css';
import { connect } from 'react-redux';
import axios from 'axios';

const RegistroUsuarios = (props) =>{

    let config = {
        headers: { Authorization: `Bearer ${props.datosLogin.token}` }
    };

    //HOOKS
    //REGISTRO DE USUARIOS
    const [datosRegistro, setDatosRegistro] = useState ({});

    const guardarDatosRegistro = (e) =>{
        setDatosRegistro({...datosRegistro, [e.target.name]: e.target.value})
    }

    const registrarUsuario = async () =>{
        
        //CREO USUARIO NUEVO
        await axios.post("https://reto-api.herokuapp.com/api/signup", datosRegistro, config);
        
        //DEJO VACIOS LOS DATOS EN EL HOOK
        setDatosRegistro(({}));

        //VACIO LOS INPUTS
        let inputs = document.getElementById("cuadro-registro").childNodes
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

    }

    return(
        <div id="container-registro">
            <Lateral/>
            <div id="contenido-registro">
                <h2>Registrar Usuario</h2>
                <div id="cuadro-registro">
                    <input autoComplete="off" placeholder="email" type="email" name="correo" id="correo-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="password" type="password" name="clave" id="clave-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="DNI" type="text" name="dni" id="dni-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="Name" type="text" name="nombre" id="nombre-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="Surname" type="text" name="apellidos" id="apellidos-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="Address (calle, portal y piso)" type="text" name="direccion" id="direccion-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="City" type="text" name="ciudad" id="ciudad-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="Phone" type="text" name="telefono" id="telefono-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                    <input autoComplete="off" placeholder="Role (admin or user)" type="text" name="rol" id="rol-registro" onChange={(e)=>guardarDatosRegistro(e)}/>
                </div>
                <div  className="boton" onClick={()=>registrarUsuario()}>REGISTRAR</div>
            </div>
        </div>
    )
};

export default connect((state)=>({
    datosLogin: state.datosLogin
}))(RegistroUsuarios);