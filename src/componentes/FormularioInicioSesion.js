import React, {useState} from 'react';

const FormularioInicioSesion = () => {

    const[usuario,cambiarUsuario]= useState('');
    const[password, cambiarPassword]=useState('');
    const [email,cambiarEmail]=useState('');

    //OPCION 1
    //const onChangeUsuario=(evento)=>{
        //cambiarUsuario(evento.target.value);
    //}
    //OPCION2
    const onChange =(evento)=>{
        if(evento.target.name ==='usuario'){//pregunto si el imput tiene un nombre?
            cambiarUsuario(evento.target.value)
        }else if(evento.target.name==="password"){
                cambiarPassword(evento.target.value)     
        }else if(evento.target.name ==="email"){
            cambiarEmail(evento.target.value)
        } 
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        alert("los datos se enviaron!")
    }

    return ( 
        <form action="" onSubmit ={onSubmit}>
            
            <p>Usuario:{usuario}</p>
            <p>Contrasena:{password}</p>
            <p>email: {email}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input type= 'text' name='usuario' id='usuario' value={usuario} onChange={onChange}></input>
            </div>
            <div>
                <label htmlFor="contrasena">contrasena</label>
                <input type= 'password' name='password' id='password' value={password} onChange={onChange}></input>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type= 'email' name='email' id='email' value={email} onChange={onChange}></input>
            </div>
                <button type ="submit">Inicio de sesion</button>
        
            
        
        </form>
     );
}
 
export default FormularioInicioSesion;