import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

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

            <form action='/employees/list' method='GET' className='flex flex-wrap items-center gap-2'>
               <Input
                  name='search'
                  defaultValue={search}
                  placeholder='بحث بالاسم الكامل، الرقم الوظيفي، رقم الاضبارة أو الرقم الاحصائي'
                  className='w-full md:w-[420px]'
               />
               <input type='hidden' name='PageSize' value={pageSize} />
               <input type='hidden' name='page' value='1' />
               <Button type='submit' variant='outline' className='btn-sm'>
                  بحث
               </Button>
               <Link href={`/employees/list?page=1&PageSize=${pageSize}`}>
                  <Button type='button' variant='ghost' className='btn-sm'>
                     مسح
                  </Button>
               </Link>
            </form>
         </div>
      </div>
   );
};

export default EmployeeListToolbar;
