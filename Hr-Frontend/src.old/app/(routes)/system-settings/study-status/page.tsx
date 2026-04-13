import { studyStatusService } from '@/services/system-settings/study-status.service';
import React from 'react';
import StudyStatusToolbar from './_components/study-status-toolbar';
import StudyStatusTable from './_components/study-status-table';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import { columnsStudyStatus } from './_components/columns';

export interface IStudyStatus {
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

const StudyStatusPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyStatusService.getStudyStatuses({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyStatusToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <StudyStatusTable columns={columnsStudyStatus} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default StudyStatusPage;
