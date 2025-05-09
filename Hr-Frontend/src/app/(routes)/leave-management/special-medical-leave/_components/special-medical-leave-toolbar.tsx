'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import SpecialMedicalLeaveForm from './special-medical-leave-form';

const SpecialMedicalLeaveToolbar = () => {
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
            <div className='flex items-center gap-2'>
               <h2 className='text-xl text-muted-foreground'>الإجازات المرضية الخاصة</h2>
            </div>
            <div className='flex items-center gap-2'>
               <SpecialMedicalLeaveForm title='إضافة' />
            </div>
         </div>
         <div className='flex flex-row gap-2 items-center'>
            <EmployeeSearch onSelectUser={handleUserSelect} />
         </div>
      </div>
   );
};

export default SpecialMedicalLeaveToolbar;
