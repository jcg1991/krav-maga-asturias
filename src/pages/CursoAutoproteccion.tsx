
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursoAutoproteccion = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR</h1>
        
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 flex flex-col items-center space-y-4">
                <img 
                  src="/uploads/c383a2e7-3fd4-48cb-8b56-343da38ae2b1.png" 
                  alt="Autoprotección del hogar" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
                <img 
                  src="/uploads/fafb3b38-5f38-41da-acc1-df3250599a61.png" 
                  alt="Defensa personal en el hogar" 
                  className="rounded-lg w-full h-auto shadow-md" 
                />
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">FECHA:</p>
                    <p className="text-primary font-semibold">24 Y 25 DE MAYO DE 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">HORARIO:</p>
                    <p>Sábado: 10 a 14h y 14 a 20h</p>
                    <p>Domingo: 9.30 a 15h</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DESTINATARIOS:</p>
                    <p>Civiles con pretensiones implementar tácticas de defensa y protección para su hogar y familia.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">Nº PLAZAS:</p>
                    <p>15</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-bold text-lg">DIPLOMA/CERTIFICADO:</p>
                    <p>Oficial y Baremable</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CursoAutoproteccion;
