
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarNavLinkProps {
  to: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  scrollToTop?: boolean;
  onClick?: () => void;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
  to,
  children,
  id,
  className = '',
  scrollToTop = false,
  onClick
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = () => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={to}
      id={id}
      onClick={handleClick}
      className={`block py-2 px-4 text-sm font-medium hover:bg-gray-100 ${
        isActive ? 'bg-gray-100 text-primary' : 'text-gray-700'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default SidebarNavLink;
