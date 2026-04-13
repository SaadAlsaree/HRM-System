import React from 'react';
import AcademicAchievementForm from './academic-achievement-form';

type Props = {
   employeeId?: string;
};

const AcademicAchievementToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المعلومات الدراسية .</div>
            <div>
               <AcademicAchievementForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default AcademicAchievementToolbar;