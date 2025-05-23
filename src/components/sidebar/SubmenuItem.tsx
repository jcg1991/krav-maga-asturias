
import React from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface SubmenuItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SubmenuItem: React.FC<SubmenuItemProps> = ({ 
  title, 
  isOpen, 
  onToggle, 
  children 
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100 rounded transition-colors"
        aria-expanded={isOpen}
      >
        <span className="truncate pr-2">{title}</span>
        <span className="transition-transform duration-200 flex-shrink-0">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SubmenuItem;
