
import React from 'react';
import { Link } from 'react-router-dom';

const InternationalRecognitionSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">REPERCUSIÓN INTERNACIONAL DEL MANUAL AMERICANO "COMBATIVES" PARA EQUIPOS SWAT</h2>
      
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
              className="text-blue-600 hover:underline"
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
      
      <div className="mt-6 text-center">
        <Link
          to="/cursos#manual-combatives"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Más Información
        </Link>
      </div>
    </div>
  );
};

export default InternationalRecognitionSection;
