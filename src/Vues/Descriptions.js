// Composant avec des paragraphes qui seront modifiés il y aura donc des props pour le style 
import React, { Component } from 'react';

class Fiche extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: "blue"
         }
    }
    render() { 
        return ( 
                <div>
                    <p style={{color: this.state.color}}>je suis sur la fiche</p>
                    <button style={{color:"red" , width:"10vw", height: "10vh" }} onClick={this.props.retour}>Retour sur le mur</button>
                </div> 
                );
    }
}
 
export default Fiche;