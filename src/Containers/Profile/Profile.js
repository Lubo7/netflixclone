
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT } from '../../redux/types';

const Profile = (props) => {

    const logOut = () => {        
        props.dispatch({type:LOGOUT});

    }

    if(props.credentials?.token !== ''){
        return (
            <div className="designProfile">
                <div className="user">{props.credentials?.user?.name}</div>
                <div className="user">{props.credentials?.user?.email}</div>
                <div className="user" onClick={()=>logOut()}>LOGOUT</div>
            </div>
        )

    } else {
        return (
            <div className="designProfile">
                NADIE SABE NADA DE NINGÚN USUARIO---
            </div>
        )
    }

    
};

export default connect((state)=>({
    credentials: state.credentials
}))(Profile);