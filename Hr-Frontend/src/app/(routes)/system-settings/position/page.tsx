import { positionService } from '@/services/system-settings/position.service';
import React from 'react';
import { columnsPosition } from './_components/columns';
import PositionTable from './_components/position-table';
import PositionToolbar from './_components/position-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

export interface IPosition {
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

const PositionPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await positionService.getPositions({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PositionToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <PositionTable columns={columnsPosition} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PositionPage;
