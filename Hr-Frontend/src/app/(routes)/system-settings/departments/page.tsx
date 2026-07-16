import React from 'react';
import DepartmentToolbar from './_components/department-toolbar';
import { Separator } from '@/components/ui/separator';
import DepartmentTable from './_components/department-table';
import { columnsDepartment } from './_components/columns';
import Pagination from '@/components/Pagination';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

const DepartmentsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const department = await fetchServer<ApiResponse<any>>('/Department', 'GET', { params: { Page, PageSize } });
   const departmentList = department?.data?.items ?? [];

   const directorate = await fetchServer<ApiResponse<any>>('/Directorate');
   const directorateList = directorate?.data?.items ?? [];

   const subDirectorate = await fetchServer<ApiResponse<any>>('/SubDirectorate');
   const subDirectorateList = subDirectorate?.data?.items ?? [];
   const totalCount = department?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <DepartmentToolbar directorateList={directorateList} subDirectorateList={subDirectorateList} />
         </div>
         <Separator />
         <div className='w-full'>
            <DepartmentTable
               columns={columnsDepartment}
               DepartmentData={departmentList}
               directorateList={directorateList}
               subDirectorateList={subDirectorateList}
            />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default DepartmentsPage;
