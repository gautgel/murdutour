import React, { Component } from "react";
import Text from "./Text";
import '../App.css';
import PhotosCyclistes from "./Photos"


/* *********************************************************Elodie=> Thumbnail component that will encompass the photo and date (compo text for the date)
*********************************************************/

const VignetteParent=(props)=> {
    return (
      <div id={props.id} style={{background: props.color}} className="vignette">
        <PhotosCyclistes></PhotosCyclistes>
        <div>
          <Text texte={props.name}></Text>
        </div>
      </div>
    );
  }

export default VignetteParent;
