import React from 'react';
import JobTitleForm from './job-title-form';

type Props = {
   jobDegrees: [];
};

const JobTitleToolbar = ({ jobDegrees }: Props) => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>العنوان الوظيفي .</div>
               <div>
                  <JobTitleForm title='أضافة' jobDegrees={jobDegrees} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobTitleToolbar;
