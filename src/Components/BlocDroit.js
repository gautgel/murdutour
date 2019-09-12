import React from "react";
import PhotosCyclistes from "../Components/Photos";
import Text from "./Text";

// Bloc ou la photo sera à droite
function BlocPhotoDroit(props) {
    return (
        <div className="BlocDroit">
    
    <PhotosCyclistes _url={"../public/assets/img/bernard1978.jpg"}></PhotosCyclistes>
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
export default BlocPhotoDroit;