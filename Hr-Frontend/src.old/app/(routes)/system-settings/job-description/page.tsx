import { jobDescriptionService } from '@/services/system-settings/job-description.service';
import JobDescriptionToolbar from './_components/job-description-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import JobDescriptionTable from './_components/job-description-table';
import { columnsJobDescription } from './_components/columns';

export interface IJobDescription {
   id: number;
   name: string;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const JobDescriptionPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await jobDescriptionService.getJobDescription({ Page, PageSize });
   const jobDescriptions: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <JobDescriptionToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <JobDescriptionTable columns={columnsJobDescription} data={jobDescriptions} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default JobDescriptionPage;
