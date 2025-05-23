
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursoInmueblesUrbanoPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Curso Intervención en Inmuebles y Zonas Urbanizadas</h1>
        
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">DETALLES DEL CURSO</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src="/uploads/476d59f1-7e4a-4735-8d61-3912f94e1469.png" 
                  alt="Curso intervención en inmuebles" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
                <p className="mt-3 text-center font-medium">IMPARTIDO POR OPERATIVO UNIDAD ESPECIAL EN APERTURAS</p>
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">FECHA:</p>
                    <p className="text-primary font-semibold">11, 12 DE ENERO DE 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DIPLOMA / CERTIFICADO:</p>
                    <p>Oficial y Baremable</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">PLAZAS:</p>
                    <p>Limitadas</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">INFORMACIÓN / INSCRIPCIONES:</p>
                    <p>TFNO.: 655478818</p>
                    <p>E-MAIL: formacion@defensapolicial.es</p>
                    <p>www.defensapolicial.es</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-blue-800">
                    <span className="font-bold">Descripción del curso:</span> Este curso especializado está dirigido a profesionales de seguridad y militares que buscan mejorar sus habilidades tácticas en entornos urbanos y edificaciones. Se abordan técnicas avanzadas de entrada, desplazamiento y control de espacios cerrados.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-green-800">
                    <span className="font-bold">Contenidos principales:</span>
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-green-800">
                    <li>Tácticas de entrada en inmuebles</li>
                    <li>Desplazamientos coordinados en equipo</li>
                    <li>Cobertura y seguridad en espacios cerrados</li>
                    <li>Gestión de amenazas en zonas urbanizadas</li>
                    <li>Prácticas en escenarios reales</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">
            <span className="font-bold">Importante:</span> Para inscribirse en este curso es necesario contactar directamente con la organización a través del teléfono o email proporcionados. Las plazas son limitadas y se asignan por orden de inscripción.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CursoInmueblesUrbanoPage;
