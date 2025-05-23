
import React from 'react';
import Layout from '../components/Layout';
const Enlaces = () => {
  return <Layout>
      <h1 className="text-3xl font-bold text-primary mb-6">Enlaces</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Enlaces de Interés</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sitios Oficiales</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://defensapolicial.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Defensa Policial</a></li>
              <li><a href="https://www.luchaasturias.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lucha Asturias</a></li>
              <li><a href="https://kravmagabootcamp.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Krav Maga Bootcamp</a></li>
              <li><a href="https://www.gimnasioshotokan.es/index.php/id/34/claves/krav-maga-defensa-personal-israeli-gimnasio-gijon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gimnasio Shotokan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.facebook.com/share/16cRj9Jgh4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Personal</a></li>
              <li><a href="https://www.facebook.com/kravmaga.asturias/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Krav Maga Asturias</a></li>
            </ul>
          </div>
          
          
          
          
          
          
        </div>
      </div>
    </Layout>;
};
export default Enlaces;
