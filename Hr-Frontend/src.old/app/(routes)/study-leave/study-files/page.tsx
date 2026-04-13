import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import StudyFilesToolbar from './_components/StudyFilesToolbar';
import StudyFilesTable from './_components/StudyFilesTable';
import { columnsStudyLeave } from './_components/columns';
import { studyFileService } from '@/services/study-file.service';

interface Props {
   searchParams: {
      page: string;
      pageSize: string;
   };
}

export interface IStudyFile {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   documentNo?: string;
   documentDate?: string;
   notes?: string;
}

export default async function StudyFilesPage({ searchParams }: Props) {
   const page = parseInt(searchParams.page) || 1;
   const pageSize = parseInt(searchParams.pageSize) || 10;

   const data = await studyFileService.getStudyFiles({ Page: page, PageSize: pageSize });
   const studyLeavesData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyFilesToolbar />
         </div>
         <Separator />

         <div className='w-full'>
            <StudyFilesTable columns={columnsStudyLeave} studyLeavesData={studyLeavesData} />
            <Separator />

            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={pageSize} currentPage={page} />
            </div>
         </div>
      </div>
   );
}
