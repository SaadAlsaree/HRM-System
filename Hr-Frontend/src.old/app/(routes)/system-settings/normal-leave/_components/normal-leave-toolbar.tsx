import React from 'react';
import NormalLeaveForm from './normal-leave-form';

const NormalLeaveToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الأجازة .</div>
               <div>
                  <NormalLeaveForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default NormalLeaveToolbar;
