import React from 'react';
import RegionForm from './region-form';

const RegionToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الأقضية .</div>
               <div>
                  <RegionForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegionToolbar;
