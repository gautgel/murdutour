import React from 'react';
/* ******************************************
Elodie=> "Class" photo component that returns
the img (fixed for the moment)
*********************************************/
const PhotosCyclistes=(props)=>
  {
    return <div className="photo" style={{backgroundImage: `url(${props._url})`}}>

    </div>;
}

export default PhotosCyclistes;
