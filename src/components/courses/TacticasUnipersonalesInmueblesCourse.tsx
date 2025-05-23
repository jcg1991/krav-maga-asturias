
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const TacticasUnipersonalesInmueblesCourse = () => {
  return (
    <CourseCard 
      title="TÁCTICAS UNIPERSONALES EN INMUEBLES – CQB 1 PERSONA"
      id="tacticas-unipersonales-inmuebles"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="/uploads/369e3661-ce9d-4ad9-92a1-374f9043fd88.png" 
            alt="Persona con arma en inmueble" 
            className="w-full h-auto rounded-md shadow-sm" 
          />
          <img 
            src="/uploads/de81b461-22eb-46d8-8e4a-3eedfa7dcdae.png" 
            alt="Tácticas con arma larga en inmueble" 
            className="w-full h-auto rounded-md shadow-sm" 
          />
        </div>
        
        <div className="space-y-2">
          <p className="font-bold">FECHA: 7 Y 8 de Mayo de 2022</p>
          <p className="font-bold">LUGAR: (Oviedo) Se informará a los inscritos</p>
          
          <p className="font-bold">HORARIO:</p>
          <p>Sábado 09.30 a 14 h y de 16 a 19 h</p>
          <p>Domingo 10 a 14 h</p>
          
          <p className="font-bold">PRECIO: 150 euros.</p>
          
          <p className="font-bold">DIPLOMA/CERTIFICADO:</p>
          <p>Oficial y baremable en méritos, expedido por la Federación.</p>
          
          <p className="font-bold">MATERIAL a llevar:</p>
          <p>Uniforme con cinturón de servicio y pistola / arma simulada.</p>
          
          <p className="font-bold">INFORMACIÓN E INSCRIPCION:</p>
          <p>Telf: 655478818, 650063640</p>
          <p>e-mail: formacion@defensapolicial.es</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="https://defensapolicial.es/wp-content/uploads/CURSOT_1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MAS EN: CURSOT_1
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default TacticasUnipersonalesInmueblesCourse;
