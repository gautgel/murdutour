import React, { Component } from "react";

/*********************************************************************
Elodie : Ce composant text est fonctionnel et a été testé dans le App.js
Je laisse le state pour le moment, au cas où. Je met une classe "Plice"
au cas ou le paragraph devrait être modifié 
 <Text description={"coucou je suis une description"}></Text>

 changer le composant pour mettre une function car pas besoin de changer le state
**********************************************************************/


class Text extends Component {
  state = {};
  render() {
    return <p className="Police">{this.props.description}</p>;
  }
}

export default Text;
