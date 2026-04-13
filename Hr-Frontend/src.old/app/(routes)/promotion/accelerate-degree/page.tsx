import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAccelerateAchievement } from './_components/columns';
import AccelerateAchievementToolbar from './_components/accelerate-degree-toolbar';
import AccelerateAchievementTable from './_components/accelerate-degree-table';
import { changeDegreeService } from '@/services/change-degree.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IAccelerateAchievement {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   statusName: string;
   status: number;

   jobDegreeFromId: number;
   jobDegreeFromName: string;
   jobDegreeToId: number;
   jobDegreeToName: string;

   jobCategoryFromId: number;
   jobCategoryFromName: string;
   jobCategoryToId: number;
   jobCategoryToName: string;

   jobTitleFromId: number;
   jobTitleFromName: string;
   jobDescriptionFromId: number;
   jobDescriptionFromName: string;

   jobTitleToId: number;
   jobTitleToName: string;
   jobDescriptionToId: number;
   jobDescriptionToName: string;

   oldDegreeDueDate: string; // Format: YYYY-MM-DD
   newDegreeDueDate: string;
   oldCategoryDueDate: string;
   newCategoryDueDate: string;

   orderNo: string;
   orderDate: string; // Format: YYYY-MM-DD
   note: string;
}

const AccelerateAchievementPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await changeDegreeService.getChangeDegree({ Page, PageSize });
   const accelerateAchievement = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AccelerateAchievementToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <AccelerateAchievementTable columns={columnsAccelerateAchievement} accelerateAchievementData={accelerateAchievement} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AccelerateAchievementPage;
