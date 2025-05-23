
import React from 'react';
import CourseCard from './CourseCard';

const CursoEntrenadorKravMaga = () => {
  return (
    <CourseCard 
      title="CONVOCATORIA CURSO DE ENTRENADOR NACIONAL DE KRAV MAGA" 
      id="curso-entrenador-kravmaga"
    >
      <div className="space-y-6">
        {/* Further increased image size */}
        <div className="flex justify-center my-8">
          <img 
            src="/uploads/e0a125a9-6c92-430c-84ba-c9e69773d59a.png" 
            alt="Curso Entrenador Nacional de Krav Maga" 
            className="rounded-lg shadow-md max-w-full h-auto max-h-[28rem]"
          />
        </div>
        
        {/* Course Description */}
        <div className="space-y-2 text-center">
          <p className="text-lg">Se Convoca el Curso para obtener la Titulación Oficial de Entrenador Nacional de KRAV MAGA.</p>
        </div>
        
        {/* More Info Link */}
        <div className="text-center mt-4">
          <p className="font-bold text-lg">VER MÁS EN:</p>
          <a 
            href="/curso-entrenador-kravmaga"
            className="text-blue-600 hover:underline font-bold text-lg"
          >
            CURSO ENTRENADOR NACIONAL KRAV MAGA
          </a>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoEntrenadorKravMaga;
