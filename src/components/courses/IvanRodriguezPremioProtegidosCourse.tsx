
import React from 'react';
import CourseCard from './CourseCard';

const IvanRodriguezPremioProtegidosCourse = () => {
  return (
    <CourseCard 
      title="IVÁN RODRIGUEZ RECIBE EL PREMIO &quot;PROTEGIDOS&quot; DE INTERECONOMIA"
      id="ivan-rodriguez-premio-protegidos"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/9a74c26f-4c95-4388-aec2-55a9b81736d3.png" 
          alt="Iván Rodriguez recibiendo el premio Protegidos" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p>Nuestro Instructor Iván Rodríguez ha sido galardonado con el PREMIO PROTEGIDOS 2021 de INTERECONOMÍA en la exitosa Gala anual celebrada en Madrid el pasado 29 de Enero de 2022 con asistencia de más de 200 personas.</p>
          
          <p>Con este premio se reconoce la prestigiosa labor formativa policial de Iván Rodríguez a numerosas corporaciones y unidades tanto de nuestro país como en el extranjero.</p>
          
          <p>En el acto también tuvo lugar un sentido homenaje a las víctimas del terrorismo en el que se entonó "La Muerte no es el final" mientras se entregaba una ofrenda floral en su honor. Cerró el acto el HIMNO NACIONAL DE ESPAÑA.</p>
        </div>
        
        <img 
          src="/uploads/802f47b8-b0a4-4068-b8ff-9165ae98d306.png" 
          alt="Premiados del CNP" 
          className="w-full h-auto rounded-md shadow-sm mt-4" 
        />
        
        <p className="italic">
          Premiados pertenecientes al CNP, de izda. a dcha.: INSPECTOR JEFE FEDERICO MILLÁN,
          COMISARIO EDUARDO GUTIÉRREZ, INSPECTOR JEFE GONZALO CHICHARRO,
          INSPECTOR JEFE JOSE Mª BENITO, OFICIAL IVÁN RODRÍGUEZ.
        </p>
      </div>
    </CourseCard>
  );
};

export default IvanRodriguezPremioProtegidosCourse;
