import React from 'react';
import AdministrativePenaltiesForm from './administrative-penalties-form';

type Props = {
   employeeId: string;
};
const AdministrativePenaltiesToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>العقوبات الادارية .</div>
            <div>
               <AdministrativePenaltiesForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default AdministrativePenaltiesToolbar;
