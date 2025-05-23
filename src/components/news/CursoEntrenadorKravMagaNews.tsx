
import React from 'react';
import { Link } from 'react-router-dom';

const CursoEntrenadorKravMagaNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CONVOCATORIA CURSO DE ENTRENADOR NACIONAL DE KRAV MAGA</h3>
      <div className="flex justify-center my-6">
        <img 
          src="/uploads/e0a125a9-6c92-430c-84ba-c9e69773d59a.png" 
          alt="Curso Entrenador Nacional de Krav Maga" 
          className="rounded-lg max-w-full h-auto max-h-96"
        />
      </div>
      <div className="mt-4 space-y-2 text-center">
        <p className="text-lg">Se Convoca el Curso para obtener la Titulación Oficial de Entrenador Nacional de KRAV MAGA.</p>
        <p className="mt-4 font-bold">VER MÁS EN:</p>
        <Link 
          to="/cursos#curso-entrenador-kravmaga" 
          className="text-blue-600 hover:underline font-bold"
          onClick={handleScrollToTop}
        >
          CURSO ENTRENADOR NACIONAL KRAV MAGA
        </Link>
      </div>
    </div>
  );
};

export default CursoEntrenadorKravMagaNews;
