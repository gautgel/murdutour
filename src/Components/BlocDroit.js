import React from "react";
import PictureDes from "../Components/PictureDes";
import Text from "./Text";

// elo :Bloc ou la photo sera à droite
function BlocPhotoDroit(props) {
    return (
        <div data={props.data} className="BlocDroit row">
    
    <Text DivName="rowRight" texte={props.des}></Text>
    {/* <Text DivName="Date" texte={props.date}></Text> */}
    <PictureDes id={`photo${props.id}`} class={"dateRight"} date={props.date} Pictures="rowRight" src={props.src}></PictureDes>
        </div>
    );
}
export default BlocPhotoDroit;
