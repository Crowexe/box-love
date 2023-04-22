import React, { useState } from 'react';

function ImagenConTexto({ src, alt, texto }) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleMouseEnter = () => {
    setMostrarTexto(true);
  };

  const handleMouseLeave = () => {
    setMostrarTexto(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src={src} alt={alt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {mostrarTexto && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '14px' }}>
          {texto}
        </div>
      )}
    </div>
  );
}

export default ImagenConTexto;