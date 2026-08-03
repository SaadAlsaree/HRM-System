import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import AcademicSpecializationToolbar from './_components/academic-specialization-toolbar';
import { Separator } from '@/components/ui/separator';
import { columnsAcademicSpecialization } from './_components/columns';
import AcademicSpecializationTable from './_components/academic-specialization-table';
import { academicFieldService } from '@/services/system-settings/academic-field.service';
import Pagination from '@/components/Pagination';

export interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const AcademicSpecializationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/AcademicField', 'GET', { params: { Page, PageSize } });
   const academicSpecialization = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicSpecializationToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <AcademicSpecializationTable columns={columnsAcademicSpecialization} AcademicSpecializationData={academicSpecialization} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AcademicSpecializationPage;
