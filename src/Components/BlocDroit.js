import React from "react";
import PictureDes from "../Components/PictureDes";
import Text from "./Text";

// elo :Bloc ou la photo sera à droite
function BlocPhotoDroit(props) {
    return (
        <div className="BlocDroit row">
    
    <Text DivName="rowRight" texte={props.data[0].des}></Text>
    <Text DivName="Date" texte={props.data[0].date}></Text>
    <PictureDes Pictures="PictureDroite rowRight" src={props.data[0].url}></PictureDes>
        </div>
    );
}
export default BlocPhotoDroit;
