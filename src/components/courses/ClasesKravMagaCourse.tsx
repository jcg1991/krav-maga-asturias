
import React from 'react';
import CourseCard from './CourseCard';

const ClasesKravMagaCourse = () => {
  return (
    <CourseCard title="COMIENZO CLASES KRAV MAGA 2023-2024">
      <div className="space-y-4">
        <div className="mt-4 space-y-3">
          <p className="text-gray-700 font-bold text-lg">
            COMIENZO DE CLASES EL JUEVES DÍA 7 DE SEPTIEMBRE
          </p>
          <p className="text-gray-700">
            <strong>Turno mañanas:</strong> Lunes y Viernes de 11.30 a 12.45 h
          </p>
          <p className="text-gray-700">
            <strong>Turno tardes:</strong> Lunes y jueves de 20.30 a 21.50 h
          </p>
          <p className="text-gray-700">
            <strong>Precio:</strong> 40 eur / mes y 75 eur / año de la Licencia Federativa
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">Documentación y requisitos:</h3>
            <p className="text-gray-700 mb-2">El primer día de clase para poder entrenar se deberá aportar (nuevos alumnos):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>1 fotografía tamaño carnet con nombre y apellidos escrito atrás</li>
              <li>Pagar la cuota mensual</li>
              <li>Abonar las tasas de la Licencia Federativa</li>
              <li>Vestimenta: Durante el primer mes el alumno podrá entrenar con ropa deportiva y camiseta. Pasado este tiempo es obligatorio estar debidamente uniformado con la Uniformidad de Krav Maga oficial de la federación.</li>
              <li>Menores: Sus padres, representantes legales o tutores deberán firmar el consentimiento para poder realizar la actividad.</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mt-3">
            <strong>Solicitud de plaza:</strong> deberá enviar un e-mail a formacion@defensapolicial.es donde se indique nombre, apellidos y tfn de contacto y que se desea reservar plaza para asistir a las clases de Krav Maga.
          </p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/CLASES-REGULARES-KRAV-MAGA-2023-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: CLASES REGULARES KRAV MAGA 2023-2024
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default ClasesKravMagaCourse;
