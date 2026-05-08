'use client';
import React, { useState } from 'react';
import PenaltiesForm from './penalties-form';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const PenaltiesToolbar = () => {
   const [searchKey, setSearchKey] = useState(0);
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const navigateWithParams = (params: URLSearchParams) => {
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
   };

   const clearFilter = () => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('employeeId');
      params.delete('EmployeeId');
      params.set('page', '1');
      setSearchKey((prev) => prev + 1);
      navigateWithParams(params);
   };

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      if (!user?.employeeId) return;

      const params = new URLSearchParams(searchParams.toString());
      params.set('employeeId', user.employeeId);
      params.delete('EmployeeId');
      params.set('page', '1');
      navigateWithParams(params);
   };

   const hasEmployeeFilter = Boolean(searchParams.get('employeeId') || searchParams.get('EmployeeId'));

   return (
      <div className='flex flex-col w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>العقوبات .</div>

            <div>
               <PenaltiesForm title='أضافة' />
            </div>
         </div>

         <div className='flex items-center justify-between w-full p-2 gap-2'>
            <EmployeeSearch key={searchKey} onSelectUser={handleUserSelect} />
            {hasEmployeeFilter && (
               <Button type='button' variant='outline' onClick={clearFilter}>
                  <X className='h-4 w-4 ml-1' />
                  مسح الفلتر
               </Button>
            )}
         </div>
      </div>
   );
};

export default PenaltiesToolbar;
