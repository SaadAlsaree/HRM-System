import { normalLeaveTypeService } from '@/services/Leaves/normal-leave-type.service';
import React from 'react';
import NormalLeaveToolbar from './_components/normal-leave-toolbar';
import { Separator } from '@/components/ui/separator';
import NormalLeaveTable from './_components/normal-leave-table';
import Pagination from '@/components/Pagination';
import { columnsNormalLeave } from './_components/columns';

export interface INormalLeave {
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

const NormalLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await normalLeaveTypeService.getNormalLeaveType({ Page: 1, PageSize: 10 });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <NormalLeaveToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <NormalLeaveTable columns={columnsNormalLeave} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default NormalLeavePage;
