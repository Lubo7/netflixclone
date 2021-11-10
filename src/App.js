import React, { Component } from 'react';
import Navbar from './Containers/Navbar/Navbar.js';
import Banner from './Containers/Banner/Banner.js';
import Slider from './Containers/Slider/Slider.js';


export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Banner/>
        <Slider/>

      </div>
    )
  }
}

export default App;
