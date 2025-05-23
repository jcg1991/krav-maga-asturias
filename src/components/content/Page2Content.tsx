
import React from 'react';
import LegionExtranjeraFrancesaCourse from '../courses/LegionExtranjeraFrancesaCourse';
import CampusMarcialCourse from '../courses/CampusMarcialCourse';
import IntervencionTacticasCourse from '../courses/IntervencionTacticasCourse';
import ClasesKravMagaCourse from '../courses/ClasesKravMagaCourse';
import KravMagaBootCampCourse from '../courses/KravMagaBootCampCourse';
import StageNacionalKravMagaCourse from '../courses/StageNacionalKravMagaCourse';
import SemanaTacticaCourse from '../courses/SemanaTacticaCourse';
import CampusMarcial2023Course from '../courses/CampusMarcial2023Course';
import CursoBastonPolicialCourse from '../courses/CursoBastonPolicialCourse';
import CursoTiradorActivoCourse from '../courses/CursoTiradorActivoCourse';

const Page2Content = () => {
  return (
    <div className="space-y-8">
      <LegionExtranjeraFrancesaCourse />
      <CampusMarcialCourse />
      <IntervencionTacticasCourse />
      <ClasesKravMagaCourse />
      <KravMagaBootCampCourse />
      <StageNacionalKravMagaCourse />
      <SemanaTacticaCourse />
      <CampusMarcial2023Course />
      <CursoBastonPolicialCourse />
      <CursoTiradorActivoCourse />
    </div>
  );
};

export default Page2Content;
