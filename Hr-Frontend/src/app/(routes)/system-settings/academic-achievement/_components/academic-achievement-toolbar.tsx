'use client';
import React from 'react';
import AcademicAchievementForm from './academic-achievement-form';

type Props = {
   jobDegreeList: [];
};
const AcademicAchievementToolbar = ({ jobDegreeList }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>التحصيل الدراسي .</div>
            <div>
               <AcademicAchievementForm title='أضافة' jobDegreeList={jobDegreeList} />
            </div>
         </div>
      </div>
   );
};

export default AcademicAchievementToolbar;
