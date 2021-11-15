import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home/Home.css";
import Navbar from '../Navbar/Navbar.js';
import Banner from '../Banner/Banner.js';
import Slider from '../Slider/Slider.js';
import Orders from '../Orders/Orders.js';
import Carousel from 'react-elastic-carousel';
import Card from '../Slider/Card.js';

function Home() {
      return (
        <>
        <Navbar />
        <Banner />
        <Slider />  
        <Orders/>
        </>
    )
}

export default Home;