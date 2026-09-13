'use client';

import React from 'react';
import AcademicAchievementToolbar from './academic-achievement-toolbar';
import { Separator } from '@/components/ui/separator';
import AcademicAchievementTable from './academic-achievement-table';
import { useParams } from 'next/navigation';

type Props = {
   employeeId?: string;
};

const AcademicAchievementPage = ({ employeeId }: Props) => {
   const params = useParams();
   const effectiveEmployeeId = employeeId || (params?.id as string) || '';

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicAchievementToolbar employeeId={effectiveEmployeeId} />
         </div>
         <Separator />
         <div className='w-full p-2'>
            <AcademicAchievementTable employeeId={effectiveEmployeeId} />
         </div>
      </div>
   );
};

export default AcademicAchievementPage;
