import React from 'react';
/* **
Elodie=> "Class" photo component that returns
the img (fixed for the moment)
*/
const PhotosCyclistes=React.forwardRef((props,ref)=>

  {

    //console.log("Photo",ref)
    return <div ref={ref} style={{backgroundImage: `url(${props._url})`}} className={props.Pictures}>
        {props.name}
    </div>
})

export default PhotosCyclistes;

// Elodie : ancienne ecriture props avant test fich descriptive return <div className={props.Pictures} style={{backgroundImage: url(${props._url})}}>
// </div>