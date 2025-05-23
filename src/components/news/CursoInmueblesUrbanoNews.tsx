
import React from 'react';
import { Link } from 'react-router-dom';

const CursoInmueblesUrbanoNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS</h3>
      <div className="flex flex-col items-center mt-3 mb-3">
        <img 
          src="/uploads/476d59f1-7e4a-4735-8d61-3912f94e1469.png" 
          alt="Curso intervención en inmuebles" 
          className="rounded-lg max-w-full h-auto mb-2" 
        />
        <h4 className="text-center font-medium">CURSO APERTURA INTERVENCIONES EN INMUEBLES</h4>
        <p className="text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
      </div>
      <div className="mt-4 space-y-2">
        <p><strong>FECHA:</strong> 11, 12 DE ENERO DE 2025</p>
        <p><strong>DIPLOMA / CERTIFICADO:</strong> Oficial y Baremable</p>
        <p><strong>PLAZAS LIMITADAS:</strong></p>
        <p><strong>INFORMACIÓN / INSCRIPCIONES:</strong></p>
        <p>TFNO.: 655478818</p>
        <p>E-MAIL: formacion@defensapolicial.es</p>
        <p>www.defensapolicial.es</p>
        <p className="mt-4 font-bold">* VER MÁS EN*: 
          <Link 
            to="/curso-inmuebles-urbano" 
            className="text-blue-600 hover:underline" 
            onClick={handleScrollToTop}
          >
            CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CursoInmueblesUrbanoNews;
