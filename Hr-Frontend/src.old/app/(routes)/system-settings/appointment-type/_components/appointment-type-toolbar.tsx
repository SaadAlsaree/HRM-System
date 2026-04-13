import React from 'react';
import AppointmentTypeFrom from './appointment-type-from';

const AppointmentTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع التعين .</div>
               <div>
                  <AppointmentTypeFrom title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AppointmentTypeToolbar;
