import { resignationService } from '@/services/resignation.service';
import React from 'react';
import ResignationsToolbar from './_components/resignations-toolbar';
import ResignationsTable from './_components/resignations-table';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import { columnsResignation } from './_components/columns';

export interface IResignation {
   employeeName?: string;
   reason?: string;
   requestDate?: string;
   requestNo?: string;
   resignationOrderNo?: string;
   resignationOrderDate?: string;
   separationOrderNo?: string;
   separationOrderDate?: string;
   note?: string;
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const ResignationsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await resignationService.getResignations({ Page, PageSize });
   const resignationList: IResignation[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ResignationsToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <ResignationsTable columns={columnsResignation} resignationList={resignationList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default ResignationsPage;
