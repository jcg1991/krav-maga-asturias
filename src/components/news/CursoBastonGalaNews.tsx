
import React from 'react';

const CursoBastonGalaNews = () => {
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CURSO BASTÓN POLICIAL Y CENA GALA 2024</h3>
      <div className="flex flex-col items-center mt-3 mb-3">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="/uploads/75b4984a-a52f-4e45-a743-339ec427bd6f.png" 
            alt="Cena de Gala Defensa Personal Policial Krav Maga" 
            className="rounded-lg max-w-full h-auto mb-3"
          />
          <img 
            src="/uploads/0908978a-560e-4b67-b07b-220dd9873c34.png" 
            alt="Bastones Policiales" 
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p>Información de estos 2 eventos. La gente que acuda al curso por precio del mismo le incluye la cena de Gala.</p>
        <p className="mt-4 font-bold text-center">VER MÁS EN:</p>
        <p className="text-center">
          <a 
            href="http://bootcampspain.es/wp-content/uploads/CURSO-BASTON-Y-GALA-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-bold"
          >
            CURSO BASTÓN Y GALA 2024
          </a>
        </p>
      </div>
    </div>
  );
};

export default CursoBastonGalaNews;
