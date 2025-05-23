
import React from 'react';
import CursoAperturasNews from './CursoAperturasNews';
import CursoAutoproteccionNews from './CursoAutoproteccionNews';
import CursosEspecialesNews from './CursosEspecialesNews';
import CursoInmueblesUrbanoNews from './CursoInmueblesUrbanoNews';
import CursoLegionNews from './CursoLegionNews';
import CursoBastonGalaNews from './CursoBastonGalaNews';
import CursoContraterrorismoNews from './CursoContraterrorismoNews';
import CursoEntrenadorKravMagaNews from './CursoEntrenadorKravMagaNews';

const LatestNewsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">ÚLTIMAS NOTICIAS</h2>
      <div className="space-y-4">
        <CursoAperturasNews />
        <CursoAutoproteccionNews />
        <CursosEspecialesNews />
        <CursoInmueblesUrbanoNews />
        <CursoLegionNews />
        <CursoBastonGalaNews />
        <CursoContraterrorismoNews />
        <CursoEntrenadorKravMagaNews />
      </div>
    </div>
  );
};

export default LatestNewsSection;
