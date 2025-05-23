
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const CursosEspeciales = () => {
  // Scroll to top handler function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <CourseCard 
      title="CURSOS ESPECIALES 2025"
    >
      <div className="flex flex-col items-center mt-3 mb-3">
        <img 
          src="/uploads/296e4e54-8b3f-4aac-84cc-ccd42f280f77.png" 
          alt="Calendario Cursos Especiales 2025" 
          className="rounded-lg max-w-full h-auto mb-2" 
        />
      </div>
      <div className="mt-4 space-y-2 text-center">
        <p className="mt-4 font-bold">* VER MÁS EN*: <Link to="/cursos-especiales" className="text-blue-600 hover:underline" onClick={handleScrollToTop}>CURSOS ESPECIALES 2025</Link></p>
      </div>
    </CourseCard>
  );
};

export default CursosEspeciales;
