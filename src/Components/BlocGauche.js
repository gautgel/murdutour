import React from "react";
import PictureDes from "./PictureDes";
import Text from "./Text";
import '../App.css';

// Elo : Ce composant sera  le containerqui aura la photo à gauche dans la description

function BlocPhotoGauche(props) {
    return (
        <div className="BlocGauche row">

    <PictureDes id={`photo${props.id}`} class={"dateLeft"} date={props.date} Pictures="rowLeft" src={props.src}></PictureDes>
    {/* <Text DivName="DateBis" texte={props.date}></Text> */}
    <Text DivName="rowLeft" texte={props.des}></Text>
        </div>
    );
}
export default BlocPhotoGauche;
