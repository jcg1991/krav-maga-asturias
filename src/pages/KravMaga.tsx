
import React from 'react';
import Layout from '../components/Layout';

const KravMaga = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Krav Maga</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">¿Qué es Krav Maga?</h2>
        <p className="mb-6">
          Krav Maga quiere decir en idioma Hebreo "lucha de contacto". Es el sistema oficial de defensa personal 
          y combate cuerpo a cuerpo de las fuerzas armadas y policiales de Israel. Clasificado como secreto militar 
          hasta 1964, es un sistema de defensa personal de nuestros tiempos, revolucionario caracterizado por su 
          eficacia, contundencia y su simplicidad, lo que ha hecho que numerosos cuerpos especiales tanto del ámbito 
          militar como del policial en todo el mundo, lo adopten como sistema oficial de defensa: La policía de los 
          Ángeles, el FBI, el MOSSAD (por descontado), el GIGN (el GEO francés)…. entre tantos otros. También en el 
          ámbito civil, hay gente instruida en Krav Maga: por ejemplo el personal de vuelo de las líneas aéreas 
          Israelíes EL-AL (equivalente aquí en España a Iberia): azafatas, pilotos…, y en numerosas ocasiones, han 
          dado muestra de su eficacia al reducir a terroristas armados con cuchillos en sus aviones.
        </p>

        <h2 className="text-2xl font-bold text-secondary mb-4">Historia y Filosofía</h2>
        <p className="mb-4">
          El Krav Maga (en hebreo: קרב מגע, "combate de contacto") fue desarrollado por Imre Lichtenfeld (también conocido como Imi Sde-Or) 
          para las Fuerzas de Defensa de Israel a mediados del siglo XX.
        </p>
        <p>
          Se caracteriza por su enfoque en situaciones reales de conflicto, su simplicidad técnica y su efectividad probada en combate real.
        </p>
      </div>
    </Layout>
  );
};

export default KravMaga;
