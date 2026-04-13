import { interruptionService } from '@/services/system-settings/interruption.service';
import React from 'react';
import InterruptionsTable from './_components/interruptions-table';
import InterruptionsToolbar from './_components/interruptions-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsInterruptions } from './_components/columns';

export interface IInterruptions {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   notificationDate?: string;
   reason?: string;
   note?: string;
   createAt?: string;
   createBy?: string;
   lastUpdateAt?: string;
   lastUpdateBy?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const InterruptionsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await interruptionService.getInterruption({ Page, PageSize });
   const interruptionList: IInterruptions[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <InterruptionsToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <InterruptionsTable columns={columnsInterruptions} resignationList={interruptionList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default InterruptionsPage;
