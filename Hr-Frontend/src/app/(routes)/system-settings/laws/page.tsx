import React from 'react';
import LawToolbar from './_components/law-toolbar';
import { Separator } from '@/components/ui/separator';
import { lawService } from '@/services/system-settings/law.service';
import LawTable from './_components/law-table';
import Pagination from '@/components/Pagination';
import { columnsLaw } from './_components/columns';

export interface ILaw {
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

const LawsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await lawService.getLaw({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <LawToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <LawTable columns={columnsLaw} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default LawsPage;
