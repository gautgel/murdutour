import React, { Component } from 'react';
import datas from '../data/datas'
import VignetteParent from '../Components/Vignettes'

// composant container qui englobe les vignettes (overflow hiden pour le drag )


class Mur extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(datas)
    }

    
    render() { 
        return ( 
            <div className="mur">
                <VignetteParent color={"red"}></VignetteParent>
                <VignetteParent color={"blue"}></VignetteParent>
                <VignetteParent color={"grey"}></VignetteParent>
                <VignetteParent color={"yellow"}></VignetteParent>
                <VignetteParent color={"brown"}></VignetteParent>
            </div>
         );
    }
}
 
export default Mur;