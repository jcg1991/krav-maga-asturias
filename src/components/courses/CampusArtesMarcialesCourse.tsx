
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const CampusArtesMarcialesCourse = () => {
  return (
    <CourseCard 
      title="XII Campus de Artes Marciales y Deportes de Contacto «Ciudad de Oviedo»"
      id="campus-artes-marciales"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/uploads/2fff38f0-a7a9-4531-994c-d7700d34d47b.png" 
            alt="XII Campus de Artes Marciales" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold">FECHAS:</span> 28, 29 y 30 de Mayo de 2021</p>
            <p><span className="font-semibold">LUGAR:</span> Oviedo. Se comunicará a los inscritos.</p>
            <p><span className="font-semibold">HORARIO:</span> Comenzará el Viernes a las 09.30 h y terminará el Domingo a las 14 h</p>
            <p><span className="font-semibold">PRECIO:</span> 150 euros</p>
            <p className="text-sm">Para inscribirse ha de hacerse el importe del ingreso del curso en la cuenta a nombre de OVIEPOL: ES 94 2100 7995 15 0200031149 de LA CAIXA indicando nombre y apellidos y a continuación la palabra Campus. Luego se ha de enviar un mail de confirmación a formación@defensapolicial.es indicando Nombre y apellidos y que ha realizado el ingreso. La no asistencia al curso implicará la pérdida de la reserva.</p>
          </div>
          
          <div>
            <p><span className="font-semibold">Titulación:</span> Diploma Expedido con todas las especialidades.</p>
            <p className="text-sm">Este curso es computable como créditos para la obtención de las TITULACIONES OFICIALES de Especialista en Combate Cuerpo a Cuerpo, Defensa Personal Policial, Sambo-Defensa Personal y Defensa Personal Femenina (En sus 3 niveles: BASICO, SUPERIOR Y TECNICO), así como para pase de grado de cinturones y danes.</p>
            
            <p><span className="font-semibold">INFORMACIÓN E INSCRIPCION:</span></p>
            <p>Telf: 650 06 36 40-655 47 88 18</p>
            <p>e-mail: formacion@defensapolicial.es</p>
            
            <p><span className="font-semibold">Requisitos:</span> Todos los participantes deben aportar fotocopia del Dni y Fotocopia de Seguro médico (Tarjeta seguridad social, Adeslas, Caser…)</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://defensapolicial.es/wp-content/uploads/2021/05/Campus-MARCIAL-2021.pdf', '_blank')}
          >
            VER MAS
          </Button>
        </div>
      </div>
    </CourseCard>
  );
};

export default CampusArtesMarcialesCourse;
