import React,{useState} from 'react';//importamos el modulo
import ReactDOM from 'react-dom';//importamos react dom
import Usuario from './componentes/Usuario'
import {Titulo} from './componentes/Titulo'
import FormularioInicioSesion from './componentes/FormularioInicioSesion'



const App=()=>{
  const [sesion,cambiarEstadoSesion]= useState(true);//sesion es el estado y cambiar Estado es la funcion para cambiar el estado
 
  return(
     //fragmentos
  <>
  {sesion === true?
  
  <div>
   <Titulo usuario="melisa" color ="pink"/>
  <Usuario/>
  <button onClick={()=>cambiarEstadoSesion(false)}>Cerrar sesion</button>
  </div>
  
   ://condicionales
   <div>
  <p> NO HAS INICIADO SESION</p>
  <FormularioInicioSesion/>
  </div>
  }  
  </>
  );
};

//const verificarSesion =(sesion)=>{
  //if(sesion===true){
  //  return JSX;
  //}else{
  //  return <h1>no iniciaste la sesion</h1>

   // }
 // }

//}


ReactDOM.render(<App/>,document.getElementById('root'));



