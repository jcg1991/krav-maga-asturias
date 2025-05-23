
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Mail, Phone } from 'lucide-react';

const Contacto = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Formulario de Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            
            <div>
              <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <Input id="asunto" placeholder="Asunto de tu mensaje" />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Tu Mensaje (opcional)</label>
              <Textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" className="h-32" />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Enviar Mensaje</Button>
          </form>
          
          <div className="mt-4 text-xs text-gray-500">
            <p className="mt-4">*A los efectos previstos en la Ley Orgánica 15/1999 de 13 de diciembre, sobre la protección de datos de carácter personal, 
            se le informa que los datos personales proporcionados se incorporarán (o actualizarán) a los ficheros del Departamento de 
            Krav Maga de la Federación de Luchas Olímpicas y D.A. del Principado de Asturias. La finalidad del tratamiento de los datos 
            será la de realizar los servicios de información de Cursos, incorporación a las actividades propias del Departamento, así 
            como la realización de estudios estadísticos. Vd. Tiene derecho al acceso, rectificación, cancelación y oposición en los 
            términos previstos en la ley, que podrá ejercitar mediante correo electrónico dirigido al responsable de los mismos en la 
            siguiente dirección E-Mail: formacion@defensapolicial.es</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-secondary mb-4">Información de Contacto</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-1 flex items-center">
                <Phone className="h-4 w-4 mr-2" /> Teléfonos:
              </h3>
              <p>Federación de Lucha del Principado de Asturias: 985331721</p>
              <p>Teléfono: 655478818</p>
              <p>Móvil: 655478818</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1 flex items-center">
                <Mail className="h-4 w-4 mr-2" /> Correo Electrónico:
              </h3>
              <a href="mailto:formacion@defensapolicial.es" className="text-blue-600 hover:underline">formacion@defensapolicial.es</a>
              <p className="mt-2 text-sm">
                Envienos un correo indicando su nombre, apellidos y dirección de correo
                electrónico donde quiera que se le envíe la información.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Dirección:</h3>
              <p>Federación de Lucha del Principado de Asturias</p>
              <p>C/Luis Adaro Ruiz-Falcó</p>
              <p>33203–Gijón (Asturias)</p>
              <p>ESPAÑA</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1 flex items-center">
                <Facebook className="h-4 w-4 mr-2" /> Redes Sociales:
              </h3>
              <a 
                href="http://www.facebook.com/defensapolicial.intervencion?fref=ts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </div>
            
            <div className="mt-4">
              <p className="font-medium">
                Nuestros Cursos son impartidos por Profesionales de la Defensa y la Seguridad y nuestras Titulaciones, certificados...son
                OFICIALES y BAREMABLES EN MERITOS tanto para las FF.Y CC. de Seguridad y Ejército como para otro tipo de administración.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
