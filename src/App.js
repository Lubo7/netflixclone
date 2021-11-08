import React, { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Slider from './Slider';


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
