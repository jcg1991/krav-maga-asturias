
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const ArticuloCursoControlMasasLegionCourse = () => {
  return (
    <CourseCard 
      title="ARTICULO SOBRE EL CURSO DE CONTROL DE MASAS IMPARTIDO EN LA LEGION"
      id="articulo-curso-legion"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
          <img 
            src="/uploads/c447d1e0-efd8-4e62-a694-6e2b85b05239.png" 
            alt="Curso de Control de Masas en La Legión" 
            className="w-full max-w-4xl h-auto rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-justify">
          El Departamento de Defensa Personal Policial de la Federación de Luchas Olímpicas y DD.AA. del 
          Principado de Asturias, tal y como viene siendo habitual en las 2 últimas décadas ha impartido 
          recientemente en la sede del IV TERCIO ALEJANDRO FARNESIO DE LA LEGION, Ronda un curso intensivo 
          de 1 semana de duración centrado en materia antidisturbios como preparación a un futuro próximo 
          despliegue operativo de la unidad.
        </p>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://defensapolicial.es/wp-content/uploads/curso-LEGION-ORDEN-PUBLICO-2021.pdf', '_blank')}
          >
            Mas INFO
          </Button>
        </div>
      </div>
    </CourseCard>
  );
};

export default ArticuloCursoControlMasasLegionCourse;
