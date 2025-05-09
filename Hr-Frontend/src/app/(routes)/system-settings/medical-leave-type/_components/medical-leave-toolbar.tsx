import React from 'react';
import MedicalLeaveForm from './medical-leave-form';

const MedicalLeaveToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الأجازة المرضية .</div>
               <div>
                  <MedicalLeaveForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default MedicalLeaveToolbar;
