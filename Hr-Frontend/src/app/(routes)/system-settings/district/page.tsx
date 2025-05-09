import { territoryService } from '@/services/system-settings/territory.service';
import React from 'react';
import { columnsDistrict } from './_components/columns';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import DistrictToolbar from './_components/district-toolbar';
import DistrictTable from './_components/district-table';

export interface IDistrict {
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

const DistrictPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await territoryService.getTerritories({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <DistrictToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <DistrictTable columns={columnsDistrict} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};
export default DistrictPage;
