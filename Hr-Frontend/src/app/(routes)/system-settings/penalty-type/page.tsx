import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import PenaltyTypeToolbar from './_components/penalty-type-toolbar';
import PenaltyTypeTable from './_components/penalty-type-table';
import { columnsPenaltyType } from './_components/columns';
import { typeOfDisciplinaryService } from '@/services/system-settings/type-of-disciplinary.service';

export interface IPenaltyType {
   id: number;
   name?: string;
   status?: string;
   countOfDayDelay?: number | string | null;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const PenaltyTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfDisciplinaryService.getTypeOfDisciplinary({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PenaltyTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <PenaltyTypeTable columns={columnsPenaltyType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PenaltyTypePage;
