
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const IvanRodriguezGalardonadoCruzCourse = () => {
  return (
    <CourseCard 
      title="IVAN RODRIGUEZ GALARDONADO CON LA CRUZ AL MERITO DE LA SEGURIDAD Y PROTECCIÓN"
      id="ivan-rodriguez-cruz-merito"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/uploads/34971f24-2784-46ee-a056-013831e6b152.png" 
            alt="Ceremonia de entrega de la Cruz al Mérito" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-justify">
          El pasado 24 de Junio en el acto solemne anual de la ASOCIACION INTERNACIONAL DE SEGURIDAD Y 
          PROTECCION CIVIL se impusieron las CRUCES AL MERITO DE LA SEGURIDAD Y PROTECCION SAN CRISTOBAL 
          DE MAGALLANES a miembros del Cuerpo Nacional de Policía, Guardia Civil y Ejército.
        </p>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://defensapolicial.es/wp-content/uploads/CRUZ-SEGURIDAD-Y-PROTECCION-IVAN-RODRIGUEZ.pdf', '_blank')}
          >
            Mas INFO
          </Button>
        </div>
      </div>
    </CourseCard>
  );
};

export default IvanRodriguezGalardonadoCruzCourse;
