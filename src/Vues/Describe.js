
import React from "react";
import HeaderFiche from "../Components/HeaderBloc";
import BlocPhotoGauche from "../Components/BlocGauche";
import BlocPhotoDroit from "../Components/BlocDroit";
import Text from "../Components/Text";

// Elo :Ce composant sera appelé dans le mur, c'est le rendu final (vue) de la fiche description. Il comprends une DivWrapCOntainer, qui enveloppe les composants. HeaderFiche = Composant du fichier HeaderBloc, le BlocPhotoDroit/Gauche sont les container des descriptions et date (composant text), la difference est la position de la photo ( droit = photo à droit et gauche= photo à gauche)

function Describe (props) {
        return (
            <div className="DivWrapContainer">
            <Text></Text>
            <HeaderFiche retour={props.retour}></HeaderFiche>
            <BlocPhotoDroit></BlocPhotoDroit>
            <BlocPhotoGauche></BlocPhotoGauche>
            <BlocPhotoDroit></BlocPhotoDroit>
            </div>
        );
    }

export default Describe;