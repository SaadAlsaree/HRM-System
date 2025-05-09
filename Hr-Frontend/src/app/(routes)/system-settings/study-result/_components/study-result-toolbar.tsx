import React from 'react';
import StudyResultForm from './study-result-form';

const StudyResultToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نتيجة الدراسة .</div>
               <div>
                  <StudyResultForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudyResultToolbar;
