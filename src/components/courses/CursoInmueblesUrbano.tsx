
import React from 'react';
import CourseCard from './CourseCard';

const CursoInmueblesUrbano = () => {
  return (
    <CourseCard 
      id="curso-inmuebles-urbano" 
      title="CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS"
      linkPath="/curso-inmuebles-urbano"
      linkText="VER MÁS INFORMACIÓN"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex flex-col items-center">
          <img 
            src="/uploads/476d59f1-7e4a-4735-8d61-3912f94e1469.png" 
            alt="Curso intervención en inmuebles" 
            className="rounded-lg w-full h-auto shadow-md" 
          />
        </div>
        
        <div className="md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">FECHA:</p>
              <p className="text-primary font-semibold">11, 12 DE ENERO DE 2025</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
              <p>Oficial y Baremable</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">PLAZAS:</p>
              <p>Limitadas</p>
            </div>
          </div>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoInmueblesUrbano;
