import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import EmployeeListSearch from './employee-list-search';

interface EmployeeListToolbarProps {
   search?: string;
   pageSize: number;
}

const EmployeeListToolbar = ({ search = '', pageSize }: EmployeeListToolbarProps) => {
   return (
      <div className='flex w-full'>
         <div className='flex flex-col w-full gap-3 p-2'>
            <div className='flex items-center justify-between w-full'>
               <div className='text-xl text-muted-foreground'>عرض الموظفين .</div>
               <div className='flex items-center'>
                  <Link href='/employees/new' className='flex items-center'>
                     <Button className='btn btn-primary btn-sm'>أضافة موظف</Button>
                  </Link>
               </div>
            </div>

            <EmployeeListSearch search={search} pageSize={pageSize} />
         </div>
      </div>
   );
};

export default EmployeeListToolbar;
