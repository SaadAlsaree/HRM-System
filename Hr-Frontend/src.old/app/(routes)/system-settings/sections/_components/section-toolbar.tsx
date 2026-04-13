import React from 'react';
import SectionForm from './section-form';
type Props = {
   DepartmentData: [];
   directorateList: [];
   subDirectorateList: [];
};

const SectionToolbar = ({ DepartmentData, directorateList, subDirectorateList }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الشعب .</div>
            <div>
               <SectionForm
                  title='أضافة'
                  DepartmentData={DepartmentData}
                  directorateList={directorateList}
                  subDirectorateList={subDirectorateList}
               />
            </div>
         </div>
      </div>
   );
};

export default SectionToolbar;
