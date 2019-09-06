import React, { Component } from "react";
import Text from "./Text";
import '../App.css';
import PhotosCyclistes from "./Photos";

/* *********************************************************Elodie=> Thumbnail component that will encompass the photo and date (compo text for the date)
*********************************************************/

class VignetteParent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Picture">
       <PhotosCyclistes></PhotosCyclistes>
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
