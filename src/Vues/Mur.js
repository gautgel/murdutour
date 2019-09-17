import React, { Component } from "react";
import { datas } from "../data/datas";
import VignetteParent from "../Components/Vignettes";
import Draggable from 'gsap/Draggable'
import {
  widthScreen,
  heightScreen,
  nbCols,
  nbRows,
  cols,
  rows
} from "../data/config";
import Describe from "./Describe";
import BlocPhotoDroit from "../Components/BlocDroit";
import BlocPhotoGauche from "../Components/BlocGauche";
import Preloader from "./Preloader";

let isdrag = 0;
let _timeOut = null;

class Mur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isfiche: 0,
      id: 0,
      data: [],
      isloading: 0
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
    //the draggable.create function is very easy to use, type of drag, the resistance of the drag, the borders of the drag with window so the window compared to the div wall. it's a greensock pluggin 
    Draggable.create(".mur", {type:"x,y", edgeResistance:1, bounds:window});



    // let TopPosDiv = 0;
    // let LeftPosdiv = 0;
    // let oldX = 0;
    // let oldY = 0;
    // let PositionX = 0;
    // let PositionY = 0;
    // console.log(_PageX)
    // Elo : Début de la function Drag, action qui se passe lorsque l'utilisateur appuit sur la souris
    // function Drag() {
    //   mur.addEventListener("mousedown", _MouseDown);
    // }
    // elo :Appel des fonctions selon l'action de l'utilisateur mouseup arret du drag et mousemove deplacement
    // Drag();
    // function _MouseDown(e) {
    //   TopPosDiv = e.clientX;
    //   LeftPosdiv = e.clientY;
    //   mur.addEventListener("mouseup", StopDrag);
    //   mur.addEventListener("mousemove", MouseMoveDiv);
    // }
    //  Elo : fonction drag relative à la position de l'élément drager (ici le mur des héros que l'ont peur glisser)
    // function MouseMoveDiv(e) {
    //   isdrag = 1;
    //   console.log(mur.getBoundingClientRect());

    //   PositionX = e.clientX - TopPosDiv + oldX;
    //   PositionY = e.clientY - LeftPosdiv + oldY;

    //   mur.style.transform = `translate( ${PositionX}px, ${PositionY}px)`;
    // }
    // elo : function qui stop le drap au mouseup, gauthier ajoute le timeOut pour la gestion des événement (mouseup/click en conflit)
    // function StopDrag() {
    //   if (_timeOut) clearTimeout();

    //   _timeOut = setTimeout(() => {
    //     clearTimeout(_timeOut);
    //     isdrag = 0;
    //   }, 100);

    //   oldX = PositionX;
    //   oldY = PositionY;
    //   mur.removeEventListener("mouseup", StopDrag);
    //   mur.removeEventListener("mousemove", MouseMoveDiv);
    // }
  };
  // ********************************** Elo : Fin de mes fonctions pour le mur
  result_filter = id => {
    let _result = datas.filter(el => {
      if (el.id === Number(id)) {
        return el;
      }
    });
    return _result;
  };

  _onclick = e => {
    const _id = e.currentTarget.dataset.id;
    const result = this.result_filter(_id);
    if (!isdrag) {
      this.setState({
        isfiche: 1,
        id: _id,
        data: result
      });
      document.querySelector("body").classList.add("isscroll");
    }
  };

  retour = () => {
    this.setState({
      isfiche: 0
    });
    this.construction();
    document.querySelector("body").classList.remove("isscroll");
  };

  AfficherVignette = () => {
    /* Elodie =>
        In the synthax of map makes a "loop" in a table so you have to be careful I store the data in a const */

    const result = datas.map((item, index) => {
      /* The map function automatically returns returns, so you must redefine each time*/

      return (
        <VignetteParent
          key={`vignette_${index}`}
          url={item.url}
          id={item.id}
          name={item.name}
          _onclick={e => this._onclick(e)}
        ></VignetteParent>
      );
    });

    /*request a return of the result of the map function  */

    return result;
  };
  //this function allows to generate according to the odd or even number of the index of the array data [0] .fiche with a map function.
  generate = () => {
    console.log(this.state.data[0].fiche);
    const generate = this.state.data[0].fiche.map((item, index) => {
      const chiffre = index;
      return chiffre % 2 === 0 ? (
        <BlocPhotoGauche
          src={item.url}
          date={item.date}
          des={item.des}
          key={`bloc_${index}`}
        ></BlocPhotoGauche>
      ) : (
        <BlocPhotoDroit
          src={item.url}
          date={item.date}
          des={item.des}
          key={`bloc_${index}`}
        ></BlocPhotoDroit>
      );
    });
    return generate;
  };
  //the preloader function is here to display the preloader for x time with a setTimeout, I update the isloading state to 1 in order to tell it to show me the pre loader and when the setTimeout is finished it returns to 0
  preloader = () => {
    setTimeout(() => {
      this.setState({ isloading: 1 });
    }, 3000);
  };

  render() {
    console.log("render", this.state);
    /* return the function map to get the result */
    return this.state.isloading === 0 ? (
      <Preloader>{this.preloader()}</Preloader>
    ) : this.state.isfiche === 0 ? (
        <React.Fragment>
            <div className="linear top"></div>
            <div className="linear left"></div>
            <div className="linear right"></div>
            <div className="linear bottom"></div>
            <div className="mur">
            
            {this.AfficherVignette()}
            </div>
      </React.Fragment>
        
    ) : (
      <Describe data={this.state.data} retour={e => this.retour(e)}>
        {this.generate()}
      </Describe>
    );
  }
}
export default Mur;
