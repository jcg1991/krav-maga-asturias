
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const CursoInmuebles = () => {
  return (
    <CourseCard 
      id="curso-inmuebles" 
      title="CURSO APERTURA INTERVENCIONES EN INMUEBLES"
      linkPath="/curso-inmuebles"
      linkText="VER MÁS INFORMACIÓN"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex flex-col items-center">
          <img 
            src="/uploads/ef926983-66af-40b5-b7d0-8b97b273ff3a.png" 
            alt="Operativo Unidad Especial en Aperturas" 
            className="rounded-lg w-full h-auto shadow-md" 
          />
          <p className="mt-3 text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
        </div>
        
        <div className="md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">FECHA:</p>
              <p className="text-primary font-semibold">24, 25 Y 26 DE JUNIO DE 2025</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
              <p>Oficial y Baremable</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">PLAZAS:</p>
              <p>15</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold text-lg">INFORMACIÓN / INSCRIPCIONES:</p>
              <p>TFNO.: 655478818</p>
              <p>E-MAIL: formacion@defensapolicial.es</p>
              <p>www.defensapolicial.es</p>
            </div>
          </div>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoInmuebles;
