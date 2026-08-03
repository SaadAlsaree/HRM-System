import { fetchServer } from '@/lib/fetchServer';
import { studyExtensionOrderTypeService } from '@/services/system-settings/study-extension-order-type.service';
import React from 'react';
import StudyLeaveExtensionToolbar from './_components/study-leave-extension-toolbar';
import StudyLeaveExtensionTable from './_components/study-leave-extension-table';
import { columnsStudyExtension } from './_components/columns';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

export interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

export interface IStudyExtensionOrderType {
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
const StudyLeaveExtensionTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/StudyExtensionOrderType', 'GET', { params: { Page, PageSize } });
   const dataList = (data?.items ?? data?.data?.items) ?? [];

   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyLeaveExtensionToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <StudyLeaveExtensionTable columns={columnsStudyExtension} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default StudyLeaveExtensionTypePage;
