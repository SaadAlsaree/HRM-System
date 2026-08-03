import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import { columnsAcademicAchievement } from '@/app/(routes)/system-settings/academic-achievement/_components/columns';
import AcademicAchievementTable from '@/app/(routes)/system-settings/academic-achievement/_components/academic-achievement-table';
import AcademicAchievementToolbar from './_components/academic-achievement-toolbar';
import { Separator } from '@/components/ui/separator';
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import Pagination from '@/components/Pagination';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';

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
const AcademicAchievementPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const jobDegrees = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/JobDegree');
   const jobDegreeList = (jobDegrees?.items ?? jobDegrees?.data?.items) ?? [];

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/AcademicAchievement', 'GET', { params: { Page, PageSize } });
   const academicAchievements = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   console.log(data);

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicAchievementToolbar jobDegreeList={jobDegreeList} />
         </div>
         <Separator />
         <div className='w-full'>
            <AcademicAchievementTable
               columns={columnsAcademicAchievement}
               AcademicAchievementData={academicAchievements}
               jobDegreeList={jobDegreeList}
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

export default AcademicAchievementPage;
