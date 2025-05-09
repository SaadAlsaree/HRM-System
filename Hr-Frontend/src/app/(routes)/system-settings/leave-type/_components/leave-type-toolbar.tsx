import React from 'react';
import LeaveTypeForm from './leave-type-form';

const LeaveTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الأجازة .</div>
               <div>
                  <LeaveTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default LeaveTypeToolbar;
