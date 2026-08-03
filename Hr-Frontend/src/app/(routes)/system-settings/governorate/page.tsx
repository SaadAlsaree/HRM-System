import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import GovernorateToolbar from './_components/governorate-toolbar';
import { Separator } from '@/components/ui/separator';
import GovernorateTable from './_components/governorate-table';
import Pagination from '@/components/Pagination';
import { columnsGovernorate } from './_components/columns';
import { governorateService } from '@/services/system-settings/governorate.service';

export interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

export interface IGovernorate {
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

const GovernoratePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/Governorate', 'GET', { params: { Page, PageSize } });
   const dataList = (data?.items ?? data?.data?.items) ?? [];

   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <GovernorateToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <GovernorateTable columns={columnsGovernorate} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default GovernoratePage;
