
import React from 'react';
import { Link } from 'react-router-dom';

const CursoLegionNews = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="border-b pb-4">
      <h3 className="text-lg font-medium text-center">CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA</h3>
      <div className="flex flex-col items-center mt-3 mb-3">
        <div className="grid grid-cols-1 gap-2">
          <img 
            src="/uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png" 
            alt="Grappling Policial" 
            className="rounded-lg max-w-full h-auto mb-3" 
          />
          <div className="aspect-w-16 aspect-h-9 w-full">
            <video 
              controls
              className="rounded-lg w-full shadow-md"
              poster="/uploads/0851ff09-9470-47f2-a7a6-5864b506a54c.png"
            >
              <source src="http://defensapolicial.es/wp-content/uploads/CURSO-LEGION-ESPANOLA.mp4?_=1" type="video/mp4" />
              Su navegador no soporta el tag de video.
            </video>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p>Curso INTERVENCION POLICIAL Y COMBATE CUERPO A CUERPO, impartido por nuestro Departamento en el mes de Agosto a efectivos de la LEGION ESPAÑOLA, en el IV TERCIO con sede en RONDA (MALAGA).</p>
        <p><strong>Convocatoria para el Curso de Monitor Nacional de Grappling Policial.</strong></p>
        <p className="mt-4 font-bold">* VER MÁS EN*: 
          <Link 
            to="/curso-legion" 
            className="text-blue-600 hover:underline" 
            onClick={handleScrollToTop}
          >
            MONITOR NACIONAL GRAPPLING POLICIAL
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CursoLegionNews;
