import React, { useState, useRef, KeyboardEvent } from 'react';
import { useEmployeeSearch } from '@/hooks/useEmployeeSearch';
import { Input } from '@/components/ui/input';

export const Autocomplete: React.FC = () => {
   const { query, setQuery, suggestions, loading } = useEmployeeSearch();
   const [selectedIndex, setSelectedIndex] = useState(-1);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);
   const listRef = useRef<HTMLUListElement>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setSelectedIndex(-1);
      setShowSuggestions(true);
   };

   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
         e.preventDefault();
         setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
         e.preventDefault();
         setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
         setQuery(suggestions[selectedIndex]);
         setShowSuggestions(false);
         inputRef.current?.blur();
      } else if (e.key === 'Escape') {
         setShowSuggestions(false);
      }
   };

   const handleSuggestionClick = (suggestion: string) => {
      setQuery(suggestion);
      setShowSuggestions(false);
      inputRef.current?.focus();
   };

   return (
      <div className='relative w-full max-w-md mx-auto'>
         <Input
            ref={inputRef}
            type='text'
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder='Search...'
            className='w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            aria-autocomplete='list'
            aria-controls='search-suggestions'
            aria-expanded={showSuggestions}
         />
         {loading && (
            <div className='absolute right-3 top-2.5'>
               <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-600'></div>
            </div>
         )}
         {showSuggestions && suggestions.length > 0 && (
            <ul
               ref={listRef}
               id='search-suggestions'
               className='absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto'
               role='listbox'
            >
               {suggestions.map((suggestion: string, index: number) => (
                  <li
                     key={suggestion}
                     role='option'
                     aria-selected={index === selectedIndex}
                     className={`px-4 py-2 cursor-pointer ${index === selectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                     onClick={() => handleSuggestionClick(suggestion)}
                  >
                     {suggestion}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};
