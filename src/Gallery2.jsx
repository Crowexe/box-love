import React from 'react';
import './index.css';
import ImagenConTexto from './ImagenConTexto.jsx';


function Gallery2() {
 
  return (
    <div className="grid-container">
        <div className="grid-item"><ImagenConTexto src="/images/6.jpeg" alt="Imagen 6" texto="Hay algo diferente"/></div>
        <div className="grid-item"><ImagenConTexto src="/images/7.jpeg" alt="Imagen 7" texto="y tengo ganas de pasar "/></div>
        <div className="grid-item"><ImagenConTexto src="/images/8.jpeg" alt="Imagen 8" texto="toda mi vida tratando de saber ¿Qué es?"/></div>
        <div className="grid-item"><ImagenConTexto src="/images/9.jpeg" alt="Imagen 9" texto="O mejor todavía, fingir que no sé que es y así"/></div>
        <div className="grid-item"><ImagenConTexto src="/images/10.jpeg" alt="Imagen 10" texto="pasar toda mi vida contigo"/></div>
    </div>
  );
}

export default Gallery2;
