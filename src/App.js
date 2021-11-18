import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import Orders from './Containers/Orders/Orders';
import Movies from './Containers/Movies/Movies';


function App() {

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;

