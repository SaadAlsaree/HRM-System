import React from 'react';
import DepartmentToolbar from './_components/department-toolbar';
import { Separator } from '@/components/ui/separator';
import DepartmentTable from './_components/department-table';
import { columnsDepartment } from './_components/columns';
import { departmentService } from '@/services/system-settings/department.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import Pagination from '@/components/Pagination';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const DepartmentsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const department = await departmentService.getDepartments({ Page, PageSize });
   const departmentList: [] = department?.data?.items ?? [];

   const directorate = await directorateService.getDirectorates();
   const directorateList: [] = directorate?.data?.items ?? [];

   const subDirectorate = await subDirectorService.getSubDirectorates();
   const subDirectorateList: [] = subDirectorate?.data?.items ?? [];
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
