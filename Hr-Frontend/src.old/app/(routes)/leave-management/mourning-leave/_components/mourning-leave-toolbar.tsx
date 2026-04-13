'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import MourningLeaveForm from './mourning-leave-form';

const MourningLeaveToolbar = () => {
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const router = useRouter();
   const searchParams = useSearchParams();

   // Function to handle the selected user
   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   // Update the URL search parameters whenever the selected user changes
   useEffect(() => {
      if (selectedUser?.employeeId) {
         const params = new URLSearchParams(searchParams);
         params.set('employeeId', selectedUser.employeeId);
         router.push(`?${params.toString()}`);
      }
   }, [selectedUser, searchParams, router]);



   return (
      <div className='flex flex-col w-full p-2 gap-2'>
         <div className='flex flex-row justify-between items-center'>
            <div className='text-xl text-muted-foreground'>إجازة العدة</div>
            <div className='flex flex-row gap-2'>
               <MourningLeaveForm title='إضافة'  />
               {/* <Button variant='outline' onClick={handleExport} className='flex gap-1'>
                  <FileText className='h-4 w-4' />
                  تصدير
               </Button>
               <Button variant='outline' onClick={handleFilter} className='flex gap-1'>
                  <Filter className='h-4 w-4' />
                  تصفية
               </Button> */}
            </div>
         </div>
         <div className='flex flex-row gap-2 items-center'>
            <EmployeeSearch onSelectUser={handleUserSelect} />
         </div>
      </div>
   );
};

export default React.memo(MourningLeaveToolbar);
