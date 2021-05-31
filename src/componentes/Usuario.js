import React from 'react';//importamos el modulo




const pais ="argentina";
const amigos =['maria', 'luis','jacinto','roberto']


//creamos un componente
const Usuario= ()=>{
    return(
      //tengo que encerrar dentro de divs
      <div>

  <p> que tengas buen dia!!</p>
  {pais &&<p> Tu eres de: {pais} </p>}
  <p>Tus amigos son los siguientes:</p>
  <ul>
    {amigos.map((amigo,index)=> <li key={index}>{amigo}</li>)}
  </ul>
  <p>que tengas un buen dia!!</p>
  </div>
  
    );
  
  };

  export default Usuario;