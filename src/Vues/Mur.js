import React, { Component } from "react";
import { datas } from "../data/datas";
import VignetteParent from "../Components/Vignettes";
import {
  widthScreen,
  heightScreen,
  nbCols,
  nbRows,
  cols,
  rows
} from "../data/config";
import Description from "./Descriptions";

let isdrag = 0;
let _timeOut = null;

class Mur extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isfiche: 0,
        id: 0,
        data: []
        };
    }
    //I use ComponentDidMount in order to update the component at the end of the render as the component is mounted. When it is the case, do this.
    componentDidMount() {
        this.construction();
    }
    //ComponentDidUpdate is there when the render is updated,
    componentDidUpdate() {
        if (this.state.isfiche === 0) {
        this.construction();
        }
    }

    construction = () => {
        console.log("dididididid");

        const mur = document.querySelector(".mur");

        if (mur) {
        const vigX = cols * 10;
        const vigY = rows * 5;
        const borderMur = 20;

        console.log(vigX, vigY);
        const top = vigY + borderMur;

        const left = vigX + borderMur;

        console.log(left, top);

        const X = left - widthScreen;

        const Y = top - heightScreen;

        const transX = X / 2;
        const transY = Y / 2;

        console.log(transX, transY);

        mur.style.display = "grid";
        mur.style.gridTemplateColumns = "repeat(" + nbCols + "," + cols + "px)";
        mur.style.gridTemplateRows = "repeat(" + nbRows + "," + rows + "px)";
        mur.style.top = `-${transY}px`;
        mur.style.left = `-${transX}px`;

        this.deplacer();
        }
    };

    deplacer = () => {
        const mur = document.querySelector(".mur");

        let TopPosDiv = 0;
        let LeftPosdiv = 0;
        let oldX = 0;
        let oldY = 0;
        let PositionX = 0;
        let PositionY = 0;
        // console.log(_PageX)

        function Drag() {
        mur.addEventListener("mousedown", _MouseDown);
        }
        Drag();
        function _MouseDown(e) {
        TopPosDiv = e.clientX;
        LeftPosdiv = e.clientY;
        mur.addEventListener("mouseup", StopDrag);
        mur.addEventListener("mousemove", MouseMoveDiv);
        }

        function MouseMoveDiv(e) {
        isdrag = 1;
        console.log(mur.getBoundingClientRect());

        PositionX = e.clientX - TopPosDiv + oldX;
        PositionY = e.clientY - LeftPosdiv + oldY;

        mur.style.transform = `translate( ${PositionX}px, ${PositionY}px)`;
        }

        function StopDrag() {
        if (_timeOut) clearTimeout();

        _timeOut = setTimeout(() => {
            clearTimeout(_timeOut);
            isdrag = 0;
        }, 100);

        oldX = PositionX;
        oldY = PositionY;
        mur.removeEventListener("mouseup", StopDrag);
        mur.removeEventListener("mousemove", MouseMoveDiv);
        }
    };

    result_filter = (id)=>{
        
        let _result = datas.filter(el=> 
            {
                if (el.id === Number(id)) {
                return el;
        }});
        return _result
    }

    _onclick = e => {
        const _id = e.currentTarget.dataset.id;
        const result = this.result_filter(_id);
            if (!isdrag) {
        
        this.setState({
            isfiche: 1,
            id: _id,
            data: result
        }
        );
        

        }
        
    
    };

    retour = e => {
        this.setState({
        isfiche: 0
        });
        this.construction();
    };

    AfficherVignette = () => {
    /* Elodie =>
        In the synthax of map makes a "loop" in a table so you have to be careful I store the data in a const */

    const result = datas.map((item, index) => {
        /* The map function automatically returns returns, so you must redefine each time*/

        return (
            <VignetteParent
            key={`vignette_${index}`}
            url={item.fiche[0].des1[0].url}
            id={item.id}
            date={item.name}
            _onclick={e => this._onclick(e)}
            ></VignetteParent>
        );
        });

    /*request a return of the result of the map function  */

    return result;
    };
    render() {
        console.log("render",this.state);
        /* return the function map to get the result */
        return this.state.isfiche === 0 ? (
        <div className="mur">{this.AfficherVignette()}</div>
        ) : (
        <Description data={this.state.data} retour={e => this.retour(e)}></Description>
        );
    }
}
export default Mur;
