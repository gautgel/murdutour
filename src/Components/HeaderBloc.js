import React from "react";
import Text from "../Components/Text";

//Elo :Premier composant HEADER qui lui ne change pas au niveau de la vue Description (fiche de chaque Heros)

// Elo :J'ai placé une props pour changer la class de la div au niveau de mes composant texte afin de pouvoir le deplacer et lui appliqué un css défini

function Entete(props) {
  return (
    <div className="BlocHeader row">
    <Text DivName="TitleName" texte={props.data[0].name}></Text>
      <button className="ReturnButton" onClick={props.retour}>Le mur des Héros</button>
    </div>
  );
}
export default Entete;