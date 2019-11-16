import React from "react";
import '../App.css';
import PhotosCyclistes from "./Photos"


/* *********************************************************Elodie=> Thumbnail component that will encompass the photo and date (compo text for the date)
*********************************************************/


const VignetteParent=React.forwardRef((props,ref)=> {
  return (
      <div  data-id={props.id} style={{background: props.color}} className="vignette" onClick={props._onclick}>
        <PhotosCyclistes ref={ref} Pictures="photo" _url={props.url} name={props.name}></PhotosCyclistes>
          
      </div>
    );
  })

export default VignetteParent;


