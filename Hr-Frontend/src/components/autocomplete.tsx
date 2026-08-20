'use client';

import React, { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, X } from 'lucide-react';

interface AutocompleteProps<T> {
   onSearch: (query: string) => Promise<T[]>;
   getItemValue: (item: T) => string;
   renderItem: (item: T, isHighlighted: boolean) => React.ReactNode;
   onSelect: (item: T | null) => void;
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
   const onSearchRef = useRef(onSearch);
   const justSelectedRef = useRef(false);

   useEffect(() => {
      onSearchRef.current = onSearch;
   }, [onSearch]);

   useEffect(() => {
      if (justSelectedRef.current) {
         justSelectedRef.current = false;
         return;
      }

      const trimmed = query.trim();
      if (!trimmed) {
         setSuggestions([]);
         setLoading(false);
         return;
      }

      let canceled = false;
      const handler = setTimeout(async () => {
         setLoading(true);
         try {
            const results = await onSearchRef.current(trimmed);
            if (!canceled) {
               setSuggestions(results || []);
               setShowSuggestions(true);
            }
         } catch (error) {
            console.error('Search error:', error);
            if (!canceled) {
               setSuggestions([]);
            }
         } finally {
            if (!canceled) {
               setLoading(false);
            }
         }
      }, 300); // 300ms debounce

      return () => {
         canceled = true;
         clearTimeout(handler);
      };
   }, [query]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setSelectedIndex(-1);
      setShowSuggestions(true);
      if (!value.trim()) {
         onSelect(null);
      }
   };

   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
         e.preventDefault();
         setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
         e.preventDefault();
         setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && suggestions[selectedIndex]) {
         e.preventDefault();
         handleSuggestionClick(suggestions[selectedIndex]);
      } else if (e.key === 'Escape') {
         setShowSuggestions(false);
      }
   };

   const handleSuggestionClick = (item: T) => {
      justSelectedRef.current = true;
      onSelect(item);
      setQuery(getItemValue(item));
      setShowSuggestions(false);
      setSuggestions([]);
   };

   const handleClear = () => {
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
      onSelect(null);
      inputRef.current?.focus();
   };

   return (
      <div className={`relative ${className}`}>
         <div className='relative flex items-center'>
            <Input
               ref={inputRef}
               type='text'
               value={query}
               onChange={handleInputChange}
               onKeyDown={handleKeyDown}
               onFocus={() => {
                  if (suggestions.length > 0) setShowSuggestions(true);
               }}
               onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
               placeholder={placeholder}
               className='w-full pl-8 pr-3'
               aria-autocomplete='list'
               aria-controls='search-suggestions'
               aria-expanded={showSuggestions}
            />
            {loading ? (
               <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                  <Loader2 className='h-4 w-4 animate-spin text-primary' />
               </div>
            ) : query ? (
               <button
                  type='button'
                  onClick={handleClear}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1'
               >
                  <X className='h-4 w-4' />
               </button>
            ) : null}
         </div>
         {showSuggestions && suggestions.length > 0 && (
            <div
               onMouseDown={(e) => e.preventDefault()}
               className='absolute z-50 w-full mt-1 bg-popover text-popover-foreground border rounded-md shadow-lg max-h-60 overflow-hidden'
            >
               <ScrollArea className='max-h-60'>
                  <ul id='search-suggestions' className='p-1' role='listbox'>
                     {suggestions.map((item, index) => {
                        const val = getItemValue(item);
                        const key = (item as any)?.id || (item as any)?.employeeId || `${val}-${index}`;
                        return (
                           <li
                              key={key}
                              role='option'
                              aria-selected={index === selectedIndex}
                              className={`px-3 py-2 text-sm rounded-sm cursor-pointer select-none transition-colors ${
                                 index === selectedIndex ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
                              }`}
                              onClick={() => handleSuggestionClick(item)}
                           >
                              {renderItem(item, index === selectedIndex)}
                           </li>
                        );
                     })}
                  </ul>
               </ScrollArea>
            </div>
         )}
      </div>
   );
}
