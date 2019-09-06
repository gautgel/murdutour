import React, { Component } from 'react';
import { datas } from '../data/datas'
import VignetteParent from '../Components/Vignettes'

class Mur extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    AfficherVignette=()=>{
        /* Elodie =>
        
In the synthax of map makes a "loop" in a table so you have to be careful I store the data in a const */

    const result=datas.map((item)=>{

        /* The map function automatically returns returns, so you must redefine each time*/

        return  <VignetteParent id={item.id} name={item.name}></VignetteParent>
    })
    /*request a return of the result of the map function  */
    return result
    }
    render() { 
        /* return the function map to get the result */
        return (             
            <div className="mur">
                {this.AfficherVignette()}
            </div>
        );
    }
}
export default Mur;