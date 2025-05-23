
import React from 'react';
import Layout from '../components/Layout';

const Clases = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Clases</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-6">
          Se imparten clases regulares de Krav Maga en el siguiente Lugar y Horario: MAÑANAS de LUNES Y VIERNES de 11.00 a 12.00 / TARDES de LUNES Y JUEVES de 21.00 a 22.15 h en el Palacio de Deportes de Oviedo.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">Nuestros Instructores</h2>
          <p className="mb-4">
            Nuestros Instructores son PROFESIONALES MIEMBROS EN ACTIVO DE LAS FF.Y CC. DE SEGURIDAD DEL ESTADO y EJERCITO.
          </p>
          <p>
            Son profesionales de reputado prestigio, expertos en varias artes marciales y sistemas de combate y que imparten formación en unidades operativas del mundo Policial, Militar y también en el ámbito civil.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">Requisitos para Incorporación a Clases</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Documentación: Fotocopia del DNI</li>
            <li>Fotocopia de Seguro Médico (Tarjeta de la S. Social, Seguro Privado, Mutua…)</li>
            <li>2 Fotografías Tamaño carnet con nombre y Apellidos escrito por detrás</li>
            <li>Obligatoriedad de Federarse (según Legislación Deportiva Vigente)</li>
            <li>MATERIAL PARA ENTRENAR: Se informará a los alumnos</li>
            <li>Entrevista con el alumno por parte de los Instructores responsables</li>
          </ul>
          <p className="mt-4 italic">
            * En caso de ser menor de edad, la Entrevista será con el Padre, Madre, Tutor o responsable legal, siendo imprescindible la autorización expresa por escrito del mismo para que el menor desarrolle la actividad.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">Horarios y Sedes</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-primary">OVIEDO</h3>
            <p className="font-semibold">PALACIO DE DEPORTES DE OVIEDO</p>
            <ul className="pl-4">
              <li>Turno Mañanas: Lunes y Viernes de 11.30 a 12.45 h</li>
              <li>Turno Tardes: Lunes y Jueves de 20.45 a 22 h</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-primary">GIJÓN</h3>
            <p className="font-semibold">– GIMNASIO SHOTOKAN</p>
            <ul className="pl-4">
              <li>Infantil (8 a 16 años): Martes y Jueves de 19 a 20 h</li>
              <li>Adultos: Lunes y Miércoles de 20 a 21 h</li>
            </ul>
            <p className="font-semibold mt-2">– CLÍNICA DE FISIOTERAPIA CAMPA</p>
            <ul className="pl-4">
              <li>Adultos: Lunes y Miércoles de 18.50 h a 19.50 h</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-primary">CANGAS DE ONIS</h3>
            <p className="font-semibold">POLIDEPORTIVO MUNICIPAL JUAN ANTONIO VEGA DÍAZ</p>
            <ul className="pl-4">
              <li>Infantil (hasta 15 años): Lunes y Miércoles de 18.45 a 19.30 h</li>
              <li>Adultos: Lunes y Miércoles de 19.30 a 21 h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">LLANES</h3>
            <p className="font-semibold">POLIDEPORTIVO MUNICIPAL</p>
            <ul className="pl-4">
              <li>Lunes y Miércoles de 16.45 a 17.45 h</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clases;
