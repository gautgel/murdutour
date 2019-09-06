import React, { Component } from "react";
import Text from "./Text";
import '../App.css';
import PhotosCyclistes from "./Photos";

/* *********************************************************Elodie=> Thumbnail component that will encompass the photo and date (compo text for the date)
*********************************************************/

const VignetteParent=(props)=> {
    return (
      <div style={{background: props.color}} className="vignette">
        <PhotosCyclistes></PhotosCyclistes>
        <div>
          <Text></Text>
        </div>
      </div>
    );
  }

export default VignetteParent;
