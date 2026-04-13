import { retirementService } from '@/services/retirement.service';
import React from 'react';
import RetirementToolbar from './_components/retirement-toolbar';
import RetirementTable from './_components/retirement-table';
import { columnsRetirement } from './_components/columns';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';

export interface IRetirement {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   directorateId?: number;
   statisticalIndex?: string;
   directorateName?: string;
   subDirectorateId?: number;
   subDirectorateName?: string;
   startDate?: string;
   academicAchievementId?: number;
   academicAchievementName?: string;
   jobDegreeId?: number;
   jobDegreeName?: string;
   jobCategoryId?: number;
   jobCategoryName?: string;
   jobTitleId?: number;
   jobTitleName?: string;
   decisionToFixAge?: string;
   employeePositionId?: string;
   endDateOfService?: string;
   birthdate?: string;
   retirementDate?: number;
   administrativeOrderNo?: string;
   administrativeOrderDate?: string;
   isPoliticallyDismissed?: boolean;
   note?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const RetirementPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await retirementService.getRetirements({ Page, PageSize });
   const retirementList: IRetirement[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <RetirementToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <RetirementTable columns={columnsRetirement} retirementList={retirementList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};
export default RetirementPage;
