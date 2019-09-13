import React from "react";
import PhotosCyclistes from "./Photos";
import Text from "./Text";
import '../App.css';

// Elo : Ce composant sera  le containerqui aura la photo à gauche dans la description

function BlocPhotoGauche(props) {
    return (
        <div className ="BlocGauche">

    <PhotosCyclistes Pictures="PictureGauche"></PhotosCyclistes>
    <Text DivName="DateBis" texte="1954"></Text>
    <Text DivName="HistoryBis" texte="coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo"></Text>
        </div>
    );
}
export default BlocPhotoGauche;
