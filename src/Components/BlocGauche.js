import React from "react";
import PhotosCyclistes from "./Photos";
import Text from "./Text";
import '../App.css';

// Ce composant sera celui qui aura la photo à gauche sur la 
// vue de la fiche de chaque héro

function BlocPhotoGauche(props) {
    return (
        <div className ="BlocGauche">

    <PhotosCyclistes _url="bernard1978.jpg"></PhotosCyclistes>
    <Text DivName="Date" texte="1954"></Text>
    <Text DivName="History" texte="coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo"></Text>
        </div>
    );
}
export default BlocPhotoGauche;
