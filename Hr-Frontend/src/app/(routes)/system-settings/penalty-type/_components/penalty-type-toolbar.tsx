import React from 'react';
import PenaltyTypeForm from './penalty-type-form';

const PenaltyTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع العقوبة .</div>
               <div>
                  <PenaltyTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PenaltyTypeToolbar;
