
import React from 'react';
import CourseCard from './CourseCard';

const IntervencionTacticasCourse = () => {
  return (
    <CourseCard title="INTERVENCION Y TACTICAS POLICIALES EN INMUEBLES Y ZONAS URBANIZADAS (Exteriores e Interiores)">
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/uploads/2cdb22d5-289c-40eb-9341-ee7fc08ed113.png"
            alt="Tácticas Policiales en Inmuebles y Zonas Urbanizadas"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-gray-700">
            <strong>Fecha:</strong> 5 Y 6 de Diciembre 2023
          </p>
          <p className="text-gray-700">
            <strong>Lugar:</strong> (Oviedo) – ESPAÑA, se informará a los inscritos.
          </p>
          <p className="text-gray-700">
            <strong>Horario:</strong><br/>
            Día 5: 10 a 14 h y 16 a final de programa (20,22 h)<br/>
            Dia 6: 10 a 14 y 16 a 20 h
          </p>
          <p className="text-gray-700">
            <strong>Precio:</strong><br/>
            Miembros de CISPEAR: 160 €<br/>
            Miembros IPA acreditados: 170 €<br/>
            Precio resto personas: 190 €
          </p>
          <p className="text-gray-700">
            <strong>Diploma/Certificado:</strong> Oficial y baremable en méritos, expedido por la Federación*
          </p>
          <p className="text-gray-700">
            <strong>N.º Plazas:</strong> 20, por riguroso orden de Inscripción.
          </p>
          <p className="text-gray-700">
            <strong>Información/inscripciones:</strong><br/>
            Tfno.: 657845573 y 625377602<br/>
            E-Mail: formacion@defensapolicial.es
          </p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/CURSO-PROGRESIONES-INMUEBLES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: CURSO PROGRESIONES INMUEBLES
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default IntervencionTacticasCourse;
