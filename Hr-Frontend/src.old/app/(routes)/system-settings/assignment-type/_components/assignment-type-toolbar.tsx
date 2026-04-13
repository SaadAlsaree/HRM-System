import React from 'react';
import AssignmentTypeForm from './assignment-type-form';

const AssignmentTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع التكليف .</div>
               <div>
                  <AssignmentTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AssignmentTypeToolbar;
