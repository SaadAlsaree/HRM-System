'use client';

import React from 'react';
import AcademicAchievementForm from './academic-achievement-form';
import { useParams } from 'next/navigation';

type Props = {
   employeeId?: string;
};

const AcademicAchievementToolbar = ({ employeeId }: Props) => {
   const params = useParams();
   const effectiveEmployeeId = employeeId || (params?.id as string) || '';

   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المعلومات الدراسية .</div>
            <div>
               <AcademicAchievementForm title='أضافة' employeeId={effectiveEmployeeId} />
            </div>
         </div>
      </div>
   );
};

export default AcademicAchievementToolbar;