import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsEditJobTitle } from './_components/columns';
import EditJobTitleToolbar from './_components/edit-jobTitle-toolbar';
import EditJobTitleTable from './_components/edit-jobTitle-table';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IEditJobTitle {
   newJobTitleId: number;
   newJobTitleName: string;
   newJobDescriptionId: number;
   newJobDescriptionName: string;

   oldJobTitleId: number | null;
   oldJobTitleName: string | null;
   oldJobDescriptionId: number | null;
   oldJobDescriptionName: string | null;

   orderNo: string;
   orderDate: string; // Format: YYYY-MM-DD
   note: string;

   id: string; // UUID
   employeeId: string; // UUID
   fullName: string;
   jobCode: string;
   lotNumber: string | null;
   statusName: string;
   status: number;
}

const EditJobTitlePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/ChangeJobTitle', 'GET', { params: { Page, PageSize } });
   const editJobTitleData = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <EditJobTitleToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <EditJobTitleTable columns={columnsEditJobTitle} editJobTitleData={editJobTitleData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default EditJobTitlePage;
