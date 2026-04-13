import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { studyLeaveExtensionService } from '@/services/study-leave-extension.service';

import ExtendStudyLeaveToolbar from './_components/extend-study-leaveToolbar';
import ExtendStudyLeaveTable from './_components/extend-study-leaveTable';
import { columnsStudyLeaveExtension } from './_components/columns';

export interface IStudyLeaveExtension {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   orderType: string;
   studyFileDocumentNo: string;
   extensionOrderNo: string;
   orderDate: string;
   fromDate: string;
   toDate: string;
   countOfDay: number;
   statusName: string;
   notes: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

async function ExtendStudyLeavePage({ searchParams }: Props) {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyLeaveExtensionService.getStudyLeaveExtensions({ Page, PageSize });
   const studyLeaveExtensionDetails: IStudyLeaveExtension[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   // services
   // data

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
          <div className='w-full'>
             <ExtendStudyLeaveToolbar />
          </div>
         <Separator />
         <div className='w-full'>
            <ExtendStudyLeaveTable columns={columnsStudyLeaveExtension} studyLeaveExtensionDetails={studyLeaveExtensionDetails} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
}

export default ExtendStudyLeavePage;
