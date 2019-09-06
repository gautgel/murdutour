import React, { Component } from "react";
import photo from "./velo.jpg";

/* ******************************************
Elodie=> "Class" photo component that returns
the img (fixed for the moment)
*********************************************/

class PhotosCyclistes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <img src={photo} alt="img du coureur" />;
  }
}

export default PhotosCyclistes;
