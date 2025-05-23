
import React from 'react';
import CourseCard from './CourseCard';

const SemanaTacticaCourse = () => {
  return (
    <CourseCard title="LA SEMANA TÁCTICA">
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/uploads/225cb5cb-3ba6-4d84-9a4c-cf6095ba4069.png"
            alt="La Semana Táctica - Entrenamiento policial"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="mt-4 space-y-3">
          <p className="text-gray-700">
            <strong>Fecha:</strong> 23, 24, 25, 26, 27 y 28 de Junio de 2023
          </p>
          <p className="text-gray-700">
            <strong>Lugar:</strong> (León) – ESPAÑA, se informará a los inscritos.
          </p>
          <p className="text-gray-700">
            <strong>Horario:</strong> Régimen de internado
          </p>
          <p className="text-gray-700">
            <strong>Precio:</strong><br/>
            590 € (inscripciones antes del 25 de Mayo)<br/>
            720 € (inscripciones posteriores al 25 de Mayo)
          </p>
          <p className="text-gray-700">
            <strong>Diploma/Certificado:</strong> Oficial y baremable en méritos, expedido por la Federación*
          </p>
          <p className="text-gray-700">
            <strong>N.º Plazas:</strong> 20, por riguroso orden de Inscripción.
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
        
        <div className="aspect-video w-full rounded-lg overflow-hidden mt-4">
          <video 
            controls 
            className="w-full h-full object-cover"
            src="http://bootcampspain.es/wp-content/uploads/Semana-Tactica.mp4?_=3"
          >
            Tu navegador no soporta el elemento de vídeo.
          </video>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/LA-SEMANA-TACTICA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: LA SEMANA TÁCTICA
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default SemanaTacticaCourse;
