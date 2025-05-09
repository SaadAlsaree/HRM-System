import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import MaternityLeaveToolbar from './_components/maternity-leave-toolbar';
import MaternityLeaveTable from './_components/maternity-leave-table';
import { columnsMaternityLeave } from './_components/columns';
import { leavesService } from '@/services/Leaves/leaves.service';

export interface IMaternityLeave {
   id: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   orderNo?: string;
   orderDate?: string;
   noOfBirthCertificate?: string;
   dateOfBirthCertificate?: string;
   fromDate?: string;
   salaryStatusId: number;
   toDate?: string;
   isInside: boolean;
   countOfDays?: number;
   remainingBalance?: number;
   statusName?: string;
   status: number;
   note?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const MaternityLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 4 });
   const maternityLeaveData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <MaternityLeaveToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <MaternityLeaveTable columns={columnsMaternityLeave} maternityLeaveData={maternityLeaveData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default MaternityLeavePage;
