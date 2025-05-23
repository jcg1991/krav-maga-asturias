
import React from 'react';

interface GenericContentPlaceholderProps {
  pageNumber: string | number;
}

const GenericContentPlaceholder: React.FC<GenericContentPlaceholderProps> = ({ pageNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Contenido adicional - Página {pageNumber}</h2>
      <p className="mb-4">
        Esta es la página {pageNumber} del contenido adicional. Aquí puedes añadir más contenido según necesites.
      </p>
      
      {/* Área para subir y mostrar contenido adicional */}
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 mb-6">
        <p className="text-center text-gray-500">
          Espacio para contenido adicional - Página {pageNumber}
        </p>
      </div>
    </div>
  );
};

export default GenericContentPlaceholder;
