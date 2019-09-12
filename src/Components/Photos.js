import React from 'react';
/* ******************************************
Elodie=> "Class" photo component that returns
the img (fixed for the moment)
*********************************************/
const PhotosCyclistes=(props)=>
  {
    return <div className={props.Pictures}>

    </div>
}

export default PhotosCyclistes;

// Elodie : ancienne ecriture props avant test fich descriptive return <div className={props.Pictures} style={{backgroundImage: `url(${props._url})`}}>
// </div>
