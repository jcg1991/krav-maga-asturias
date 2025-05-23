
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CruzAniversarioCourse = () => {
  return (
    <CourseCard 
      title="CRUZ DEL 90 º ANIVERSARIO DE LA FEDERACIÓN MADRILEÑA DE LUCHA"
      id="cruz-aniversario"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/af5157c8-5cf3-436b-9ee8-852e01139efc.png" 
          alt="Cruz del 90º Aniversario" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p>Iván Rodríguez, Director Técnico de las Disciplinas de Defensa Personal Policial y de KRAV MAGA en Asturias, ha sido galardonado en la gala anual de la Federación Madrileña de Lucha con la CRUZ DEL 90 º ANIVERSARIO de dicha institución.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="http://bootcampspain.es/wp-content/uploads/CRUZ-90-ANIVERSARIO.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: CRUZ 90 ANIVERSARIO
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CruzAniversarioCourse;
