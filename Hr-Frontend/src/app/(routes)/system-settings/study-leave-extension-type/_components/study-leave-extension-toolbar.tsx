import React from 'react';
import StudyLeaveExtensionForm from './study-leave-extension-form';

const StudyLeaveExtensionToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع التمديد الدراسي .</div>
               <div>
                  <StudyLeaveExtensionForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudyLeaveExtensionToolbar;
