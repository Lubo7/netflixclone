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
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My list</span>
            <span>Kids</span>
            <span onClick={() => llevame()}>Login/Register</span>
        </div>
    )
}

export default Navbar;