
import React from "react";
import Entete from "../Components/HeaderBloc";

//Elo: This component will be called in the wall, it is the final rendering (view) of the description sheet. It includes a DivWrapCOntainer, which wraps the components. HeaderFiche = Component of the HeaderBloc file, the Left /RightPhoto Block are the container of descriptions and date (component text), the difference is the position of the photo (right = photo on the right and left = photo on the left)
//Gaut: The props.children is used to nest other components that are called elsewhere.


function Describe (props) {
    console.log(props)
        return (
            <div className="DivWrapContainer">
                
            <Entete data={props.data} retour={props.retour}></Entete>
            {props.children}
            </div>
        );
    }

export default Describe;