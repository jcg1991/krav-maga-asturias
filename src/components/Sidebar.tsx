
import React, { useState } from 'react';
import SearchBar from './sidebar/SearchBar';
import SubmenuItem from './sidebar/SubmenuItem';
import MenuLink from './sidebar/MenuLink';
import SidebarNavLink from './sidebar/SidebarNavLink';
import { X } from "lucide-react";

interface SidebarProps {
  onCloseMobile?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  // Track multiple submenus with an object - initialize all as false (closed)
  const [openSubmenus, setOpenSubmenus] = useState<{
    [key: string]: boolean;
  }>({
    "programa-nacional": false,
    "programa-tecnico": false,
    "katas": false
  });
  
  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };
  
  return (
    <aside className="w-full md:w-64 bg-gray-50 border-r min-h-full md:min-h-screen max-h-screen overflow-y-auto flex flex-col">
      {/* Mobile header with close button */}
      <div className="flex justify-between items-center md:hidden px-4 py-3 border-b bg-primary text-white sticky top-0 z-10">
        <span className="font-medium">Menú</span>
        <button 
          onClick={onCloseMobile}
          className="p-2 rounded-md hover:bg-primary-foreground/10"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="px-4 py-5">
        {/* Logo encima del buscador */}
        <div className="flex justify-center mb-4">
          <img 
            src="/uploads/1f06ec5f-c163-4470-baca-abdb5a7bf145.png" 
            alt="Logo Internacional Police Association" 
            className="w-32 md:w-40 h-auto"
          />
        </div>
        
        {/* Search bar component */}
        <SearchBar />
      </div>
      
      <div className="mt-2 flex-1 overflow-y-auto">
        <div className="px-4 py-2 text-sm font-semibold text-gray-600">CURSOS</div>
        
        {/* PROGRAMA NACIONAL D. P. POLICIAL */}
        <SubmenuItem 
          title="PROGRAMA NACIONAL D. P. POLICIAL"
          isOpen={openSubmenus["programa-nacional"]}
          onToggle={() => toggleSubmenu("programa-nacional")}
        >
          {/* PROGRAMA TECNICO */}
          <div className="ml-4 border-l-2 border-gray-200">
            <SubmenuItem
              title="PROGRAMA TÉCNICO"
              isOpen={openSubmenus["programa-tecnico"]}
              onToggle={() => toggleSubmenu("programa-tecnico")}
            >
              <div className="pl-4">
                <div className="py-1 px-4 text-sm font-medium text-gray-700">HASTA C.N. 5º DAN</div>
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/DPPCN1DANDPPCOMPLETO.pdf">
                  Descargar 1er DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-2-DAN-DPP.pdf">
                  Descargar 2º DAN
                </MenuLink>
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/PROGRAMA3DANDPP.pdf">
                  Descargar 3er DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-4o-DAN-BPE.pdf">
                  Descargar 4º DAN
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/PROGRAMA-5o-DAN-DPP.pdf">
                  Descargar 5º DAN
                </MenuLink>
              </div>
            </SubmenuItem>
          </div>
          
          {/* KATAS DE DEFENSA */}
          <div className="ml-4 border-l-2 border-gray-200">
            <SubmenuItem
              title="KATAS DE DEFENSA PERSONAL POLICIAL"
              isOpen={openSubmenus["katas"]}
              onToggle={() => toggleSubmenu("katas")}
            >
              <div className="pl-4">
                <MenuLink href="http://bootcampspain.es/wp-content/uploads/1KATADPP.pdf">
                  Descargar 1era KATA
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/2a-KATA-DPP.pdf">
                  Descargar 2ª KATA
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/3a-KATA-DPP..pdf">
                  Descargar 3era KATA
                </MenuLink>
                <MenuLink href="https://defensapolicial.es/wp-content/uploads/4a-KATA-DPP..pdf">
                  Descargar 4ª KATA
                </MenuLink>
              </div>
            </SubmenuItem>
          </div>
        </SubmenuItem>
        
        {/* Krav Maga Boot Camp Image */}
        <div className="px-4 py-3">
          <img 
            src="/uploads/f9d6ae12-56ee-4019-a1ae-24e414ad4504.png" 
            alt="Krav Maga Boot Camp" 
            className="w-full h-auto rounded-md shadow-sm" 
          />
        </div>
        
        {/* Other Courses - using onClick for mobile to close sidebar when navigating */}
        <SidebarNavLink to="/cursos" scrollToTop={true} onClick={onCloseMobile}>
          CURSO APERTURA INTERVENCIONES EN INMUEBLES
        </SidebarNavLink>
        
        <SidebarNavLink to="/curso-inmuebles-urbano" id="curso-inmuebles-urbano" scrollToTop={true} onClick={onCloseMobile}>
          CURSO INTERVENCIÓN EN INMUEBLES Y ZONAS URBANIZADAS
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-autoproteccion" onClick={onCloseMobile}>
          CURSO AUTOPROTECCIÓN CIVILES Y DEFENSA DEL HOGAR
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos-especiales" onClick={onCloseMobile}>
          CURSOS ESPECIALES 2025
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-legion" className="text-xs" onClick={onCloseMobile}>
          CURSO INTERVENCIÓN POLICIAL X BANDERA MILLAN ASTRAY – LEGIÓN ESPAÑOLA
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-baston-gala" className="text-xs" onClick={onCloseMobile}>
          CURSO BASTÓN POLICIAL Y CENA GALA 2024
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-contraterrorismo" className="text-xs" onClick={onCloseMobile}>
          CURSO CONTRATERRORISMO ISRAELÍ
        </SidebarNavLink>
        
        <SidebarNavLink to="/cursos" id="curso-entrenador-kravmaga" className="text-xs" onClick={onCloseMobile}>
          CURSO ENTRENADOR NACIONAL KRAV MAGA
        </SidebarNavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
