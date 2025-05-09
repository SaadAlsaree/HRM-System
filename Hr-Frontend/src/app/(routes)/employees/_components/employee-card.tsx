import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { EmployeeList } from '../list/page';
import Link from 'next/link';

type Props = {
   employee?: EmployeeList;
};
const EmployeeCard = ({ employee }: Props) => {
   return (
      <Link href={`/employees/profile/${employee?.employeeId}`}>
         <div className='flex items-center justify-center border rounded-lg bg-white dark:bg-gray-900 w-[300px] transition-colors duration-300 hover:shadow-md active:shadow-none cursor-pointer'>
            <div className='flex flex-col items-center justify-center p-4'>
               <div className='flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-800'>
                  <Avatar className='w-24 h-24 border rounded-full'>
                     <AvatarImage src={employee?.pathOfProfile && '/avatar.jpg'} />
                     <AvatarFallback>?</AvatarFallback>
                  </Avatar>
               </div>
               <div className='mt-4 text-gray-800 dark:text-gray-100 flex flex-row items-center'>
                  <h1 className='text-sm '>الرقم الوظيفي :</h1>
                  <h1 className='text-lg font-semibold'>{employee?.jobCode}</h1>
               </div>
               <p className='mt-1 text-sm font-medium text-gray-600 dark:text-gray-300'>{employee?.fullName}</p>
            </div>
         </div>
      </Link>
   );
};

export default EmployeeCard;
