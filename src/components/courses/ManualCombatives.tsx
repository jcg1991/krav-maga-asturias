
import React from 'react';
import CourseCard from './CourseCard';

const ManualCombatives = () => {
  return (
    <CourseCard 
      title='REPERCUSIÓN INTERNACIONAL DEL MANUAL AMERICANO "COMBATIVES" PARA EQUIPOS SWAT'
      id="manual-combatives"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="mb-4">
            Los instructores IVÁN RODRÍGUEZ y LUIS DANIEL RODRÍGUEZ del Departamento de Defensa Personal Policial 
            y el de KRAV MAGA de la Federación de Lucha, en el prestigioso MANUAL COMBATIVES para operadores tácticos, 
            MANUAL DE REFERENCIA EN USA PARA EQUIPOS SWAT Y de OP. ESPECIALES.
          </p>
          <p className="mb-4">
            Disponible en Amazon.
          </p>
          <p className="mb-4">
            <a 
              href="https://amzn.eu/d/6MyHLGE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-bold"
            >
              Combatives For Tactical Operators
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/uploads/3f11a124-7f9e-436a-b7a6-dde9bf3e4f05.png" 
            alt="Portada del Manual Combatives" 
            className="rounded-lg max-w-full h-auto shadow-md"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/uploads/1b20e013-e79c-4c91-8630-f9d8d57d728f.png" 
            alt="Página del manual con biografías de Iván Rodríguez y Luis Daniel Rodríguez" 
            className="rounded-lg max-w-full h-auto shadow-md" 
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/uploads/21304752-223a-4234-8eb8-f657f5eabef6.png" 
            alt="Técnicas de intervención vehicular" 
            className="rounded-lg max-w-full h-auto shadow-md"
          />
        </div>
      </div>
    </CourseCard>
  );
};

export default ManualCombatives;
