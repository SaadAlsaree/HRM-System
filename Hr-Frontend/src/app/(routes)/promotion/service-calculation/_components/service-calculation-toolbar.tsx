'use client';
import React, { useEffect, useState } from 'react';
import ServiceCalculationForm from './service-calculation-form';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';
import { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
import { IJobTitle } from '@/app/(routes)/system-settings/job-title/page';


type Props ={
   jobDegreesList: IJobDegree[]
   jobTitlesList: IJobTitle[]
}
const ServiceCalculationToolbar = ({jobDegreesList, jobTitlesList}:Props) => {
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
           <div className='text-xl text-muted-foreground'>احتساب خدمة.</div>

           <div>
              <ServiceCalculationForm title='أضافة' jobDegreesList={jobDegreesList} jobTitlesList={jobTitlesList}/>
           </div>
        </div>

        <div className='flex items-center justify-between w-full p-2'>
           <EmployeeSearch onSelectUser={handleUserSelect} />
        </div>
     </div>
    );
};

export default ServiceCalculationToolbar;