import React from "react";
/*********************************************************
Elodie :This "function" component is functional and has been tested in the App.js

Je met une props pour la class sur la div, comme elle sera utilisée plusieurs fois, afin de la positionné différement 
********************************************************/
const Text = props => {
  return (
    <div className={props.DivName}>
      <p>{props.texte}</p>
    </div>
  );
}
export default Text;
