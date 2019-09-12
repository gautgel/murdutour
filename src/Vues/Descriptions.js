// Composant avec des paragraphes qui seront modifiés il y aura donc des props pour le style 
import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
                <div className="description">
                    <h2 style={{color: this.state.color}}>{this.props.data[0].name}</h2>
                    <button style={{color:"red" , width:"10vw", height: "10vh" }} onClick={this.props.retour}>Retour sur le mur</button>
                </div> 
                );
    }
}

export default Description;