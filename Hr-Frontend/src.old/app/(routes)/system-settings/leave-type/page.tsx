import { typeOfLeaveService } from '@/services/Leaves/type-of-leave.service';
import React from 'react';
import LeaveTypeToolbar from './_components/leave-type-toolbar';
import { Separator } from '@/components/ui/separator';
import LeaveTypeTable from './_components/leave-type-table';
import Pagination from '@/components/Pagination';
import { columnsTypeOfLeave } from './_components/columns';

export interface ITypeOfLeave {
   id: number;
   name?: string;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const LeaveTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfLeaveService.getTypeOfLeave({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <LeaveTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <LeaveTypeTable columns={columnsTypeOfLeave} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default LeaveTypePage;
