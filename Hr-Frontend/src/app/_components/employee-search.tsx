'use client';
import { Autocomplete } from '@/components/autocomplete';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

//service
import { utiliesService } from '@/services/system-settings/utilies.service';
import { useState, useCallback } from 'react';

export interface IEmployeeSearch {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   motherFullName?: string;
   jobDegreeId?: number;
   jobDegreeName?: string;
   jobCategoryId?: number;
   jobCategoryName?: string;
   jobTitleId?: number;
   jobTitleName?: string;
   jobDescriptionId?: number;
   jobDescriptionName?: string;
   directorateId?: number;
   directorateName?: string;
   balance?: number;
   subDirectorateId?: number;
   subDirectorateName?: string;
   departmentId?: number;
   departmentName?: string;
   sectionId?: number;
   sectionName?: string;
   positionId?: number;
   positionName?: string;
   unitId?: number;
   unitName?: string;
   degreeDueDate?: string;
   categoryDueDate?: string;
   medicalBalance?: number;
}

type Props = {
   onSelectUser: (user: IEmployeeSearch | null) => void;
};

const SearchByOptions = [
   { value: '0', label: 'الاسم' },
   { value: '1', label: 'أسم الام' },
   { value: '2', label: 'الرقم الوظيفي' },
   { value: '3', label: 'الرقم الأضبارة' }
];

const EmployeeSearch = ({ onSelectUser }: Props) => {
   const [searchBy, setSearchBy] = useState('0');

   const searchUsers = useCallback(async (query: string): Promise<IEmployeeSearch[]> => {
      const trimmed = query?.trim();
      if (!trimmed) return [];

      try {
         const response = await utiliesService.getTypeOfService({
            Search: trimmed,
            SearchBy: parseInt(searchBy, 10)
         });

         const data = Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.items)
            ? response.data.items
            : Array.isArray(response)
            ? response
            : [];

         return data;
      } catch (error) {
         console.error('Failed to fetch employees:', error);
         return [];
      }
   }, [searchBy]);

   // Call the parent callback when a user is selected
   const handleSelect = (user: IEmployeeSearch | null) => {
      onSelectUser(user); // This passes the selected user to the parent
   };

   return (
      <div className='w-full flex flex-row items-center gap-4'>
         <Select value={searchBy} onValueChange={setSearchBy}>
            <SelectTrigger className='w-[180px]'>
               <SelectValue placeholder='نوع البحث' />
            </SelectTrigger>
            <SelectContent>
               {SearchByOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                     {option.label}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
         <Autocomplete
            className='w-full'
            onSearch={searchUsers}
            getItemValue={(user) => user?.fullName || ''}
            renderItem={(user, isHighlighted) => (
               <div className={`flex flex-col py-1 ${isHighlighted ? 'font-bold' : ''}`}>
                  <div className='text-sm text-foreground'>{user.fullName}</div>
                  <div className='text-xs text-muted-foreground flex gap-2 items-center'>
                     <span>الرقم: {user.jobCode || '-'}</span>
                     {user.jobDegreeName && <span>| {user.jobDegreeName}</span>}
                     {user.jobTitleName && <span>| {user.jobTitleName}</span>}
                  </div>
               </div>
            )}
            onSelect={handleSelect}
            placeholder='بحث عن موظف...'
         />
      </div>
   );
};

export default EmployeeSearch;

