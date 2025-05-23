
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoKravMagaPolicialPistolaOfensivaCourse = () => {
  return (
    <CourseCard 
      title="CURSO KRAV MAGA POLICIAL PISTOLA OFENSIVA"
      id="curso-krav-maga-policial-pistola-ofensiva"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/fba70599-2026-42c2-a282-d6e8ced4403c.png" 
          alt="Curso Krav Maga Policial Pistola Ofensiva" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p><strong>FECHA:</strong> 22 y 23 de Enero de 2022</p>
          <p><strong>LUGAR:</strong> Oviedo (España). Se informará a los inscritos</p>
          
          <p><strong>HORARIO:</strong> Día 22: 10 a 14 h y de 16 a 19 h // Día 23: 10 a 14 h</p>
          
          <p><strong>PRECIO:</strong> 120 euros.</p>
          
          <p><strong>DIPLOMA/CERTIFICADO:</strong> Oficial y baremable en méritos.</p>
          
          <p><strong>MATERIAL RECOMENDABLE:</strong> Casco de entrenamiento, protecciones de rodillas y codos, 
          guantes de Boxeo, pistola simulada, gafas protectoras, uniforme y cinturón de servicio (grilletes y funda, 
          funda del arma, guantes de intervención, coquilla, Peto de entrenamiento de artes
          marciales, guantillas de MMA.</p>
          
          <p><strong>Nº Plazas:</strong> 15 por riguroso orden de inscripción.</p>
          
          <p><strong>INFORMACIÓN E INSCRIPCION:</strong> Telf: 655478818, 717109800 / e-mail: formacion@defensapolicial.es</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="https://defensapolicial.es/wp-content/uploads/KRAV-MAGA-POLICIAL.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: KRAV MAGA POLICIAL
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoKravMagaPolicialPistolaOfensivaCourse;
