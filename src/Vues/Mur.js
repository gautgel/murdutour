import React, { Component } from 'react';
import { datas } from '../data/datas';
import VignetteParent from '../Components/Vignettes';
import Fiche from './Descriptions';
import {widthScreen, heightScreen, nbCols, nbRows, cols, rows} from '../data/config';


class Mur extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isfiche: 0,
            id: 0,
        }
    }
    //I use ComponentDidMount in order to update the component at the end of the render as the component is mounted. When it is the case, do this.
    componentDidMount(){
        this.construction();
    }
    //ComponentDidUpdate is there when the render is updated, 
    componentDidUpdate(){
        if(this.state.isfiche===0){
            this.construction();
        }
    }
    construction=()=>{
        const mur = document.querySelector(".mur");
        
        const vigX = cols * 10;
        const vigY = rows * 5;
        const borderMur = 20;   

        const top = vigY + borderMur;

        const left = vigX + borderMur;

        console.log(left, top);

        const X = left - widthScreen;

        const Y = top - heightScreen;

        const transX = X/2;
        const transY = Y/2;

        const margX = transX/2;
        const margY = transY/2;

        console.log(transX, transY);
        console.log(margX, margY);

        
        mur.style.display="grid";
        mur.style.gridTemplateColumns="repeat("+ nbCols + "," + cols + "px)";
        mur.style.gridTemplateRows="repeat(" + nbRows + "," + rows + "px)";
        mur.style.top= `-${transY}px`;
        mur.style.left= `-${transX}px`;

    }

    _onclick=(e)=>{
        console.log("click")
        
        this.setState({
            isfiche: 1,
            id : e.currentTarget.dataset.id
        })

    }

    retour=(e)=>{
        console.log(e)
        this.setState({
            isfiche: 0
        })
        this.construction();
    }

    AfficherVignette=()=>{
        console.log(datas);
        
        
        /* Elodie =>
In the synthax of map makes a "loop" in a table so you have to be careful I store the data in a const */

    const result=datas.map((item,index)=>{
        /* The map function automatically returns returns, so you must redefine each time*/

        return  <VignetteParent key={`vignette_${index}`} url={item.fiche[0].des1[0].url} id={item.id} date={item.fiche[0].date} _onclick={(e)=>this._onclick(e)}></VignetteParent>
    })

    /*request a return of the result of the map function  */
    
    return result;
    }
    render() {
        /* return the function map to get the result */
        return (
            
                
                    this.state.isfiche===0 ? 
                    <div className="mur">
                        {this.AfficherVignette()} 
                        <div className="cercle"></div>
                    </div>
                        : 
                    <Fiche retour={(e)=>this.retour(e)}></Fiche>
        );
    }
}
export default Mur;