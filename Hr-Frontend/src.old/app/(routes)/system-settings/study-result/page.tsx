import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import { studyResultService } from '@/services/system-settings/study-result.service';
import React from 'react';
import StudyResultTable from './_components/study-result-table';
import { columnsStudyResult } from './_components/columns';
import StudyResultToolbar from './_components/study-result-toolbar';

export interface IStudyResult {
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

const StudyResultPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyResultService.getStudyResults({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyResultToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <StudyResultTable columns={columnsStudyResult} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default StudyResultPage;
