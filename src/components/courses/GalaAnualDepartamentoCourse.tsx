
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const GalaAnualDepartamentoCourse = () => {
  return (
    <CourseCard 
      title="GALA ANUAL DEL DEPARTAMENTO DE DEFENSA PERSONAL POLICIAL Y DE KRAV MAGA"
      id="gala-anual-departamento"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/uploads/ab7aab86-6630-4974-af83-aa222bb10b00.png" 
            alt="Gala Anual del Departamento de Defensa Personal Policial" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <p className="text-justify">
          Este Sábado 19 de Junio a las 20.30 h se celebró la GALA ANUAL DEL DEPARTAMENTO DE DEFENSA PERSONAL 
          POLICIAL Y DE KRAV MAGA en el Salón Principal del Hotel España de Oviedo. Con aforo completo -algo más de 
          cien personas, estrictamente separadas en mesas nominalmente asignadas por corporaciones e instituciones en 
          aplicación de las normas sanitarias vigentes- tuvimos que lamentar y pedir disculpas a aquellas personas que 
          no pudieron asistir al completarse el aforo que permitía sanidad.
        </p>
        
        <p className="text-justify">
          La mesa presidencial del acto, con la anfitriona BELEN RODRÍGUEZ DE ALBA Presidenta de la Federación Asturiana 
          de Luchas Olímpicas en el centro, contó con la presencia de ANGEL LUIS GIMENEZ BRAVO, Presidente de la Federación 
          madrileña de Lucha, JOSE Mª BENITO GARCIA fundador y máximo representante de la Defensa Personal Policial; 
          ANDRES ZAMORANO MORENO, Director Técnico de Defensa personal policial Federación Española de Lucha; 
          JOSE HOYO RODRIGO, Presidente de la ACADEMIA INTERNACIONAL DE CIENCIAS TECNOLOGIA Y HUMANIDADES; 
          ANTONIO VILLAMARIN RIELO, COMISARIO JEFE PROVINCIAL DEL CUERPO NACIONAL DE POLICIA e 
          IVAN RODRIGUEZ ZAPICO, DIRECTOR DEPARTAMENTO DE KRAV MAGA Y DEFENSA PERSONAL POLICIAL
        </p>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://defensapolicial.es/gala-departamento', '_blank')}
          >
            GALA ANUAL DEL DEPARTAMENTO DE DEFENSA PERSONAL POLICIAL Y DE KRAV MAGA
          </Button>
        </div>
      </div>
    </CourseCard>
  );
};

export default GalaAnualDepartamentoCourse;
