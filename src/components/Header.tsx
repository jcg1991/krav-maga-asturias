import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative z-20">
      <div className="header-image h-32 md:h-64 w-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/uploads/a0ddebfe-1608-436d-b843-a723970338f7.png')" }}></div>
      <nav className="bg-primary shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="md:hidden">
              <button 
                onClick={toggleSidebar} 
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 px-3 py-1 bg-primary-foreground/10 rounded"
                aria-label="Open sidebar menu"
              >
                INFO
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center justify-center space-x-4">
                <Link to="/" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  INICIO
                </Link>
                <Link to="/informate" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  INFORMATE
                </Link>
                <Link to="/krav-maga" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  KRAV MAGA
                </Link>
                <Link to="/clases" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CLASES
                </Link>
                <Link to="/areas" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  AREAS
                </Link>
                <Link to="/tecnicas" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  TECNICAS
                </Link>
                <Link to="/cursos" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CURSOS
                </Link>
                <Link to="/calendario" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CALENDARIO
                </Link>
                <Link to="/contacto" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  CONTACTO
                </Link>
                <Link to="/enlaces" className="px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md">
                  ENLACES
                </Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 px-3 py-1 bg-primary-foreground/10 rounded"
                aria-label="Open navigation menu"
              >
                MENU
              </button>
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-primary border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  INICIO
                </Link>
                <Link to="/informate" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  INFORMATE
                </Link>
                <Link to="/krav-maga" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  KRAV MAGA
                </Link>
                <Link to="/clases" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  CLASES
                </Link>
                <Link to="/areas" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  AREAS
                </Link>
                <Link to="/tecnicas" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  TECNICAS
                </Link>
                <Link to="/cursos" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  CURSOS
                </Link>
                <Link to="/calendario" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  CALENDARIO
                </Link>
                <Link to="/contacto" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  CONTACTO
                </Link>
                <Link to="/enlaces" className="block px-3 py-2 text-white font-medium hover:bg-primary-foreground/10 rounded-md" onClick={toggleMobileMenu}>
                  ENLACES
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
