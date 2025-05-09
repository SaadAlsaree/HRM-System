import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsEditJobTitle } from './_components/columns';
import EditJobTitleToolbar from './_components/edit-jobTitle-toolbar';
import EditJobTitleTable from './_components/edit-jobTitle-table';
import { changeJobTitlesService } from '@/services/change-job-titles.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IEditJobTitle {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   oldJobTitleName: string;
   newJobTitleName: string;
   oldJobDescriptionName: string;
   newJobDescriptionName: string;
   newJobTitleId: number;
   newJobDescriptionId: number;
   orderNo: string;
   orderDate: string;
   statusName: string;
   status: number;
   note: string;
   attachments?: string[];
}

const EditJobTitlePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await changeJobTitlesService.getChangeJobTitles({ Page, PageSize });
   const editJobTitleData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;



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
