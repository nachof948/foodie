import React from 'react';
import { ImagenHeroUno, TextosHeroUno } from '../../../indice';

const Hero = () => {
  return(
    <section className='hero'>
      <div className="contenedor-hero">
        <TextosHeroUno />
        <ImagenHeroUno />
      </div>
    </section>
  )
}

export { Hero }