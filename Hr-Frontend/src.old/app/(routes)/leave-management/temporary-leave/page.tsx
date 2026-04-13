import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

import TemporaryLeaveTable from './_components/temporary-leave-table';
import { columnsTemporaryLeave } from './_components/columns';
import { leavesService } from '@/services/Leaves/leaves.service';
import TemporaryLeaveToolbar from './_components/temporary-leave-toolbar';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface ITemporaryLeave {
   id: string;
   employeeId: string;
   orderNo?: string;
   orderDate?: string;
   countOfMinutes?: number;
   totalRemainingBalance?: number;
   fullName: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status: number;
   minutesCount?: number;
   note?: string;
}

const TemporaryLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 2, status: 1 });
   const temporaryLeaveData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <TemporaryLeaveToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <TemporaryLeaveTable columns={columnsTemporaryLeave} temporaryLeaveData={temporaryLeaveData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default TemporaryLeavePage;
