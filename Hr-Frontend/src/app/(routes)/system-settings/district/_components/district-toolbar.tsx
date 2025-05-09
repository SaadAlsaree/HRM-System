import React from 'react';
import DistrictForm from './district-form';

const DistrictToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الناحية .</div>
               <div>
                  <DistrictForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DistrictToolbar;
