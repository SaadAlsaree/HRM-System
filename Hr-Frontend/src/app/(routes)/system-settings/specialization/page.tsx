import { preciseAcademicFieldService } from '@/services/system-settings/precise-academic-field.service';
import React from 'react';
import SpecializationToolbar from './_components/specialization-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsSpecialization } from './_components/columns';
import SpecializationTable from './_components/specialization-table';

export interface IPreciseAcademicField {
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

const SpecializationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await preciseAcademicFieldService.getPreciseAcademicField({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <SpecializationToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <SpecializationTable columns={columnsSpecialization} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default SpecializationPage;
