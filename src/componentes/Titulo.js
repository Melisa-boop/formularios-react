import React from 'react'


const Titulo = ({usuario,color}) => {
   
    return (<h1 className="h1" style={{color:color}}>HOLA {usuario}!!</h1>);
}

 
export {Titulo};