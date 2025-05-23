
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoTiradorActivoCourse = () => {
  return (
    <CourseCard 
      title="CURSO TIRADOR ACTIVO"
      id="curso-tirador-activo"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/d7a54087-297a-429c-8976-4a7ed7e42eb3.png" 
          alt="Curso Tirador Activo" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p><strong>Fecha:</strong> 2,3,4 Y 5 de Febrero de 2022</p>
          <p><strong>Lugar:</strong> Oviedo (España) – Varias localizaciones: los sitios exactos se comunicarán a los inscritos</p>
          <p><strong>Horario:</strong> Comienzo: Día 2 (10.00 h) – Fin curso: Día 5 (19.00/ 20 h)</p>
          <p><strong>Precio:</strong> 390 € (Inscripciones antes del día 10 de Enero)</p>
          <p>490 € (inscripciones posteriores al 10 de Enero)</p>
          <p><strong>Diploma/certificado:</strong> Oficial y BAREMABLE, expedido por la Federación. (Este curso es válido para obtener el Título Oficial y baremable de Especialista en RESPUESTA RÁPIDA ANTE INCIDENTES DE TIRADOR ACTIVO en todos sus niveles)</p>
          <p><strong>Información e inscripciones:</strong> Tfn. 655478818; E-Mail: formacion@defensapolicial.es; Web: http://www.defensapolicial.es</p>
          <p><strong>Requisitos:</strong> Curso restringido a miembros de las Fuerzas Y cuerpos de Seguridad del Estado, Policías Autonómicas, Ejército, Vigilancia Aduanera.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="http://bootcampspain.es/wp-content/uploads/CURSO-TIRADOR-ACTIVO.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: CURSO TIRADOR ACTIVO
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoTiradorActivoCourse;
