import React from 'react';
import './index.css';
import ImagenConTexto from './ImagenConTexto.jsx';

import Player from '@madzadev/audio-player';

function Gallery() {
 
  return (
    <>
      <div className="grid-container">
          <div className="grid-item"><ImagenConTexto src="/images/1.jpeg" alt="Imagen 1" texto="Tal vez yo no sepa dónde ir"/></div>
          <div className="grid-item"><ImagenConTexto src="/images/2.jpeg" alt="Imagen 2" texto="pero si pudiera" /></div>
          <div className="grid-item"><ImagenConTexto src="/images/3.jpeg" alt="Imagen 3" texto="una mañana abir los ojos" /></div>
          <div className="grid-item"><ImagenConTexto src="/images/4.jpeg" alt="Imagen 4" texto="y ver los tuyos" /></div>
          <div className="grid-item"><ImagenConTexto src="/images/5.jpeg" alt="Imagen 5" texto="sabría donde quedarme" /></div>
      </div>
    
    </>
  );
}

export default Gallery;
