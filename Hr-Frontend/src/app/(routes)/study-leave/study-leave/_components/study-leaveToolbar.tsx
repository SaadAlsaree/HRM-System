'use client';
import React, { useEffect, useState } from 'react';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';
import StudyLeaveForm from './study-leaveForm';

interface Props {
   academicAchievement: [];
   academicField: [];
   country: [];
   studyResult: [];
   studyStatus: [];
   academicCertificateType: [];
}

function StudyLeaveToolbar({ academicAchievement, academicField, country, studyResult, studyStatus, academicCertificateType }: Props) {
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
            <div className='text-xl text-muted-foreground'>الإجازات الدراسية .</div>

            <div>
               <StudyLeaveForm
                  title='أضافة'
                  academicAchievement={academicAchievement}
                  academicField={academicField}
                  country={country}
                  studyResult={studyResult}
                  studyStatus={studyStatus}
                  academicCertificateType={academicCertificateType}
               />
            </div>
         </div>

         <div className='flex items-center justify-between w-full p-2'>
            <EmployeeSearch onSelectUser={handleUserSelect} />
         </div>
      </div>
   );
}

export default StudyLeaveToolbar;
