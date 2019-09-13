
import React from "react";
import Entete from "../Components/HeaderBloc";
import BlocPhotoGauche from "../Components/BlocGauche";
import BlocPhotoDroit from "../Components/BlocDroit";

// Elo :Ce composant sera appelé dans le mur, c'est le rendu final (vue) de la fiche description. Il comprends une DivWrapCOntainer, qui enveloppe les composants. HeaderFiche = Composant du fichier HeaderBloc, le BlocPhotoDroit/Gauche sont les container des descriptions et date (composant text), la difference est la position de la photo ( droit = photo à droit et gauche= photo à gauche)

function Describe (props) {
    console.log(props)
        return (
            <div className="DivWrapContainer">
            <Entete data={props.data} retour={props.retour}></Entete>

            <BlocPhotoGauche data={props.data}></BlocPhotoGauche>
            <BlocPhotoDroit data={props.data}></BlocPhotoDroit>
            <BlocPhotoGauche data={props.data}></BlocPhotoGauche>
            </div>
        );
    }

export default Describe;