
import React from 'react';
import CourseCard from './CourseCard';

const KravMagaBootCampCourse = () => {
  return (
    <CourseCard title="KRAV MAGA BOOT CAMP 2023">
      <div className="space-y-4">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <video 
            controls 
            className="w-full h-full object-cover"
            src="http://bootcampspain.es/wp-content/uploads/KRAV-MAGA-BOOT-CAMP-2023-INSCRIBETE.mp4?_=2"
          >
            Tu navegador no soporta el elemento de vídeo.
          </video>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-lg font-semibold">
            Inscríbete ya, antes de que sea demasiado tarde, en el: KRAV MAGA BOOT CAMP 2023
          </p>
          <p className="text-gray-700 mt-2 font-medium">
            Más de la mitad de las plazas ya cubiertas.
          </p>
        </div>
      </div>
    </CourseCard>
  );
};

export default KravMagaBootCampCourse;
