import React from 'react';
import DirectorateToolbar from './_components/directorate-toolbar';
import { Separator } from '@/components/ui/separator';
import DirectorateTable from './_components/directorate-table';
import { columnsDirect } from './_components/columns';
import Pagination from '@/components/Pagination';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

const DirectoratesPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<ApiResponse<any>>('/SubDirectorate', 'GET', { params: { Page, PageSize } });
   const departments = data?.data?.items ?? [];

   const dataDirect = await fetchServer<ApiResponse<any>>('/Directorate');
   const directorates = dataDirect?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <DirectorateToolbar data={directorates} />
         </div>
         <Separator />
         <div className='w-full'>
            <DirectorateTable columns={columnsDirect} DirectorateData={departments} data={directorates} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default DirectoratesPage;
