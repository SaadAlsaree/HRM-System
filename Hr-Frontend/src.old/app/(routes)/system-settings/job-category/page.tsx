import { jobCategoryService } from '@/services/system-settings/job-category.service';
import React from 'react';
import JobCategoryToolbar from './_components/job-category-toolbar';
import { Separator } from '@/components/ui/separator';
import JobCategoryTable from './_components/job-category-table';
import { columnsJobCategory } from './_components/columns';
import Pagination from '@/components/Pagination';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';

export interface IJobCategory {
   id: number;
   name: string;
   degreeId?: number;
   degreeName: number;
   increaseAmount: number;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const JobCategoryPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const jobDegrees = await jobDegreeService.getJobDegree();
   const jobDegreeList: [] = jobDegrees?.data?.items ?? [];

   const data = await jobCategoryService.getJobCategory({ Page, PageSize });
   const jobCategory: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <JobCategoryToolbar jobDegreeList={jobDegreeList} />
         </div>
         <Separator />
         <div className='w-full'>
            <JobCategoryTable columns={columnsJobCategory} data={jobCategory} jobDegreeList={jobDegreeList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default JobCategoryPage;
