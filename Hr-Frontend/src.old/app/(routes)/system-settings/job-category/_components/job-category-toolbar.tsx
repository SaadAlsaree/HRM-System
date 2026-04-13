import React from 'react';
import JobCategoryForm from './job-category-form';

type Props = {
   jobDegreeList: [];
};

const JobCategoryToolbar = ({ jobDegreeList }: Props) => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الفئات الوظيفية .</div>
               <div>
                  <JobCategoryForm title='أضافة' jobDegreeList={jobDegreeList} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobCategoryToolbar;
