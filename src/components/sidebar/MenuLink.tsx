
import React from 'react';

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, children, className }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`block py-1 px-6 text-sm text-blue-600 hover:underline ${className || ''}`}
    >
      {children}
    </a>
  );
};

export default MenuLink;
