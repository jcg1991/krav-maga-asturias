
import React from 'react';
import { Link } from 'react-router-dom';

const CursoContraterrorismoNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CURSO CONTRATERRORISMO ISRAELÍ</h3>
      <div className="flex flex-col items-center mt-3 mb-3">
        <img 
          src="/uploads/56ade04d-c044-4872-8067-343b4d156439.png" 
          alt="Curso Contraterrorismo Israelí" 
          className="rounded-lg max-w-full h-auto mb-3"
        />
      </div>
      <div className="mt-4 space-y-2">
        <p><strong>FECHA:</strong> 31 Octubre, 1, 2 y 3 de Noviembre de 2024</p>
        <p><strong>LUGAR:</strong> León (Se informará a los inscritos)</p>
        <p><strong>HORARIO:</strong> 10 H (Jueves 31) a 14 H (Domingo 3). Régimen de internado. (Incluye curso, instalaciones y pensión completa con alojamiento, certificado oficial y baremable en méritos).</p>
        <p><strong>Nº PLAZAS:</strong> 20 por riguroso orden de inscripción</p>
        <p className="mt-4 font-bold text-center">VER MÁS EN:</p>
        <p className="text-center">
          <Link 
            to="/cursos#curso-contraterrorismo" 
            className="text-blue-600 hover:underline font-bold"
            onClick={handleScrollToTop}
          >
            CURSO ANTITERRORISTA ISRAELÍ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CursoContraterrorismoNews;
