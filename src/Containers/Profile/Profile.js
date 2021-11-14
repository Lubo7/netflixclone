
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Profile.css';
import { LOGOUT, UPDATE_USER  } from '../../redux/types';

const Profile = (props) => {

    const [userData, setUserData] = useState(); //Con este hook inicializamos los datos de usuario

    let navigate = useNavigate(); // direccionar el usuario, en este caso, a url de login

    //este hook se ejecuta cuando cambiamos los props.credentials
    useEffect(() => {
        
        setUserData(props.credentials.user); // setear user data al valor que estan el props.credentials.user

    }, [props.credentials]);

  //la funccion handleSubmit es asyncrona porque hacemos CRUD (en este caso Update). 
  //Aunque no se actualizan datos, se ejecuta la funcion - con "catch"
    const handleSubmit = async () => {

        try {
            let res = await axios.update(`https://reto-api.herokuapp.com/api/${userData._id}`, userData); //la operacion Update con este end-point usuario pasamos por id, si la api procesa todo bien actualizamos los datos en la database.
            props.dispatch({type: UPDATE_USER, payload:userData}); //si no se detecta/genera/lanza ningun error, los datos se actualizan en Redux con la informacion de userData

        } catch (error) {
            console.log(error)
        }
    };

    const logOut = () => {
    
        props.dispatch({ type: LOGOUT });
        navigate("/login");
    }

    const handleChange = (e) => {
        //Función encargada de bindear el hook con los inputs
        setUserData({ ...userData, [e.target.name]: e.target.value }); //Guardo en hook en userData name y value de cada input
    
    }

    return (
        <div className="form">
            <h3>Perfil</h3>
            <div className="form-group">
                <input
                    name="name"
                    type="text"
                    placeholder="Name and surnam"
                    value={userData?.name || ''} //Si no ponemos ningunos datos (userData.name), lo deja vacio y lo renderiza
                    onChange={handleChange} // cuando se lanza el evento onChange, se ejecuta la funcion handleChange
                />
            </div>
            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={userData?.email || ''} //Si no ponemos ningunos datos (userData.email), lo deja vacio y lo renderiza
                    onChange={handleChange} // cuando se lanza el evento onChange, se ejecuta la funcion handleChange
                />
            </div>
            <div className="form-group">
                <input
                    name="password"
                    type="password"
                    placeholder="pasword"
                    value={userData?.password || ''} //Si no ponemos ningunos datos (userData.password), lo deja vacio y lo renderiza
                    onChange={handleChange} // cuando se lanza el evento onChange, se ejecuta la funcion handleChange
                />
            </div>
            <div className="basics_row">    
            <div className="send-button" onClick={handleSubmit}>Actualizar</div> {/*Un evento onClick ejecuta la funcion handleSubmit*/}
            <div className="out-button" onClick={logOut}>Cerrar sesión</div> {/**/}
            </div>
           

        </div>
    )
};


export default connect((state)=>({
    credentials: state.credentials
}))(Profile);