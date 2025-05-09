'use client';
import React from 'react';
import MaritalStatusForm from './marital-status-form';

type Props = {
   employeeId: string;
};

const MaritalStatusToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الحالة الاجتماعية</div>
            <div>
               <MaritalStatusForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default MaritalStatusToolbar;
