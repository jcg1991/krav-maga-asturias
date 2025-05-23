
import React from 'react';
import CourseCard from './CourseCard';

const CursoAutoproteccion = () => {
  return (
    <CourseCard 
      id="curso-autoproteccion" 
      title="CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR"
      linkPath="/curso-autoproteccion"
      linkText="VER MÁS INFORMACIÓN"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex flex-col items-center space-y-4">
          <img 
            src="/uploads/c383a2e7-3fd4-48cb-8b56-343da38ae2b1.png" 
            alt="Autoprotección del hogar" 
            className="rounded-lg w-full h-auto shadow-md" 
          />
          <img 
            src="/uploads/fafb3b38-5f38-41da-acc1-df3250599a61.png" 
            alt="Defensa personal en el hogar" 
            className="rounded-lg w-full h-auto shadow-md mb-2" 
          />
        </div>
        
        <div className="md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">FECHA:</p>
              <p className="text-primary font-semibold">24 Y 25 DE MAYO DE 2025</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">HORARIO:</p>
              <p>Sábado: 10 a 14h y 14 a 20h</p>
              <p>Domingo: 9.30 a 15h</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">DESTINATARIOS:</p>
              <p>Civiles con pretensiones implementar tácticas de defensa y protección para su hogar y familia.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
              <p>Oficial y Baremable</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">Nº PLAZAS:</p>
              <p>15</p>
            </div>
          </div>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoAutoproteccion;
