import React from "react";
import PhotosCyclistes from "../Components/Photos";
import Text from "../Components/Text";

//Elo :Premier composant HEADER qui lui ne change pas au niveau de la vue Description (fiche de chaque Heros)

// Elo :J'ai placé une props pour changer la class de la div au niveau de mes composant texte afin de pouvoir le deplacer et lui appliqué un css défini

function HeaderFiche(props) {
  return (
      <div className="BlocHeader">
      <Text DivName="TitleName" texte="Bernard Hinault"></Text>
      <PhotosCyclistes Pictures="HeaderPicture"></PhotosCyclistes>
      <button onClick={props.retour}>Le mur des Héros</button>
      <Text DivName="History" texte="coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo
      coucou je suis le monsieur qui fait du vélo"></Text>
      <Text DivName="Date" texte="1954"></Text>
    </div>
  );
}
export default HeaderFiche;