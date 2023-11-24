import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Shop } from '../../indice';


const Carnes = () => {
  const [Carnes, setCarnes] = useState([])
  useEffect(()=>{
    axios.get('/comidas/carnes')
    .then((response)=>{
      setCarnes(response.data.comidas);
    })
    .catch((error)=>{console.log(error)})
  },[])
  return(
    <div>
      <Shop />
      {Carnes.map(comida => {
        const { _id, nombre, descripcion, precio, imgUrl } = comida;
        return (
          <div key={_id}>
            <img src={imgUrl} alt="" width={"200px"} />
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <h4>${precio}</h4>
          </div>
        );
      })}
    </div>
  )
}

export { Carnes }