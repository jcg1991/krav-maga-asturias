
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoBastonPolicialCourse = () => {
  return (
    <CourseCard 
      title="CURSO – HABILITACIÓN FEDERATIVA: BASTÓN POLICIAL EXTENSIBLE"
      id="curso-baston-policial"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/4ed7c852-0216-4f41-a82f-6235addfbe7f.png" 
          alt="Curso Bastón Policial Extensible" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p><strong>Fecha:</strong> 21 de Enero de 2023 (09.00 a 15.00 h)</p>
          <p><strong>Lugar:</strong> Oviedo. Se informará a los inscritos.</p>
          <p><strong>Precio:</strong> 80 euros el curso (Incluye documento acreditativo nominal de Habilitación Federativa)</p>
          <p><strong>N.º Plazas:</strong> 20 por riguroso orden de inscripción hasta completar plazas.</p>
          <p><strong>Información e inscripciones:</strong> Tfn. 655478818; E-Mail: formacion@defensapolicial.es; Web: http://www.defensapolicial.es</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="http://bootcampspain.es/wp-content/uploads/CURSO-HABILITACION-FEDERATIVA-BPE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: CURSO HABILITACION FEDERATIVA BPE
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoBastonPolicialCourse;
