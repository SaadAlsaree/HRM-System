import React from 'react';
import JobDegreeForm from './job-degree-form';

const JobDegreeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الدرجات .</div>
               <div>
                  <JobDegreeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDegreeToolbar;
