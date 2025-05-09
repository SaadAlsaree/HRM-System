import { typeOfJobService } from '@/services/system-settings/type-of-job.service';
import React from 'react';
import AppointmentTypeToolbar from './_components/appointment-type-toolbar';
import AppointmentTypeTable from './_components/appointment-type-table';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsTypeOfJob } from './_components/columns';

export interface ITypeOfJob {
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

const AppointmentTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfJobService.getTypeOfJob({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AppointmentTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <AppointmentTypeTable columns={columnsTypeOfJob} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AppointmentTypePage;
