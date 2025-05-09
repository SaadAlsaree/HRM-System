import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const EmployeeListToolbar = () => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>عرض الموظفين .</div>
            <div>
               <div className='flex items-center'>
                  <Link href='/employees/new' className='flex items-center'>
                     <Button className='btn btn-primary btn-sm'>أضافة موظف</Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EmployeeListToolbar;
