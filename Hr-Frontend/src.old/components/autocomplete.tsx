'use client';

import React, { useState, useRef, KeyboardEvent, useCallback, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2 } from 'lucide-react';

interface AutocompleteProps<T> {
   onSearch: (query: string) => Promise<T[]>;
   getItemValue: (item: T) => string;
   renderItem: (item: T, isHighlighted: boolean) => React.ReactNode;
   onSelect: (item: T) => void;
   placeholder?: string;
   className?: string;
}

export function Autocomplete<T>({
   onSearch,
   getItemValue,
   renderItem,
   onSelect,
   placeholder = 'Search...',
   className = ''
}: AutocompleteProps<T>) {
   const [query, setQuery] = useState('');
   const [suggestions, setSuggestions] = useState<T[]>([]);
   const [selectedIndex, setSelectedIndex] = useState(-1);
   const [loading, setLoading] = useState(false);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   const debouncedSearch = useCallback(
      async (searchQuery: string) => {
         setLoading(true);
         try {
            const results = await onSearch(searchQuery);
            setSuggestions(results);
         } catch (error) {
            console.error('Search error:', error);
            setSuggestions([]);
         } finally {
            setLoading(false);
         }
      },
      [onSearch]
   );

   useEffect(() => {
      const handler = setTimeout(() => {
         if (query) {
            debouncedSearch(query);
         } else {
            setSuggestions([]);
         }
      }, 300); // 300ms debounce

      return () => {
         clearTimeout(handler);
      };
   }, [query, debouncedSearch]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
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
         onSelect(suggestions[selectedIndex]);
         setShowSuggestions(false);
         inputRef.current?.blur();
      } else if (e.key === 'Escape') {
         setShowSuggestions(false);
      }
   };

   const handleSuggestionClick = (item: T) => {
      onSelect(item);
      setQuery(getItemValue(item));
      setShowSuggestions(false);
      inputRef.current?.focus();
   };

   return (
      <div className={`relative ${className}`}>
         <Input
            ref={inputRef}
            type='text'
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder={placeholder}
            className='w-full'
            aria-autocomplete='list'
            aria-controls='search-suggestions'
            aria-expanded={showSuggestions}
         />
         {loading && (
            <div className='absolute left-3 top-2.5'>
               <Loader2 className='h-5 w-5 animate-spin text-blue-500' />
            </div>
         )}
         {showSuggestions && suggestions.length > 0 && (
            <ScrollArea className='absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60'>
               <ul id='search-suggestions' className='py-2' role='listbox'>
                  {suggestions.map((item, index) => (
                     <li
                        key={getItemValue(item)}
                        role='option'
                        aria-selected={index === selectedIndex}
                        className={`px-4 py-2 cursor-pointer ${index === selectedIndex ? 'bg-accent' : 'hover:bg-accent/50'}`}
                        onClick={() => handleSuggestionClick(item)}
                     >
                        {renderItem(item, index === selectedIndex)}
                     </li>
                  ))}
               </ul>
            </ScrollArea>
         )}
      </div>
   );
}
