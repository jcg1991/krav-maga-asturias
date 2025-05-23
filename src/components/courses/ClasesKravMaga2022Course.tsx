
import React from 'react';
import CourseCard from './CourseCard';

const ClasesKravMaga2022Course = () => {
  return (
    <CourseCard 
      title="CLASES DE KRAV MAGA 2022 – 2023"
      id="clases-krav-maga-2022"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/cfe5c0b1-b3c7-4eaf-a3ea-60bb1e7891c9.png" 
          alt="Clases de Krav Maga 2022-2023" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p>Comienzo clases regulares KRAV MAGA 2022-2023 en el Palacio de Deportes de Oviedo.</p>
          <p>Inicio de clases : Lunes 12 de Septiembre.</p>
        </div>
      </div>
    </CourseCard>
  );
};

export default ClasesKravMaga2022Course;
