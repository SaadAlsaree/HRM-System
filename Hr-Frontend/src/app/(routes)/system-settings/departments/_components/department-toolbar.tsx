import React from 'react';
import DepartmentForm from './department-form';

type Props = {
   directorateList: [];
   subDirectorateList: [];
};
const DepartmentToolbar = ({ directorateList, subDirectorateList }: Props) => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>الأقسام .</div>
               <div>
                  <DepartmentForm title='أضافة' directorateList={directorateList} subDirectorateList={subDirectorateList} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DepartmentToolbar;
