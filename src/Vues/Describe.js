
import React from "react";
import HeaderFiche from "../Components/HeaderBloc";
import BlocPhotoGauche from "../Components/BlocGauche";
import BlocPhotoDroit from "../Components/BlocDroit";

function Describe (props) {
        return (
            <div className="DivWrapContainer">
            <HeaderFiche retour={props.retour}></HeaderFiche>
            <BlocPhotoGauche></BlocPhotoGauche>
            <BlocPhotoDroit></BlocPhotoDroit>
            <BlocPhotoGauche></BlocPhotoGauche>
            <BlocPhotoDroit></BlocPhotoDroit>
            <BlocPhotoGauche></BlocPhotoGauche>
            <BlocPhotoDroit></BlocPhotoDroit>
            <BlocPhotoGauche></BlocPhotoGauche>
            <BlocPhotoDroit></BlocPhotoDroit>
            </div>
        );
    }

export default Describe;