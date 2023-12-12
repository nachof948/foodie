import React,{useState} from 'react';

const Registrarse = ({ userGoogle }) => {
  const [logout, setLogout] = useState(false)
  
  const manejarLogout =()=>{
    setLogout(!logout)
  }

  const cerrarSesion = ()=>{
    window.open('https://restaurant-foodied.onrender.com/auth/logout','_self')
  }

  return (
    <>
      {!userGoogle && (
        <div className='registrarse'>
          <a href={"https://restaurant-foodied.onrender.com/auth/registrarse"}>Registrarse</a>
        </div>
      )}
      {userGoogle && (
        <div>
          <div className="registrarse" onClick={manejarLogout}>
            <img className='avatar' src={userGoogle.image} alt="" />
            <p>{userGoogle.username}</p>
          </div>
          {logout && 
            <div className='logout'>
              <div className="cerrar-sesion">
              <button onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
            <div className="cerrar-sesion-responsive">
              <button onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
            </div>
          }
        </div>
        
      )}
    </>
  );
};

export { Registrarse }