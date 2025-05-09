import React from 'react';
import LeavesBalancesForm from './leaves-balances-form';

type Props = {
   employeeId: string;
};
const LeavesBalancesToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'> رصيد الاجازات .</div>
            <div>
               <LeavesBalancesForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default LeavesBalancesToolbar;
