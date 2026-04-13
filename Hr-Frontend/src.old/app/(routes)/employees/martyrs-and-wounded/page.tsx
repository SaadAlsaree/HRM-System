import { martyrsWoundedService } from '@/services/martyrs-wounded.service';
import React from 'react';
import MartyrsWoundedToolbar from './_components/martyrs-wounded-toolbar';
import MartyrsWoundedTable from './_components/martyrs-wounded-table';
import { columnsMartyrsWounded } from './_components/columns';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

export interface IMartyrsAndWounded {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   directorateId?: number;
   subDirectorateId?: number;
   startDate?: string;
   jobDegreeId?: number;
   jobCategoryId?: number;
   jobTitleId?: number;
   employeePositionId?: number;
   endDateOfService?: string;
   birthdate?: string;
   retirementDate?: string;
   administrativeOrderNo?: string;
   administrativeOrderDate?: string;
   isPoliticallyDismissed?: boolean;
   dateOfMartyrdom?: string;
   note?: string;
   healthStatus?: string;
   motherFullName?: string;
   genderName?: string;
   hireDate?: string;
   dateOfDeath?: string;
   employeePositionName?: string;
   jobTitleName?: string;
   directorateName?: string;
   subDirectorateName?: string;
   academicAchievementName?: string;
   jobDegreeName?: string;
   jobCategoryName?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const MartyrsAndWoundedPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await martyrsWoundedService.getMartyrsWounded({ Page, PageSize });
   const martyrsWoundedList: IMartyrsAndWounded[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <MartyrsWoundedToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <MartyrsWoundedTable columns={columnsMartyrsWounded} martyrsWoundedList={martyrsWoundedList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default MartyrsAndWoundedPage;
