'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { utiliesService } from '@/services/system-settings/utilies.service';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useMemo, useState } from 'react';

interface EmployeeSuggestion {
   id?: string;
   Id?: string;
   employeeId?: string;
   EmployeeId?: string;
   fullName?: string;
   FullName?: string;
   jobCode?: string;
   JobCode?: string;
   lotNumber?: string;
   LotNumber?: string;
}

interface EmployeeListSearchProps {
   search: string;
   pageSize: number;
}

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 300;

const EmployeeListSearch = ({ search, pageSize }: EmployeeListSearchProps) => {
   const router = useRouter();

   const [query, setQuery] = useState(search);
   const [suggestions, setSuggestions] = useState<EmployeeSuggestion[]>([]);
   const [loading, setLoading] = useState(false);
   const [showSuggestions, setShowSuggestions] = useState(false);

   useEffect(() => {
      setQuery(search);
   }, [search]);

   useEffect(() => {
      const normalizedQuery = query.trim();

      if (normalizedQuery.length < MIN_QUERY_LENGTH) {
         setSuggestions([]);
         setLoading(false);
         return;
      }

      let canceled = false;

      const timeoutId = setTimeout(async () => {
         setLoading(true);

         try {
            const response = await utiliesService.getTypeOfService({ Search: normalizedQuery });
            const nextSuggestions = Array.isArray(response?.data) ? response.data : [];

            if (!canceled) {
               setSuggestions(nextSuggestions);
            }
         } catch {
            if (!canceled) {
               setSuggestions([]);
            }
         } finally {
            if (!canceled) {
               setLoading(false);
            }
         }
      }, DEBOUNCE_MS);

      return () => {
         canceled = true;
         clearTimeout(timeoutId);
      };
   }, [query]);

   const getDisplayName = (item: EmployeeSuggestion) => (item.fullName || item.FullName || '').trim();
   const getJobCode = (item: EmployeeSuggestion) => (item.jobCode || item.JobCode || '').trim();
   const getLotNumber = (item: EmployeeSuggestion) => (item.lotNumber || item.LotNumber || '').trim();
   const getEmployeeId = (item: EmployeeSuggestion) => (item.employeeId || item.EmployeeId || item.id || item.Id || '').trim();

   const visibleSuggestions = useMemo(() => {
      return suggestions
         .filter((item) => Boolean(getDisplayName(item) || getJobCode(item) || getLotNumber(item)))
         .slice(0, 5);
   }, [suggestions]);

   const navigateToSearch = ({ value, employeeId }: { value?: string; employeeId?: string }) => {
      const params = new URLSearchParams();
      const normalizedValue = (value || '').trim();
      const normalizedEmployeeId = (employeeId || '').trim();

      params.set('page', '1');
      params.set('PageSize', String(pageSize));

      if (normalizedEmployeeId) {
         params.set('EmployeeId', normalizedEmployeeId);
      } else if (normalizedValue) {
         params.set('search', normalizedValue);
      }

      router.push(`/employees/list?${params.toString()}`);
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setShowSuggestions(false);
      navigateToSearch({ value: query });
   };

   const handleClear = () => {
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
      navigateToSearch({});
   };

   const handleSelectSuggestion = (suggestion: EmployeeSuggestion) => {
      const selectedValue = (getDisplayName(suggestion) || getJobCode(suggestion) || getLotNumber(suggestion)).trim();
      const selectedEmployeeId = getEmployeeId(suggestion);

      if (!selectedValue && !selectedEmployeeId) {
         return;
      }

      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
      navigateToSearch({ employeeId: selectedEmployeeId, value: selectedValue });
   };

   return (
      <form onSubmit={handleSubmit} className='relative flex w-full flex-wrap items-center gap-2'>
         <div className='relative w-full md:w-[420px]'>
            <Input
               value={query}
               onChange={(event) => {
                  setQuery(event.target.value);
                  setShowSuggestions(true);
               }}
               onFocus={() => setShowSuggestions(true)}
               onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
               placeholder='بحث بالاسم الكامل، الرقم الوظيفي، رقم الاضبارة أو الرقم الاحصائي'
               className='w-full'
            />

            {loading && (
               <div className='pointer-events-none absolute left-3 top-2.5'>
                  <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
               </div>
            )}

            {showSuggestions && visibleSuggestions.length > 0 && (
               <ul className='absolute z-30 mt-1 w-full overflow-hidden rounded-md border bg-white dark:bg-gray-900 shadow-lg'>
                  {visibleSuggestions.map((suggestion, index) => {
                     const key = getEmployeeId(suggestion) || `${getDisplayName(suggestion) || 'employee'}-${index}`;
                     const displayName = getDisplayName(suggestion);
                     const jobCode = getJobCode(suggestion);
                     const lotNumber = getLotNumber(suggestion);

                     return (
                        <li
                           key={key}
                           className='cursor-pointer border-b px-3 py-2 text-sm last:border-b-0 hover:bg-muted'
                           onMouseDown={(event) => {
                              event.preventDefault();
                              handleSelectSuggestion(suggestion);
                           }}
                        >
                           <div className='font-medium'>{displayName || jobCode || lotNumber}</div>
                           <div className='text-xs text-muted-foreground'>
                              {jobCode ? `الرقم الوظيفي: ${jobCode}` : ''}
                              {jobCode && lotNumber ? ' - ' : ''}
                              {lotNumber ? `رقم الاضبارة: ${lotNumber}` : ''}
                           </div>
                        </li>
                     );
                  })}
               </ul>
            )}
         </div>

       
         <Button type='button' variant='ghost' className='btn-sm' onClick={handleClear}>
            مسح
         </Button>
      </form>
   );
};

export default EmployeeListSearch;
