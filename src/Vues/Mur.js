import React, { Component } from 'react';
import { datas } from '../data/datas'
import VignetteParent from '../Components/Vignettes'

class Mur extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    _onclick=(e)=>{
        console.log("click")
        console.log(e.currentTarget.dataset.id)

    }

    AfficherVignette=()=>{
        console.log(datas)
        /* Elodie =>
In the synthax of map makes a "loop" in a table so you have to be careful I store the data in a const */

    const result=datas.map((item,index)=>{

        /* The map function automatically returns returns, so you must redefine each time*/

        return  <VignetteParent key={`vignette_${index}`} url={item.fiche[0].des1[0].url} id={item.id} date={item.fiche[0].date} _onclick={(e)=>this._onclick(e)}></VignetteParent>
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