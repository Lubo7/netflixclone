import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Navbar/Navbar.css";

function Navbar() {
    const history = useNavigate();
    const llevame = () => {
        history('/login');
    }
    return (
        <div className="navbar">
            <span><img className="navbar_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"></img></span>
            <span>Home</span>
            <span>Movies</span>
            <span>My list</span>
            <span onClick={() => llevame()}>Register</span>
            <span onClick={() => llevame()}>Login</span>
        </div>
    )
}

export default Navbar;