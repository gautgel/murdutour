import React from "react";
import PhotosCyclistes from "../Components/Photos";
import Text from "./Text";

// elo :Bloc ou la photo sera à droite
function BlocPhotoDroit(props) {
    return (
        <div className="BlocDroit">
    
    <Text DivName="History" texte="coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo"></Text>
    <Text DivName="Date" texte="1954"></Text>
      <PhotosCyclistes Pictures="PictureDroite"></PhotosCyclistes>
        </div>
    );
}
export default BlocPhotoDroit;
