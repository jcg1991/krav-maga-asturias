
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CursosEspecialesPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">Cursos Especiales 2025</h1>
        
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">CALENDARIO COMPLETO DE CURSOS 2025</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-6">
              <img 
                src="/uploads/296e4e54-8b3f-4aac-84cc-ccd42f280f77.png" 
                alt="Calendario Cursos Especiales 2025" 
                className="rounded-lg max-w-full h-auto shadow-md" 
              />
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded w-full">
                <p className="text-yellow-800">
                  <span className="font-bold">Información detallada:</span> Para más información sobre cualquiera de nuestros cursos especiales, 
                  contacta con nosotros a través de:
                </p>
                <div className="mt-3">
                  <p><strong>Email:</strong> formacion@defensapolicial.es</p>
                  <p><strong>Teléfono:</strong> 655478818</p>
                  <p><strong>WhatsApp:</strong> 625377602</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">1) ESPECIALISTA BATÓN POLICIAL EXTENSIBLE</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">11 Y 12 DE MARZO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/cursos" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">2) OPERADOR ESCUDO BALÍSTICO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">22, 23 Y 24 ABRIL</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/cursos" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">3) INTERVENCIÓN Y DEFENSA EN TRANSPORTE PÚBLICO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">10 MAYO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/cursos" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-lg">4) AUTOPROTECCIÓN Y DEFENSA DE MORADA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">24 Y 25 MAYO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/curso-autoproteccion" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">5) RESPUESTA TÁCTICA CANINA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">3, 4, 5 JUNIO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/cursos" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">6) OPERADOR DE APERTURAS (INMUEBLES)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">22, 23 Y 24 JUNIO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/curso-inmuebles" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-lg">7) KRAV MAGA BOOT CAMP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary">28 a 31 AGOSTO</p>
                    <Button className="mt-4 bg-[#8B5CF6] hover:bg-[#7E69AB] w-full">
                      <a href="/cursos" className="text-white w-full">VER DETALLES</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CursosEspecialesPage;
