'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import NormalLeaveForm from './normal-leave-form';

const NormalLeaveToolbar = () => {
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
      <div className='flex flex-col w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الأجازات الاعتيادية .</div>

            <div>
               <NormalLeaveForm title='إضافة' />
            </div>
         </div>
         <div className='flex items-center justify-between w-full p-2'>
            <EmployeeSearch onSelectUser={handleUserSelect} />
         </div>
      </div>
   );
};

export default NormalLeaveToolbar;
