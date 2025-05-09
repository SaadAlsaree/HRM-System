import React from 'react';
import StudyTypeForm from './study-type-form';

const StudyTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الدراسة .</div>
               <div>
                  <StudyTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudyTypeToolbar;
