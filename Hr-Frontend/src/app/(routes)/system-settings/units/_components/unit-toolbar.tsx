import React from 'react';
import UnitForm from './unit-form';

type Props = {
   DepartmentData: [];
   directorateList: [];
   subDirectorateList: [];
   sectionList: [];
};

const UnitToolbar = ({ DepartmentData, directorateList, subDirectorateList, sectionList }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الشعب .</div>
            <div>
               <UnitForm
                  title='أضافة'
                  DepartmentData={DepartmentData}
                  directorateList={directorateList}
                  subDirectorateList={subDirectorateList}
                  sectionList={sectionList}
               />
            </div>
         </div>
      </div>
   );
};

export default UnitToolbar;
