
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const ExcelentesResultadosCampeonatoEspanaCourse = () => {
  return (
    <CourseCard 
      title="EXCELENTES RESULTADOS EN EL CAMPEONATO DE ESPAÑA DE DEFENSA PERSONAL POLICIAL Y EN LA COPA DE ESPAÑA DE SAMBO-DP DE LA DELEGACION ASTURIANA"
      id="resultados-campeonato-espana"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
          <img 
            src="/uploads/d5e8f85e-9516-45df-a32c-6c7b4cd9d24a.png" 
            alt="Equipo de Asturias en el Campeonato de España" 
            className="w-full max-w-4xl h-auto rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-justify">
          Gran actuación del equipo de Asturias que dirige como entrenador IVÁN RODRÍGUEZ (miembro de la Comisión 
          Nacional de expertos de Defensa Personal Policial y de la Comisión Nacional de KRAV MAGA de la Federación 
          Española de Lucha) en el CAMPEONATO DE ESPAÑA DE DEFENSA PERSONAL POLICIAL celebrado el 8 de Diciembre 
          en Madrid con los siguientes resultados:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">3º Clasificado (BRONCE)</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>(Tori): Ricardo Ortea Gutiérrez (Asturias / OVIEPOL)</li>
            <li>(Uke): Noelia Blanco Expósito (Asturias / OVIEPOL)</li>
          </ul>
          <p className="mt-2 font-medium">2º Clasificados (SUBCAMPEONES DE ESPAÑA) por Autonomías (ASTURIAS)</p>
        </div>
        
        <p className="text-justify">
          Asimismo en la I COPA DE ESPAÑA DE SAMBO–DP de la FEDERACION ESPAÑOLA DE LUCHA celebrada en MADRID, 
          han obtenido los siguientes resultados:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">En Categoría SAMBO-DP.</p>
          
          <p className="mt-2">1º Clasificado (ORO)-CAMPEONES DE ESPAÑA:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>(Tori): Noelia Blanco Expósito (Asturias / OVIEPOL)</li>
            <li>(Uke): Ricardo Ortea Gutiérrez (Asturias / OVIEPOL)</li>
          </ul>
          
          <p className="mt-2">2º Clasificado (PLATA)-SUBCAMPEONES DE ESPAÑA</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>(Tori): Inés Ortea Gutiérrez (Asturias / OVIEPOL)</li>
            <li>(Uke): Ricardo Ortea Cueto (Asturias / OVIEPOL)</li>
          </ul>
          
          <p className="mt-2 font-medium">En Categoría BASTÓN POLICIAL EXTENSIBLE</p>
          
          <p className="mt-1">2º Clasificado (PLATA):</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>(Tori): Noelia Blanco Expósito (Asturias / OVIEPOL)</li>
            <li>(Uke): Ricardo Ortea Gutiérrez (Asturias / OVIEPOL)</li>
          </ul>
          
          <p className="mt-2">Y habiendo obtenido el 2º Puesto (SUBCAMPEONES DE ESPAÑA) por autonomías: ASTURIAS.</p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <img 
            src="/uploads/c6671aaf-25cb-449b-8f00-2c88aca179bc.png" 
            alt="Podio del Campeonato de España" 
            className="w-1/2 rounded-lg shadow-md"
          />
          <img 
            src="/uploads/c2c586ab-3209-400e-87dd-2ec314e23eb9.png" 
            alt="Ceremonia de premios" 
            className="w-1/2 rounded-lg shadow-md"
          />
        </div>
      </div>
    </CourseCard>
  );
};

export default ExcelentesResultadosCampeonatoEspanaCourse;
