import React, { Component } from "react";
import "./App.css";
import Mur from "./Vues/Mur";

class App extends Component {
  // ecran=()=>{
  //   // console.log(screen);
  //   // console.log(document);
  //   // console.log(window);
  //   // console.log(screen.height);
  //   // console.log(screen.width);
  //   // console.log(window.innerHeight);
  //   // console.log(window.innerWidth);
  //   // window.addEventListener("scroll", function(){
  //   //   console.log(window.scrollY);
  //   // })
    
  // }
  componentDidMount(){
     console.log(this.refs)
  }
  render() {
    // this.ecran()
    return (
      <Mur ref="Mur">
        
      </Mur>
    );
  }
}

export default App;
