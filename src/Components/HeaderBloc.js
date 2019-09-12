import React from "react";
import PhotosCyclistes from "../Components/Photos";
import Text from "../Components/Text";

//Premier composant HEADER qui lui ne change pas au niveau de la vue Description (fiche de chaque Heros)

// J'ai placé une props pour la class au niveau de mes composant texte afin de pouvoir le deplacer et lui appliqué un css défini

function HeaderFiche(props) {
  return (
      <div className="BlocHeader">
      <Text DivName="TitleName" texte="Bernard Hinault"></Text>
      <PhotosCyclistes Pictures="HeaderPicture"></PhotosCyclistes>
      <Text DivName="Date" texte="1954"></Text>
      <Text DivName="History" texte="coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo"></Text>
      <button onClick={props.retour}>Le mur des Héros</button>
    </div>
  );
}
export default HeaderFiche;