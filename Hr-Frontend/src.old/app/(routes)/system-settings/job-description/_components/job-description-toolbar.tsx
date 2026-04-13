import React from 'react';
import JobDescriptionForm from './job-description-form';

const JobDescriptionToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الوصف الوظيفي .</div>
               <div>
                  <JobDescriptionForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDescriptionToolbar;
