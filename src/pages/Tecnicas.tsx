
import React from 'react';
import Layout from '../components/Layout';

const Tecnicas = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Técnicas</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Principios Técnicos</h2>
        <p className="mb-4">
          El Krav Maga se basa en principios simples pero efectivos que cualquier persona puede aprender y aplicar.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Neutralización rápida de amenazas</li>
          <li>Defensa y contraataque simultáneos</li>
          <li>Uso de movimientos naturales e instintivos</li>
          <li>Técnicas adaptadas a situaciones de estrés real</li>
          <li>Defensa contra múltiples agresores</li>
          <li>Defensa contra armas blancas y de fuego</li>
        </ul>
        
        <div className="mt-8 space-y-4 text-gray-700">
          <p>
            Gran parte del éxito del Krav maga, se debe a que sus técnicas no son complicadas y son fáciles de aprender por cualquier persona sin que prime su fuerza física u otras cualidades; esto hace que en una situación de conflicto real las técnicas de Krav Maga "afloren" espontáneamente cuando el stress es tan elevado.
          </p>

          <p>
            Todo esto es lo que hizo que numerosos Cuerpos policiales y militares del mundo lo tengan adoptado como sistema de defensa personal de sus miembros.
            Las mujeres son las grandes beneficiadas de este sistema de defensa personal, que veían como otras disciplinas no se adaptaban bien a ellas por sus características físicas distintas a las del hombre.
          </p>

          <p>
            Sobre este aspecto versa la película : "NUNCA MAS", en la que Jennifer Lopez encarna a una mujer maltratada por su marido y harta de tanto sufrimiento se pone a entrenar Krav Maga con un profesor. Son numerosas las mujeres y actrices de Hollywood que entrenan Krav Maga: Jennifer Lopez, Shannon Elizabeth… También cabe destacar que la parte de defensa contra cuchillo y armas contundentes (que se da en el programa de cinturón azul) y la de pistola (cinturón marrón), es de lo más eficaz que hay hoy en día, y esta es otra de las razones por las que Fuerzas de seguridad y militares abogan por el krav maga.
          </p>

          <p>
            El Krav Maga tiene la peculiaridad de orientar el entrenamiento a situaciones reales, por eso muchos de sus ejercicios se realizan con stress adicional, en situaciones desventajosas, cansancio extremo, condiciones adversas…que es lo que nos vamos a encontrar en una situación real. Como anécdota, en todas las escuelas de Krav Maga, una vez al mes se entrena al aire libre (parques, calle…) ya que la Psicología del combate y de la defensa personal , las caídas…no son las mismas que en un tatami.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Tecnicas;
