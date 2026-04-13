import React from 'react';
import StudyStatusForm from './study-status-form';

const StudyStatusToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'> الموقف الدراسي .</div>
               <div>
                  <StudyStatusForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudyStatusToolbar;
