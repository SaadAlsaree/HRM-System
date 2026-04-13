import { departmentService } from '@/services/system-settings/department.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import { sectionService } from '@/services/system-settings/section.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { unitService } from '@/services/system-settings/unit.service';
import React from 'react';
import UnitToolbar from './_components/unit-toolbar';
import { Separator } from '@/components/ui/separator';
import UnitTable from './_components/unit-table';
import Pagination from '@/components/Pagination';
import { columnsUnit } from './_components/columns';

export interface IUnit {
   id: number;
   directorateId?: number | string | null;
   subDirectorateId?: number | string | null;
   departmentId?: number | string | null;
   sectionId?: number | string | null;
   directorateName?: string;
   subDirectorateName?: string;
   departmentName?: string;
   sectionName?: string;
   name?: string;
   shortKey?: string;
   status?: string;
}
interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const UnitsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const department = await departmentService.getDepartments();
   const departmentList: [] = department?.data?.items ?? [];

   const directorate = await directorateService.getDirectorates();
   const directorateList: [] = directorate?.data?.items ?? [];

   const subDirectorate = await subDirectorService.getSubDirectorates();
   const subDirectorateList: [] = subDirectorate?.data?.items ?? [];

   const sections = await sectionService.getSection();
   const sectionsList: [] = sections?.data?.items ?? [];

   const units = await unitService.getUnit({ Page, PageSize });
   const unitList: [] = units?.data?.items ?? [];

   const totalCount = units?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <UnitToolbar
               sectionList={sectionsList}
               directorateList={directorateList}
               subDirectorateList={subDirectorateList}
               DepartmentData={departmentList}
            />
         </div>
         <Separator />
         <div>
            <UnitTable
               columns={columnsUnit}
               DepartmentData={departmentList}
               directorateList={directorateList}
               subDirectorateList={subDirectorateList}
               sectionsList={sectionsList}
               data={unitList}
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

export default UnitsPage;
