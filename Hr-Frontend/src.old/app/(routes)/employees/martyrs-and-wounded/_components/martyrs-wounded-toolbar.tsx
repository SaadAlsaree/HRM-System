import React from 'react';
import MartyrsWoundedForm from './martyrs-wounded-form';

const MartyrsWoundedToolbar = () => {
   return (
      <div className='flex flex-col w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الشهداء و الجرحى .</div>

            <div>
               <MartyrsWoundedForm title='أضافة' />
            </div>
         </div>

         <div className='flex items-center justify-between w-full p-2'>{/* <EmployeeSearch onSelectUser={handleUserSelect} /> */}</div>
      </div>
   );
};

export default MartyrsWoundedToolbar;
