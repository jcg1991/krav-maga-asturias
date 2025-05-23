
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from "@/components/ui/button";

const CursoKubotanGalaPolicialCourse = () => {
  return (
    <CourseCard 
      title="CURSO DE KUBOTAN Y CENA DE GALA DEFENSA PERSONAL POLICIAL KRAV MAGA"
      id="curso-kubotan-gala-policial"
    >
      <div className="space-y-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/uploads/328d4e8b-ef19-4f17-84b9-78f47e087646.png" 
            alt="Curso de Kubotan y Cena de Gala" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <p className="font-bold text-center">SELF-DEFENSE (EL PROGRAMA ORIGINAL DE T.KUBOTA)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold">FECHA:</span> 19-06-2021</p>
            
            <p><span className="font-semibold">LUGAR:</span></p>
            <ul className="list-disc pl-5">
              <li>Del curso: Se informará a los inscritos.</li>
              <li>De la Gala: HOTEL ESPAÑA. – C/ Jovellanos (Oviedo)</li>
            </ul>
            
            <p><span className="font-semibold">HORARIO:</span></p>
            <ul className="list-disc pl-5">
              <li>Curso (de 10:00 a 14.00 h.)</li>
              <li>Gala (20.30 h)</li>
            </ul>
          </div>
          
          <div>
            <p><span className="font-semibold">PRECIO:</span> 50 euros (Incluye curso y Cena de Gala del Departamento de Defensa Personal Policial y Krav Maga)</p>
            
            <p><span className="font-semibold">Diploma/certificado:</span> Oficial, expedido por la Federación y baremable en méritos.</p>
            
            <p><span className="font-semibold">Material a llevar:</span></p>
            <ul className="list-disc pl-5">
              <li>Para el curso: Ropa deportiva</li>
              <li>Para la cena:
                <ul className="list-disc pl-5">
                  <li>Militares y miembros de FF.Y CC. Seguridad deberán acudir con uniforme de Gala.</li>
                  <li>Resto de personal civil: Caballeros traje oscuro y corbata. Damas: Traje cocktail.</li>
                  <li>Órdenes / Instituciones: Uniformidad correspondiente con distintivos y condecoraciones.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="font-semibold mt-4">INFORMACIÓN E INSCRIPCION: Telf: 650 06 36 40-655 47 88 18 / e-mail: formacion@defensapolicial.es</p>
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => window.open('https://www.defensapolicial.es/wp-content/uploads/Curso-Kubotan-Gala-2021.pdf', '_blank')}
          >
            VER MAS
          </Button>
        </div>
      </div>
    </CourseCard>
  );
};

export default CursoKubotanGalaPolicialCourse;
