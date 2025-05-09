import React from 'react';
import GovernorateForm from './governorate-form';

const GovernorateToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>المحافظة .</div>
               <div>
                  <GovernorateForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default GovernorateToolbar;
