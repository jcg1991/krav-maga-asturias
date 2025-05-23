
import React from 'react';
import CourseCard from './CourseCard';

const CursoContraterrorismo = () => {
  return (
    <CourseCard 
      title="CURSO CONTRATERRORISMO ISRAELÍ" 
      id="curso-contraterrorismo"
    >
      <div className="space-y-6">
        {/* Course Image */}
        <div className="flex justify-center mb-6">
          <img 
            src="/uploads/56ade04d-c044-4872-8067-343b4d156439.png" 
            alt="Curso Contraterrorismo Israelí" 
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        
        {/* Course Details */}
        <div className="space-y-2">
          <p><strong>FECHA:</strong> 31 Octubre, 1, 2 y 3 de Noviembre de 2024</p>
          <p><strong>LUGAR:</strong> León (Se informará a los inscritos)</p>
          <p><strong>HORARIO:</strong> 10 H (Jueves 31) a 14 H (Domingo 3). Régimen de internado. (Incluye curso, instalaciones y pensión completa con alojamiento, certificado oficial y baremable en méritos).</p>
          <p><strong>Nº PLAZAS:</strong> 20 por riguroso orden de inscripción</p>
        </div>
        
        {/* PDF Link */}
        <div className="text-center mt-4">
          <p className="font-bold text-lg">VER MÁS EN:</p>
          <a 
            href="/curso-contraterrorismo"
            className="text-blue-600 hover:underline font-bold text-lg"
          >
            CURSO ANTITERRORISTA ISRAELÍ
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoContraterrorismo;
