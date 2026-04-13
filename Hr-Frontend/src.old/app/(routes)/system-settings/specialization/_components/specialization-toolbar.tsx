import React from 'react';
import SpecializationForm from './specialization-form';

const SpecializationToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>التخصص الدقيق .</div>
               <div>
                  <SpecializationForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SpecializationToolbar;
