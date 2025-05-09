import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import JobTitleTable from './_components/job-title-table';
import { columnsJobTitle } from './_components/columns';
import JobTitleToolbar from './_components/job-title-toolbar';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobTitleService } from '@/services/system-settings/job-title.service';

export interface IJobTitle {
   id: number;
   name: string;
   degreeId?: number;
   degreeName: number;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const JobTitlePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const jobDegrees = await jobDegreeService.getJobDegree();
   const jobDegreeList: [] = jobDegrees?.data?.items ?? [];

   const data = await jobTitleService.getJobTitle({ Page, PageSize });
   const jobTitle: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <JobTitleToolbar jobDegrees={jobDegreeList} />
         </div>
         <Separator />
         <div className='w-full'>
            <JobTitleTable columns={columnsJobTitle} data={jobTitle} jobDegrees={jobDegreeList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};
export default JobTitlePage;
