import React from "react";
import Text from "./Text";
import '../App.css';
import PhotosCyclistes from "./Photos"


/* *********************************************************Elodie=> Thumbnail component that will encompass the photo and date (compo text for the date)
*********************************************************/


const VignetteParent=(props)=> {
  return (
      <div data-id={props.id} style={{background: props.color}} className="vignette " onClick={props._onclick}>
        <PhotosCyclistes Pictures="photo" _url={props.url}></PhotosCyclistes>
          {/* <Text texte={props.date}></Text> */}
      </div>
    );
  }

export default VignetteParent;


