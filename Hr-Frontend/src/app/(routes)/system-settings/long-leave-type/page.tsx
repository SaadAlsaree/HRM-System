import { longLeaveTypeService } from '@/services/Leaves/long-leave-type.service';
import React from 'react';
import LongLeaveToolbar from './_components/long-leave-toolbar';
import { Separator } from '@/components/ui/separator';
import LongLeaveTable from './_components/long-leave-table';
import { columnsLongLeave } from './_components/columns';
import Pagination from '@/components/Pagination';

export interface ILongLeaveType {
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

const LongLeaveTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await longLeaveTypeService.getLongLeaveType();
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <LongLeaveToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <LongLeaveTable columns={columnsLongLeave} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default LongLeaveTypePage;
