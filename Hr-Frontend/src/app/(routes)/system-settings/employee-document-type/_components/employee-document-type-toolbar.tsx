import React from 'react';
import EmployeeDocumentTypeForm from './employee-document-type-form';

const EmployeeDocumentTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع مستمسكات الموظف .</div>
               <div>
                  <EmployeeDocumentTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default EmployeeDocumentTypeToolbar;
