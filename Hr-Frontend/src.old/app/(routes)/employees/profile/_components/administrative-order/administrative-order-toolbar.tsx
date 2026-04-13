import React from 'react';
import AdministrativeOrderForm from './administrative-order-form';

type Props = {
   employeeId?: string;
};
const AdministrativeOrderToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المعلومات الادارية .</div>
            <div>
               <AdministrativeOrderForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default AdministrativeOrderToolbar;
