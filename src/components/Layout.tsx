
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        
        {/* Sidebar */}
        <div 
          className={`fixed md:relative inset-y-0 left-0 z-40 w-64 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out h-screen md:h-auto`}
        >
          <Sidebar onCloseMobile={() => setSidebarOpen(false)} />
        </div>
        
        <main className="flex-1 p-6 w-full overflow-x-hidden">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
