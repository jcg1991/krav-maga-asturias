
import React, { useRef, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // Reference to store the highlighted elements
  const highlightedElementsRef = useRef<HTMLElement[]>([]);
  
  // Function to remove highlights
  const removeHighlights = () => {
    highlightedElementsRef.current.forEach(highlight => {
      const parent = highlight.parentNode;
      if (parent) {
        const text = highlight.textContent || '';
        const textNode = document.createTextNode(text);
        parent.replaceChild(textNode, highlight);
      }
    });
    highlightedElementsRef.current = [];
  };
  
  // Watch for changes to searchTerm and clear highlights when it's empty
  useEffect(() => {
    if (searchTerm === '') {
      removeHighlights();
    }
  }, [searchTerm]);
  
  // Handler for cleaning search text
  const handleClearSearch = () => {
    setSearchTerm('');
    removeHighlights();
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    removeHighlights();
    
    if (!searchTerm.trim()) return;
    
    const searchText = searchTerm.toLowerCase();
    
    // Search in page content
    const textNodes: Node[] = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );
    
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent && node.textContent.toLowerCase().includes(searchText)) {
        textNodes.push(node);
      }
    }
    
    if (textNodes.length === 0) {
      toast({
        title: "No se encontraron resultados",
        description: `No se encontró "${searchTerm}" en la página.`,
      });
      return;
    }
    
    // Create highlights
    const newHighlights: HTMLElement[] = [];
    
    textNodes.forEach(textNode => {
      const text = textNode.textContent || '';
      const parent = textNode.parentNode;
      
      if (parent && text.toLowerCase().includes(searchText)) {
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        const regex = new RegExp(searchText, 'gi');
        let match;
        
        while ((match = regex.exec(text)) !== null) {
          // Text before match
          if (match.index > lastIndex) {
            fragment.appendChild(
              document.createTextNode(text.substring(lastIndex, match.index))
            );
          }
          
          // Highlighted text
          const highlightSpan = document.createElement('span');
          highlightSpan.className = 'bg-yellow-300';
          highlightSpan.textContent = match[0];
          fragment.appendChild(highlightSpan);
          newHighlights.push(highlightSpan);
          
          lastIndex = regex.lastIndex;
        }
        
        // Text after the last match
        if (lastIndex < text.length) {
          fragment.appendChild(
            document.createTextNode(text.substring(lastIndex))
          );
        }
        
        // Replace original text node with the fragment
        parent.replaceChild(fragment, textNode);
      }
    });
    
    // Save references to the highlights
    highlightedElementsRef.current = newHighlights;
    
    // Scroll to the first match
    if (newHighlights.length > 0) {
      newHighlights[0].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };
  
  // Create a separate button click handler that doesn't trigger form submission
  const handleSearchButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSearch(e as unknown as React.FormEvent);
  };
  
  return (
    <form onSubmit={handleSearch} className={`relative ${className || ''}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Buscar..."
        className="pl-10 pr-16 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button 
        type="button" 
        variant="ghost"
        className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-primary hover:text-primary-dark"
        onClick={handleSearchButtonClick}
      >
        Buscar
      </Button>
    </form>
  );
};

export default SearchBar;
