import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home/Home.css";
import Navbar from '../Navbar/Navbar.js';
import Banner from '../Banner/Banner.js';
import Slider from '../Slider/Slider.js';

function Home() {
      return (
        <>
        <Navbar />
        <Banner />
        <Slider />  
        </>
    )
}

export default Home;