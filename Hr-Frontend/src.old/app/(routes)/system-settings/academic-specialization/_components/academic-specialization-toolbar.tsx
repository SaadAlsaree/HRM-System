'use client';
import React from 'react';
import AcademicSpecializationForm from './academic-specialization-form';

const AcademicSpecializationToolbar = () => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>التخصص الدراسي .</div>
            <div>
               <AcademicSpecializationForm title='أضافة' />
            </div>
         </div>
      </div>
   );
};

export default AcademicSpecializationToolbar;
