
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const PaginationSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPages = 10;
  
  const isCoursesPage = location.pathname.includes('/cursos');
  const basePath = isCoursesPage ? '/cursos/page/' : '/page/';
  const homePath = isCoursesPage ? '/cursos' : '/';
  
  // Determine current page from path
  let currentPage = 1;
  if (location.pathname.includes('/page/')) {
    const pageMatch = location.pathname.match(/\/page\/(\d+)/);
    if (pageMatch && pageMatch[1]) {
      currentPage = parseInt(pageMatch[1]);
    }
  }
  
  const handlePageChange = (page: number) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (page === 1) {
      // Navigate to main page (either Index or Cursos)
      navigate(homePath);
      return;
    }
    // Navigate to the additional pages
    navigate(`${basePath}${page}`);
  };

  return (
    <div className="w-full mt-8 bg-gray-100 rounded-lg shadow-sm p-4">
      <Pagination>
        <PaginationContent>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink 
                isActive={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)} 
              className="cursor-pointer" 
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationSection;
