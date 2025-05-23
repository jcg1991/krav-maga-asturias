
import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  children: React.ReactNode;
  title: string;
  linkPath?: string;
  linkText?: string;
  id?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ children, title, linkPath, linkText, id }) => {
  return (
    <div id={id} className="border border-gray-200 rounded-lg shadow-sm p-6 mb-8 bg-white">
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      
      {children}
      
      {linkPath && linkText && (
        <div className="mt-6 text-center">
          <Link 
            to={linkPath} 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
