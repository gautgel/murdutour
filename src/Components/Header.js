import React from "react";

function Header (props) {
    return (
        <PicturesDes Pictures="PictureGauche rowLeft" ></PicturesDes>
        <Text DivName="DateBis" texte={props.data[0].date}></Text>
        <Text DivName="rowLeft" texte={props.data[0].des}></Text>
    );
  }
  export default Header;