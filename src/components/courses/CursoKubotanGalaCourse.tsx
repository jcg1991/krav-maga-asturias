
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoKubotanGalaCourse = () => {
  return (
    <CourseCard 
      title="CURSO KUBOTAN Y CENA DE GALA DEL DEPARTAMENTO DE DEFENSA POLICIAL"
      id="curso-kubotan-gala"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/19f7cede-b99e-4bbc-8da6-09cd39afa9cf.png" 
          alt="Curso Kubotan y Cena de Gala" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p>Adjuntamos la información acerca del curso anual de KUBOTAN ( Que incluye la Cena de Gala del Departamento de Defensa Policial y de Krav Maga ).</p>
          <p>Para el curso las plazas son limitadas, por lo que recomendamos reserve su plaza de inmediato.</p>
          <p>Información e inscripciones: Tfno. 655478818; E-Mail: formacion@defensapolicial.es; Web: http://www.defensapolicial.es</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="https://defensapolicial.es/wp-content/uploads/Curso-Kubotan-Gala-2022.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: Curso Kubotan-Gala 2022
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoKubotanGalaCourse;
