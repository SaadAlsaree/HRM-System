import React from 'react';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import JobDegreeToolbar from './_components/job-degree-toolbar';
import { Separator } from '@/components/ui/separator';
import JobDegreeTable from './_components/job-degree-table';
import Pagination from '@/components/Pagination';
import { columnsJobDegree } from './_components/columns';

export interface IJobDegree {
   id: number;
   name: string;
   increaseAmount: number;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const JobDegreePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await jobDegreeService.getJobDegree({ Page, PageSize });
   const jobDegrees: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <JobDegreeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <JobDegreeTable columns={columnsJobDegree} data={jobDegrees} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default JobDegreePage;
