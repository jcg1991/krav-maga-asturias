
import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CursoCQBSistemaIsraeli2Course = () => {
  return (
    <CourseCard 
      title="CURSO DE CQB –SISTEMA ISRAELI"
      id="curso-cqb-sistema-israeli-2"
    >
      <div className="space-y-4">
        <img 
          src="/uploads/8fe68878-cf53-4453-aa38-e99cde11880d.png" 
          alt="Curso CQB Sistema Israelí - Operadores tácticos" 
          className="w-full h-auto rounded-md shadow-sm" 
        />
        
        <div className="space-y-2">
          <p className="font-bold">FECHA: 3, 4 y 5 de Junio de 2022</p>
          <p className="font-bold">LUGAR: León (se informará a los inscritos)</p>
          
          <p className="font-bold">HORARIO:</p>
          <p>Viernes 3: 16 h hasta el Domingo 5, 18 h</p>
          
          <p className="font-bold">PRECIO: 290 euros. (Incluye curso, instalaciones y pensión completa con alojamiento)</p>
          
          <p className="font-bold">DIPLOMA/CERTIFICADO:</p>
          <p>Oficial y baremable en méritos.</p>
          
          <p className="font-bold">MATERIAL (Alumnos):</p>
          <p>Uniformidad de trabajo. Cinturón de servicio con arma corta. Gafas protección. Arma larga airsoft con slinga (Se podrá alquilar en caso de que no se posea)
          Casco entrenamiento, peto y coquillas. Pistola y cuchillo simulado.</p>
          
          <p className="font-bold">Profesores:</p>
          <p>Comandante en activo de Unidad de Operaciones Especiales de Fuerzas de Seguridad de Israel.</p>
          
          <p className="font-bold">INFORMACIÓN E INSCRIPCION:</p>
          <p>Telf: 655478818, 717109800 / e-mail: formacion@defensapolicial.es</p>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="https://defensapolicial.es/wp-content/uploads/Cartel-CQB-SISTEMA-ISRAELI.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            VER MÁS EN: Cartel CQB-SISTEMA ISRAELÏ
          </Link>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoCQBSistemaIsraeli2Course;
