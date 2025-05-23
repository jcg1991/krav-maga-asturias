
import React from 'react';
import CourseCard from './CourseCard';

const IvanRodriguezCruzPlataFederacionExtremenaCourse = () => {
  return (
    <CourseCard 
      title="IVÁN RODRÍGUEZ RECIBE LA CRUZ DE PLATA AL MÉRITO DEPORTIVO DE LA FEDERACIÓN EXTREMEÑA DE LUCHA"
      id="ivan-rodriguez-cruz-plata"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-full flex items-stretch">
            <img 
              src="/uploads/701b8cab-0ef8-47a0-bd06-fc4ab572ffa9.png" 
              alt="Iván Rodríguez recibiendo medalla" 
              className="w-full h-full object-cover rounded-md shadow-sm" 
            />
          </div>
          <div className="h-full flex items-stretch">
            <img 
              src="/uploads/23c1b68a-f70d-45e9-a84a-e17f25ef633f.png" 
              alt="Iván Rodríguez en la gala" 
              className="w-full h-full object-cover rounded-md shadow-sm" 
            />
          </div>
        </div>
        
        <p>
          El pasado 11 de Diciembre en la GALA ANUAL de la FEDERACIÓN EXTREMEÑA DE LUCHA, 
          el Instructor IVÁN RODRÍGUEZ que dirige el Departamento de DEFENSA PERSONAL POLICIAL 
          y el de KRAV MAGA de la FEDERACIÓN DE LUCHAS OLÍMPICAS Y DISCIPLINAS ASOCIADAS DEL 
          PRINCIPADO DE ASTURIAS, fue galardonado con la MEDALLA DE PLATA AL MÉRITO DEPORTIVO.
        </p>
        
        <div className="mt-4">
          <img 
            src="/uploads/0a644011-bd53-43a3-a079-88a917436b43.png" 
            alt="Medalla de Plata al Mérito Deportivo" 
            className="w-full max-w-md mx-auto h-auto rounded-md shadow-sm" 
          />
        </div>
      </div>
    </CourseCard>
  );
};

export default IvanRodriguezCruzPlataFederacionExtremenaCourse;
