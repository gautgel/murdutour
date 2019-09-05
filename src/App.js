import React, { Component } from 'react';
import './App.css';
import VignetteParent from './Components/Vignettes';

class App extends Component {
  render() {
    return (
      <div className="MurDesHeros">
        <VignetteParent></VignetteParent>
        <div className="">
        </div>
        <p className="">
        </p>
      </div>
    );
  }
}

export default App;
