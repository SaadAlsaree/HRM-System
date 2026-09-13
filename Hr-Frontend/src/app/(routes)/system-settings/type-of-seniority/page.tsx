import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import TypeOfSeniorityToolbar from './_components/type-of-seniority-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import TypeOfSeniorityTable from './_components/type-of-seniority-table';
import { columnsTypeOfSeniority } from './_components/columns';

export interface ITypeOfSeniority {
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

const TypeOfSeniorityPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/TypeOfSeniority', 'GET', { params: { Page, PageSize } });
   const dataList = (data?.items ?? data?.data?.items) ?? [];

   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <TypeOfSeniorityToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <TypeOfSeniorityTable columns={columnsTypeOfSeniority} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default TypeOfSeniorityPage;
