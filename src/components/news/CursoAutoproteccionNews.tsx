
import React from 'react';
import { Link } from 'react-router-dom';

const CursoAutoproteccionNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium">CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR</h3>
      <div className="flex flex-col items-center mt-3 mb-3">
        <div className="grid grid-cols-2 gap-2">
          <img 
            src="/uploads/c383a2e7-3fd4-48cb-8b56-343da38ae2b1.png" 
            alt="Autoprotección del hogar" 
            className="rounded-lg max-w-full h-auto" 
          />
          <img 
            alt="Defensa personal en el hogar" 
            className="rounded-lg max-w-full h-auto" 
            src="/uploads/e77473a6-1550-4e5f-934b-11f21beab648.jpg" 
          />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p><strong>FECHA:</strong> 24 Y 25 DE MAYO DE 2025</p>
        <p><strong>HORARIO:</strong> Sábado: 10 a 14h y 14 a 20h / Domingo: 9.30 a 15h</p>
        <p><strong>PLAZAS:</strong> 15</p>
        <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/curso-autoproteccion" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSO AUTOPROTECCION CIVILES</Link></p>
      </div>
    </div>
  );
};

export default CursoAutoproteccionNews;
