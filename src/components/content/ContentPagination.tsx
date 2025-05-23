
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ContentPaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const ContentPagination: React.FC<ContentPaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange
}) => {
  const handleClick = (page: number) => {
    // Scroll to top before changing the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handlePageChange(page);
  };

  return (
    <div className="w-full mt-8 bg-gray-100 rounded-lg shadow-sm p-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : 1)} 
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
            />
          </PaginationItem>
          
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink 
                isActive={i + 1 === currentPage}
                onClick={() => handleClick(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => handleClick(currentPage < totalPages ? currentPage + 1 : currentPage)} 
              className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ContentPagination;
