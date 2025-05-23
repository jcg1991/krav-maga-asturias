
import React from 'react';
import CourseCard from './CourseCard';

const CursoBastonGala = () => {
  return (
    <CourseCard 
      title="CURSO BASTÓN POLICIAL Y CENA GALA 2024" 
      id="curso-baston-gala"
    >
      <p className="mb-4">Información de estos 2 eventos. La gente que acuda al curso por precio del mismo le incluye la cena de Gala.</p>
      
      <div className="space-y-6">
        {/* First Image - Gala Dinner */}
        <div className="flex justify-center mb-6">
          <img 
            src="/uploads/75b4984a-a52f-4e45-a743-339ec427bd6f.png" 
            alt="Cena de Gala Defensa Personal Policial Krav Maga" 
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        
        {/* Second Image - Baston Policial - Modified to match first image width */}
        <div className="flex justify-center mb-6">
          <img 
            src="/uploads/0908978a-560e-4b67-b07b-220dd9873c34.png" 
            alt="Bastones Policiales" 
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
        
        {/* PDF Link */}
        <div className="text-center mt-4">
          <p className="font-bold text-lg">VER MÁS EN:</p>
          <a 
            href="http://bootcampspain.es/wp-content/uploads/CURSO-BASTON-Y-GALA-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-bold text-lg"
          >
            CURSO BASTÓN Y GALA 2024
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoBastonGala;
