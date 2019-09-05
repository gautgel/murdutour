import React, { Component } from "react";
import Text from "./Text";
import photo from "./velo.jpg";
import '../App.css';

/*  Composant parent de Dates.js et de Photos.js*/

class VignetteParent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Picture">
        <img src={photo} alt="img du coureur" />
        <div>
          <Text
            description={
              "2019"
            }
          ></Text>
        </div>
      </div>
    );
  }
}

export default VignetteParent;
