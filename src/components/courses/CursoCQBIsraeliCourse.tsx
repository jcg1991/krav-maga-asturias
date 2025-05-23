
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoCQBIsraeliCourse = () => {
  return (
    <CourseCard 
      title="CURSO CQB SISTEMA ISRAELÍ"
      id="curso-cqb-israeli"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/cce9878d-aeb1-4ad3-90ef-61f422277287.png" 
          alt="Curso CQB Sistema Israelí - Grupo" 
          className="w-full h-auto rounded-md shadow-sm mb-4" 
        />
        
        <div className="space-y-2">
          <p>Del 3 al 8 de Junio, se celebró el curso de CQB basado en el sistema de trabajo de las Fuerzas Especiales de Israel y dirigido a miembros en activo de las Fuerzas y Cuerpos de Seguridad del Estado y Ejército. Para ello acudió A.L. miembro en activo de las Fuerzas Especiales de Israel trasladado a España al efecto.</p>
          
          <p>Miembros del CNP pertenecientes a UIP, UPR, CAE, CENTRO DE FORMACIÓN DE LA ESCUELA NACIONAL DE POLICÍA DE ÁVILA, GUARDIA CIVIL, EJÉRCITO y ERTZAINA se adiestraron en materias de:</p>
          <ul className="list-disc pl-5">
            <li>Despliegues rápidos antiterroristas</li>
            <li>Trabajo en Estructuras (Inmuebles)</li>
            <li>Emboscadas a vehículos</li>
            <li>Incidentes críticos ante Tirador Activo</li>
          </ul>
          
          <p>Y otras materias como la instrucción táctica individual con arma corta y arma larga, primero de manera individual y posteriormente en conjunto para integrarse en equipos de trabajo de varios miembros: primero binomios y luego equipos de 4 y 6 operadores.</p>
          <p>Varias fueron las localizaciones de trabajo: desde colegios, a poblados para entrenamiento en inmuebles, pistas para trabajo con vehículos…donde se desarrolló trabajo urbano e interurbano tanto de día como de noche. Se buscaron escenarios realistas con mobiliario en pleno funcionamiento para buscar una perspectiva integral del trabajo.</p>
        </div>
        
        <img 
          src="/uploads/e7913885-c352-42ef-b76c-a8c1975311be.png" 
          alt="Curso CQB Sistema Israelí - Entrenamiento" 
          className="w-full h-auto rounded-md shadow-sm my-4" 
        />
        
        <div className="space-y-2">
          <p>Los 3 primeros días desarrollaron el nivel básico, y los 3 siguientes quedaron reservados para técnicas avanzadas en la que ahondaron únicamente los instructores del Departamento:</p>
          <ul className="list-disc pl-5">
            <li>Despliegues urbanos e interurbanos</li>
            <li>Intervenciones críticas con vehículos</li>
            <li>Uso del Escudo Balístico</li>
            <li>Intervenciones críticas en inmuebles</li>
          </ul>
          <p>El curso ocupó todas las horas del día desde bien temprano y jornadas nocturnas hasta las 3 de la mañana con trabajo táctico y físico.</p>
          <p>Ya se está trabajando en la próxima edición. En caso de estar interesado en participar puede escribir a formacion@defensapolicial.es manifestando su intención de participar.</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="https://defensapolicial.es/wp-content/uploads/RESENA-CURSO-CQB-SISTEMA-ISRAELI.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: RESEÑA CURSO CQB SISTEMA ISRAELÍ
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoCQBIsraeliCourse;
