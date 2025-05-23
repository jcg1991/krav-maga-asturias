
import React from 'react';
import CourseCard from './CourseCard';

const LegionExtranjeraFrancesaCourse = () => {
  return (
    <CourseCard title="CURSO DE COMBATE, INTERVENCIÓN TÁCTICAS POLICIALES ESPECIALES LEGIÓN EXTRANJERA FRANCESA">
      <div className="space-y-4">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <video 
            controls 
            className="w-full h-full object-cover"
            src="http://bootcampspain.es/wp-content/uploads/CURSO-ESPECIAL-EN-LA-LEGION-EXTRANJERA-FRANCESA.mp4?_=1"
          >
            Tu navegador no soporta el elemento de vídeo.
          </video>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            Curso especial de tácticas policiales avanzadas impartido en colaboración con la Legión Extranjera Francesa. 
            Este programa de entrenamiento está diseñado para profesionales de seguridad que buscan mejorar sus 
            habilidades en intervenciones tácticas especiales y situaciones de combate.
          </p>
        </div>
      </div>
    </CourseCard>
  );
};

export default LegionExtranjeraFrancesaCourse;
