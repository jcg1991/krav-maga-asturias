
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoSwatTacticasCourse = () => {
  return (
    <CourseCard 
      title="CURSO SWAT – TACTICAS POLICIALES ESPECIALES"
      id="curso-swat-tacticas"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/3ccb4afb-0143-451b-b7af-35b3d0d0864f.png" 
          alt="Curso SWAT - Tácticas Policiales Especiales" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p><strong>Fecha:</strong> 23, 24 y 25 de Noviembre de 2022</p>
          <p><strong>Lugar:</strong> León (España) – (El sitio exacto se informará a los inscritos).</p>
          <p><strong>Horario:</strong> Comienzo: Miércoles 23 (10.00 h)</p>
          <p>Fin curso: Viernes 25 (13.30 h)</p>
          
          <p>El curso será de carácter intensivo para aprovechar el tiempo durante todo el día. Los alumnos quedarán en régimen interno de manera que habrá entrenamiento nocturno.</p>
          
          <p><strong>Precio:</strong> 390 eur</p>
          <p><strong>Incluye:</strong> Pensión completa con pernocta los 3 días del curso. Material específico de entrenamiento: Escudos balísticos, arietes de apertura…</p>
          <p>Incluye entrada y CENA a la Gala anual del Departamento que se celebrará la tarde-noche del 26 de Noviembre en Oviedo donde se entregarán premios, títulos deportivos, condecoraciones, menciones y distinciones del Departamento.</p>
          
          <p><strong>Diploma/certificado:</strong> Oficial y BAREMABLE, expedido por la Federación. (Este curso es válido para obtener el Título Oficial y baremable de Especialista en CQB en todos sus niveles).</p>
          
          <p><strong>Información e inscripciones:</strong> Tfn. 655478818; E-Mail: formacion@defensapolicial.es; Web: http://www.defensapolicial.es</p>
          
          <p><strong>Requisitos:</strong> Ser miembros FF.Y CC. Seguridad o Ejército.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="http://bootcampspain.es/wp-content/uploads/CURSO-SWAT-TACTICAS-POLICIALES-ESP.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: CURSO SWAT-TACTICAS POLICIALES ESP
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoSwatTacticasCourse;
