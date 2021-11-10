import React from 'react';
import "../Navbar/Navbar.css";


function Navbar() {
    return (
        <div className="navbar">
            <span><img className="navbar_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"></img></span>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My list</span>
            <span>Kids</span>
            <span>Login/Register</span>
        </div>
    )
}

export default Navbar;