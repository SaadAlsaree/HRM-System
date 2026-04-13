'use client';
import React, { useEffect, useState } from 'react';
import AffiliatesToOrgForm from './to-org-form';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';

const AffiliatesToOrgToolbar = () => {
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
       const router = useRouter();
       const searchParams = useSearchParams();
    const handleUserSelect = (user: IEmployeeSearch | null) => {
         setSelectedUser(user);
      };
   
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
           <div className='text-xl text-muted-foreground'>المنسبين الى الجهاز.</div>

           <div>
                    <AffiliatesToOrgForm title='إضافة' />
                    </div>
        </div>

        <div className='flex items-center justify-between w-full p-2'>
           <EmployeeSearch onSelectUser={handleUserSelect} />
        </div>
     </div>
    );
};

export default AffiliatesToOrgToolbar;