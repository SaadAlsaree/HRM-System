import React from 'react';
import LawForm from './law-form';

const LawToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>القوانين .</div>
               <div>
                  <LawForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default LawToolbar;
