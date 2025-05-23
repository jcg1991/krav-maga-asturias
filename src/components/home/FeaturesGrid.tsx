
import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Para Civiles</h3>
        <p>Aprende técnicas efectivas para protegerte y proteger a tus seres queridos en situaciones de peligro.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Para Profesionales</h3>
        <p>Programas especializados para miembros de cuerpos de seguridad, militares y personal de seguridad privada.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Próximos Cursos</h3>
        <p>Consulta nuestro calendario de formaciones especializadas y cursos intensivos para todos los niveles.</p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
