
import React from 'react';
import { Link } from 'react-router-dom';

const CursoAperturasNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CURSO APERTURA INTERVENCIONES EN INMUEBLES</h3>
      <div className="flex flex-col items-center mt-4 mb-5">
        <img 
          src="/uploads/ef926983-66af-40b5-b7d0-8b97b273ff3a.png" 
          alt="Operativo Unidad Especial en Aperturas" 
          className="rounded-lg w-full max-w-4xl h-auto mb-4 shadow-md" 
        />
        <p className="text-center font-medium mt-1 text-sm sm:text-base">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
      </div>
      <div className="mt-4 space-y-2 text-sm sm:text-base px-2">
        <p><strong>FECHA:</strong> 24, 25 Y 26 DE JUNIO DE 2025</p>
        <p><strong>DIPLOMA / CERTIFICADO:</strong> Oficial y Baremable</p>
        <p><strong>PLAZAS:</strong> 15</p>
        <p><strong>INFORMACIÓN / INSCRIPCIONES:</strong></p>
        <p>TFNO.: 655478818</p>
        <p>E-MAIL: formacion@defensapolicial.es</p>
        <p>www.defensapolicial.es</p>
        <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSO APERTURAS INMUEBLES</Link></p>
      </div>
    </div>
  );
};

export default CursoAperturasNews;
