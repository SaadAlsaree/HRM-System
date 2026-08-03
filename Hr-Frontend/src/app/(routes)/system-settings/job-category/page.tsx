import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import JobCategoryToolbar from './_components/job-category-toolbar';
import { Separator } from '@/components/ui/separator';
import JobCategoryTable from './_components/job-category-table';
import { columnsJobCategory } from './_components/columns';
import Pagination from '@/components/Pagination';
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

interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

const JobCategoryPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const jobDegrees = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/JobDegree');
   const jobDegreeList = (jobDegrees?.items ?? jobDegrees?.data?.items) ?? [];

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/JobCategory', 'GET', { params: { Page, PageSize } });
   const jobCategory = (data?.items ?? data?.data?.items) ?? [];

   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

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
