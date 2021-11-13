import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { Component } from 'react';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

