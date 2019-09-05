import React, { Component } from 'react';
/* *********************************************************************
Elodie => Composant titre ok et testé, je lui rajoute la classe "Title"
pour les modifs CSS
  <Title TitreHeros={"Les Héros du Tour"}></Title>
  retrait de la class pour faire une function par encore tester la function
 ***********************************************************************/
function Title (props) {
    return ( <h1 className="Title">{props.TitreHeros}</h1>);
    }
 
export default Title;

