
import React from 'react';
import CourseCard from './CourseCard';

const StageNacionalKravMagaCourse = () => {
  return (
    <CourseCard title="STAGE NACIONAL KRAV MAGA">
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/uploads/7bb21c1f-e940-41fa-afd0-28879f6851a6.png"
            alt="Stage Nacional Krav Maga"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-gray-700">
            <strong>Fecha:</strong> 23,24,25,26,27 y 28 de Junio de 2023
          </p>
          <p className="text-gray-700">
            <strong>Lugar:</strong> (León) -ESPAÑA Se informará a los inscritos
          </p>
          <p className="text-gray-700">
            <strong>Horario:</strong> Régimen de internado
          </p>
          <p className="text-gray-700">
            <strong>Precio:</strong> 490 eur (inscripciones antes del 25 de Mayo) – 620 eur (inscripciones posteriores al 25 de Mayo)
          </p>
          <p className="text-gray-700">
            <strong>Diploma/certificado:</strong> Oficial y baremable en méritos, expedido por la Federación*
          </p>
          <p className="text-gray-700">
            <strong>N.º Plazas:</strong> 30, por riguroso orden de Inscripción.
          </p>
          <p className="text-gray-700">
            <strong>Información/inscripciones:</strong><br/>
            Tfno.: 625 377 602 – 655 478 8818<br/>
            E-Mail: formacion@defensapolicial.es<br/>
            Web: www.defensapolicial.es
          </p>
          <p className="text-gray-700 italic">
            *El curso será válido para obtener Titulaciones de Especialista en diferentes especialidades.
          </p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/STAGE-NACIONAL-KRAV-MAGA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: STAGE NACIONAL KRAV MAGA
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default StageNacionalKravMagaCourse;
