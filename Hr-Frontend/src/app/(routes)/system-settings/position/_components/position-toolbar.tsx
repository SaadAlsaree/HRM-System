import React from 'react';
import PositionForm from './position-form';

const PositionToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>المنصب .</div>
               <div>
                  <PositionForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PositionToolbar;
