
import React from 'react';
import Layout from '../components/Layout';

const Areas = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Áreas de Entrenamiento</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-6">
          Nuestro entrenamiento cubre diversas áreas de la defensa personal y combate, adaptadas a diferentes necesidades y perfiles.
        </p>
        
        <p className="mb-6">
          Dentro del Departamento de KRAV MAGA se contemplan las siguientes secciones o áreas:
        </p>
        
        <div className="space-y-10 mt-8">
          {/* Area Self-Defense */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">ÁREA SELF-DEFENSE</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Incluye todas las técnicas básicas y situaciones de la defensa personal: estrangulamientos, agarres, amenazas…tanto de pie como en el suelo.</li>
              <li>Defensa contra armas blancas y objetos contundentes (amenazas y ataques).</li>
              <li>Defensa contra amenazas de armas de fuego (largas y cortas).</li>
              <li>Defensa contra varios agresores.</li>
              <li>Uso de armas para la defensa: Cuchillo / bastón corto / armas de fortuna.</li>
            </ul>
          </div>
          
          {/* Area Cuerpo a Cuerpo */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">ÁREA CUERPO A CUERPO</h2>
            <p className="mb-4">Comprende el aprendizaje más avanzado del Krav Maga pues representa la libre o no elección de una persona de combatir con otra u otras.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Técnicas básicas de cuerpo a cuerpo (Defensas, ataques y contras).</li>
              <li>Combate en suelo.</li>
              <li>Técnicas de golpeo y percusión.</li>
              <li>Lucha.</li>
              <li>Estrategias contra varios oponentes.</li>
              <li>Psicología del combate y la confrontación.</li>
              <li>Ejercicios y juegos aplicados.</li>
            </ul>
          </div>
          
          {/* Area de Protección */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">ÁREA DE PROTECCIÓN DE PERSONALIDADES Y AYUDA A TERCEROS</h2>
            <p>Este área específica conlleva un programa singular y está especialmente diseñado para aquellas personas que normalmente se circunscriban al ámbito de estas actuaciones: Escoltas, Agentes de la ley.</p>
          </div>
          
          {/* Area Profesional */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">ÁREA PROFESIONAL</h2>
            <p className="mb-4">Dedicada exclusivamente a las Fuerzas del orden y personal militar, debido a sus especiales características, equipamiento, modo operacional y ámbito de actuación que hace que haya que ahondar en ciertos aspectos que al personal civil no le interesa.</p>
            <p>Incluye el aprendizaje y manejo de armas ofensivas: cuchillo, etc…</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Areas;
