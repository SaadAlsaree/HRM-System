import React from 'react';
import DocumentForm from './document-form';
type Props = {
   employeeId?: string;
};
const DocumentToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المعلومات الادارية .</div>
            <div>
               <DocumentForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default DocumentToolbar;
