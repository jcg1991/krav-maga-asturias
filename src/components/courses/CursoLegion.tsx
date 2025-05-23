
import React from 'react';
import CourseCard from './CourseCard';

const CursoLegion = () => {
  return (
    <CourseCard 
      id="curso-legion" 
      title="CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA"
      linkPath="/curso-legion"
      linkText="VER MÁS EN: MONITOR NACIONAL GRAPPLING POLICIAL"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex flex-col items-center">
          <img 
            src="/uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png" 
            alt="Grappling Policial" 
            className="rounded-lg w-full h-auto shadow-md mb-4" 
          />
          <div className="aspect-w-16 aspect-h-9 w-full">
            <video 
              controls
              className="rounded-lg w-full shadow-md"
              poster="/uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png"
            >
              <source src="http://defensapolicial.es/wp-content/uploads/CURSO-LEGION-ESPANOLA.mp4?_=1" type="video/mp4" />
              Su navegador no soporta el tag de video.
            </video>
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-4">
          <p className="text-lg">
            Curso INTERVENCION POLICIAL Y COMBATE CUERPO A CUERPO, impartido por nuestro Departamento en el mes de Agosto a efectivos de la LEGION ESPAÑOLA, en el IV TERCIO con sede en RONDA (MALAGA).
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-bold text-lg">Convocatoria para el Curso de Monitor Nacional de Grappling Policial.</p>
          </div>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoLegion;
