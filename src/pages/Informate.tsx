
import React from 'react';
import Layout from '../components/Layout';

const Informate = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Infórmate</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-6">
          Aquí encontrarás toda la información relevante sobre nuestros cursos, metodología y filosofía.
        </p>
        
        <div className="space-y-6">
          <p className="text-lg">
            En nuestra escuela de Krav Maga en Asturias te ofrecemos un sistema de defensa personal eficaz, 
            realista y accesible para todas las personas, independientemente de su edad, condición física o 
            experiencia previa. Si estás buscando una forma de protegerte, mejorar tu confianza y estar en 
            forma mientras aprendes técnicas reales utilizadas por fuerzas de seguridad, este es tu lugar.
          </p>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary">
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <span className="mr-2">📍</span> ¿Dónde se imparten las clases?
            </h2>
            <p>
              Las sesiones se desarrollan en un entorno seguro y profesional, bajo la supervisión de instructores 
              certificados. Contamos con espacios adaptados en distintos puntos de Asturias, tanto en ciudades 
              como Gijón y Oviedo, como en otras localidades.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary">
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <span className="mr-2">🕓</span> Horarios flexibles
            </h2>
            <p>
              Ofrecemos clases durante toda la semana, con opciones de mañana y tarde para adaptarnos a tu ritmo 
              de vida. Además, disponemos de grupos por niveles: iniciación, intermedio y avanzado, para que 
              evoluciones a tu ritmo sin presión.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary">
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <span className="mr-2">💶</span> Tarifas y modalidades
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clase de prueba gratuita: ven a conocernos sin compromiso.</li>
              <li>Cuota mensual: desde 40€/mes.</li>
              <li>Bonos y descuentos para estudiantes, grupos y familias.</li>
              <li>Clases particulares disponibles bajo reserva.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-md border-l-4 border-primary">
            <h2 className="text-xl font-semibold flex items-center mb-2">
              <span className="mr-2">🤝</span> ¿Tienes dudas?
            </h2>
            <p className="mb-2">
              Nuestro equipo está a tu disposición para resolver cualquier pregunta sobre inscripciones, 
              condiciones físicas, equipamiento o certificaciones. Puedes contactar con nosotros por:
            </p>
            <ul className="list-disc pl-6">
              <li>Teléfono o WhatsApp</li>
              <li>Formulario web</li>
              <li>Redes sociales</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Informate;
