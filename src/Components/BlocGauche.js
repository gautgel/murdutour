import React from "react";
import PictureDes from "./PictureDes";
import Text from "./Text";
import '../App.css';

// Elo : Ce composant sera  le containerqui aura la photo à gauche dans la description

function BlocPhotoGauche(props) {
    return (
        <div className ="BlocGauche row">

    <PictureDes Pictures="PictureGauche rowLeft" src={props.data[0].url}></PictureDes>
    <Text DivName="DateBis" texte={props.data[0].date}></Text>
    <Text DivName="rowLeft" texte={props.data[0].des}></Text>
        </div>
    );
}
export default BlocPhotoGauche;
