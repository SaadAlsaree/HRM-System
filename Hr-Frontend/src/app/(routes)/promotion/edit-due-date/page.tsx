import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsEditDueDate } from './_components/columns';
import EditDueDateToolbar from './_components/edit-dueDate-toolbar';
import EditDueDateTable from './_components/edit-dueDate-table';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IEditDueDate {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   currentDegreeDueDate: string;
   newDegreeDueDate: string;
   currentCategoryDueDate: string;
   newCategoryDueDate: string;
   orderNo: string;
   orderDate: string;
   statusName: string;
   status: number;
   note: string;
   attachments?: string[];
}

const EditDueDatePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/ChangeDueDate', 'GET', { params: { Page, PageSize } });

   const editDueDate = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   console.log(editDueDate);
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <EditDueDateToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <EditDueDateTable columns={columnsEditDueDate} editDueDateData={editDueDate} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default EditDueDatePage;
