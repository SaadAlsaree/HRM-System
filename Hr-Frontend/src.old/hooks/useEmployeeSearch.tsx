import { useState, useEffect, useCallback } from 'react';
import { employeeService } from '@/services/Employee/employee.service';

export const useEmployeeSearch = (delay: number = 300) => {
   const [query, setQuery] = useState('');
   const [suggestions, setSuggestions] = useState<string[]>([]);
   const [loading, setLoading] = useState(false);

   const debouncedSearch = useCallback(async (searchQuery: string) => {
      setLoading(true);
      const results = await employeeService.getEmployees({ EmployeeId: searchQuery });
      setSuggestions(results);
      setLoading(false);
   }, []);

   useEffect(() => {
      if (query) {
         const handler = setTimeout(() => {
            debouncedSearch(query);
         }, delay);

         return () => {
            clearTimeout(handler);
         };
      } else {
         setSuggestions([]);
      }
   }, [query, delay, debouncedSearch]);

   return { query, setQuery, suggestions, loading };
};
