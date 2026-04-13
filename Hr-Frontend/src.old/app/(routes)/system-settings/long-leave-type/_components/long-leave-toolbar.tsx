import React from 'react';
import LongLeaveForm from './long-leave-form';

const LongLeaveToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الأجازة الطويلة .</div>
               <div>
                  <LongLeaveForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default LongLeaveToolbar;
