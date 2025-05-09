import React from 'react';
import { columnsAcademicAchievement } from '@/app/(routes)/system-settings/academic-achievement/_components/columns';
import AcademicAchievementTable from '@/app/(routes)/system-settings/academic-achievement/_components/academic-achievement-table';
import AcademicAchievementToolbar from './_components/academic-achievement-toolbar';
import { Separator } from '@/components/ui/separator';
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import Pagination from '@/components/Pagination';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const AcademicAchievementPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const jobDegrees = await jobDegreeService.getJobDegree();
   const jobDegreeList: [] = jobDegrees?.data?.items ?? [];

   const data = await academicAchievementService.getAcademicAchievements({ Page, PageSize });
   const academicAchievements: [] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

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
