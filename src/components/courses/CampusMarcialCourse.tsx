
import React from 'react';
import CourseCard from './CourseCard';

const CampusMarcialCourse = () => {
  return (
    <CourseCard title="XV Campus de Artes Marciales y Deportes de Contacto «Ciudad de Oviedo»">
      <div className="space-y-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/uploads/f2df6b52-6797-45e3-847f-2b2ab956e284.png"
            alt="Artes Marciales y Deportes de Contacto"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-gray-700">
            <strong>Fecha:</strong> 1,2 y 3 de Marzo de 2024
          </p>
          <p className="text-gray-700">
            <strong>Horario:</strong> Viernes de 09.30 h en adelante, hasta Domingo a las 14h
          </p>
          <p className="text-gray-700">
            <strong>Plazas:</strong> 20 (por riguroso orden de inscripción)
          </p>
          <p className="text-gray-700">
            <strong>Lugar:</strong> Oviedo (Se comunicará a los inscritos)
          </p>
          <p className="text-gray-700">
            <strong>Precio:</strong> 150 euros (Para inscribirse ha de hacerse el importe del ingreso del curso en la cuenta a nombre de OVIEPOL: ES 94 2100 7995 15 0200031149 de LA CAIXA indicando nombre y apellidos y a continuación la palabra CAMPUS. Luego se ha de enviar un mail de confirmación a formación@defensapolicial.es indicando Nombre y apellidos y que ha realizado el ingreso. La no asistencia al curso implicará la pérdida de la reserva.
          </p>
          <p className="text-gray-700">
            <strong>Información e Inscripciones:</strong> Tf: 650063640 y 655478818, formacion@defensapolicial.es
          </p>
          <p className="text-gray-700">
            <strong>Titulación:</strong> Diploma Expedido con todas las especialidades. Este curso es computable como créditos para la obtención de las TITULACIONES OFICIALES de Especialista en Combate Cuerpo a Cuerpo, Defensa Personal Policial, Sambo-Defensa Personal y Defensa Personal Femenina (En sus 3 Niveles: BASICO, SUPERIOR Y TECNICO)., así como para pase de grado de cinturones y danés.
          </p>
          <p className="text-gray-700">
            <strong>Requisitos:</strong> Todos los participantes deben aportar fotocopia del DNI y Fotocopia de Seguro médico (Tarjeta seguridad social, Adeslas, Caser…)
          </p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/CAMPUS-MARCIAL-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: CAMPUS MARCIAL 2024
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default CampusMarcialCourse;
