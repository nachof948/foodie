import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css'

const RecetasEspecial = () => {
	const [menuEspecial, setMenuEspecial] = useState([])
  useEffect(()=>{AOS.init()},[])
	useEffect(()=>{
		axios.get('/home')
		.then((response=>{
      setMenuEspecial(response.data.comidas)
		}))
	},[])
  return(
    <>
			{menuEspecial.slice(4,7).map(receta =>{
				const {imgUrl, nombre, precio, estrellas, _id} = receta
        return(
          <div className='especial tarjeta-producto' key={_id}  data-aos="zoom-in" data-aos-duration="750">
            <img className='comida' src={imgUrl} alt={nombre} loading="lazy"/>
            <h2>{nombre}</h2>
              <div className="estrellas">
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <img src="Imagenes/icons8-estrella.png" alt="Estrellas"/>
                  <p className="num">({estrellas})</p>
              </div>
              <div className="precio">
                <p>${precio}</p>
              </div>
              <button className='comprar-ahora bolsa'><img src="/Imagenes/icons8-bolsa-de-compras-45.png" alt="Bolsa" /></button>
          </div>
        )
			})}
    </>
  )
}

export { RecetasEspecial }