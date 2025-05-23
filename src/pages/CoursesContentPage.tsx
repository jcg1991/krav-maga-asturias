
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Page2Content from '../components/content/Page2Content';
import Page3Content from '../components/content/Page3Content';
import Page4Content from '../components/content/Page4Content';
import GenericContentPlaceholder from '../components/content/GenericContentPlaceholder';
import ContentPagination from '../components/content/ContentPagination';

const CoursesContentPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const totalPages = 10;
  const currentPage = parseInt(pageNumber || '1');
  
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (page === 1) {
      navigate('/cursos');
    } else {
      navigate(`/cursos/page/${page}`);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">
          Contenido Adicional de Cursos - Página {pageNumber}
        </h1>
        
        {currentPage === 2 ? (
          <Page2Content />
        ) : currentPage === 3 ? (
          <Page3Content />
        ) : currentPage === 4 ? (
          <Page4Content />
        ) : (
          <GenericContentPlaceholder pageNumber={pageNumber || '1'} />
        )}
        
        {/* Paginación */}
        <ContentPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          handlePageChange={handlePageChange} 
        />
      </div>
    </Layout>
  );
};

export default CoursesContentPage;
