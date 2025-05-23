
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const GalaAnualCourse = () => {
  return (
    <CourseCard 
      title="GALA ANUAL – DEPARTAMENTO DE DEFENSA PERSONAL POLICIAL Y KRAV MAGA"
      id="gala-anual"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p>El Sábado 26 de Noviembre se celebró en Oviedo, la gala anual del Departamento de Defensa Personal Policial y de Krav Maga de la Federación Asturiana de Lucha, con un éxito de asistencia y de organización que quedó patente por las personalidades, deportistas y profesionales de la seguridad y ejército que asistieron.</p>
          
          <p>En ella se entregaron diferentes titulaciones obtenidas por deportistas de varias disciplinas, reconocimientos a personas que colaboran con estos departamentos y la federación, las cruces al mérito deportivo en sus diferentes categorías, oro, plata y bronce.</p>
          
          <p>Reportaje fotográfico completo.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="http://bootcampspain.es/wp-content/uploads/GALARDONES-GALA-POLICIAL-KRAV-MAGA.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: GALARDONES GALA POLICIAL-KRAV MAGA
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default GalaAnualCourse;
