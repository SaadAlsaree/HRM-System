'use client';
import { Autocomplete } from '@/components/autocomplete';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

//service
import { utiliesService } from '@/services/system-settings/utilies.service';
import { useState } from 'react';

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
   const searchUsers = async (query: string): Promise<IEmployeeSearch[]> => {
      if (!query) return [];

      const response = await utiliesService.getTypeOfService({ Search: query, SearchBy: parseInt(searchBy) });
      if (!response.succeeded) {
         throw new Error('Failed to fetch users');
      }

      return response.data;
   };

   // Call the parent callback when a user is selected
   const handleSelect = (user: IEmployeeSearch | null) => {
      onSelectUser(user); // This passes the selected user to the parent
   };

   return (
      <div className='w-full flex flex-row items-center gap-4'>
         <Select value={searchBy} onValueChange={setSearchBy}>
            <SelectTrigger className='w-[180px]'>
               <SelectValue placeholder='Theme' />
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
            // items={[]}
            className='w-full'
            onSearch={searchUsers}
            getItemValue={(user) => user?.fullName || ''}
            renderItem={(user, isHighlighted) => (
               <div className={isHighlighted ? 'font-bold' : ''}>
                  <div>{user.fullName}</div>
                  <div className='text-sm text-gray-500'>{user.jobCode}</div>
               </div>
            )}
            onSelect={handleSelect}
            placeholder='بحث عن موظف...'
         />
      </div>
   );
};

export default EmployeeSearch;
