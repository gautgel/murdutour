import React, { Component } from "react";
/* *********************************************************
Elodie => Title component of type "function" ok and tested, I add the class "Title"
for CSS modifications
 *******************************************************/
function Title(props) {
  return <h1 className="Title">{props.TitreHeros}</h1>;
}

export default Title;
