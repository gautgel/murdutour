import React from 'react';
/* ******************************************
Elodie=> "Class" photo component that returns
the img (fixed for the moment)
*********************************************/
const PictureDes =(props)=>
  {
    return (
    <div className={props.Pictures}>
        <img  id={props.id} className="LesPhotos" src={props.src} alt=""/>
        <div className={props.class}>{props.date}</div>
    </div>
    )
}

export default PictureDes;

// Elodie : ancienne ecriture props avant test fich descriptive return <div className={props.Pictures} style={{backgroundImage: `url(${props._url})`}}>
// </div>
