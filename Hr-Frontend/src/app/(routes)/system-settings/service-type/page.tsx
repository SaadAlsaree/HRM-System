import React from 'react';

import { typeOfServiceService } from '@/services/system-settings/type-of-service.service';
import Pagination from '@/components/Pagination';
import { columnsServiceType } from './_components/columns';
import { Separator } from '@/components/ui/separator';
import ServiceTypeTable from './_components/service-type-table';
import ServiceTypeToolbar from './_components/service-type-toolbar';

export interface IStudyResult {
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

const ServiceTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfServiceService.getTypeOfService({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ServiceTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <ServiceTypeTable columns={columnsServiceType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default ServiceTypePage;
