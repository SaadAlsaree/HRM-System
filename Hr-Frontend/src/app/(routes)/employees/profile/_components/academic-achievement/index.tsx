import React from 'react';
import AcademicAchievementToolbar from './academic-achievement-toolbar';
import { Separator } from '@/components/ui/separator';
import AcademicAchievementTable from './academic-achievement-table';

type Props = {
   employeeId?: string;
};

const AcademicAchievementPage = ({ employeeId }: Props) => {
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicAchievementToolbar employeeId={employeeId} />
         </div>
         <Separator />
         <div className='w-full p-2'>
            <AcademicAchievementTable employeeId={employeeId} />
         </div>
      </div>
   );
};

export default AcademicAchievementPage;
