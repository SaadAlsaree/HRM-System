import { promotionsService } from '@/services/promotions.service';
import React from 'react'
import ReportToolbar from './_components/report-toolbar';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import ReportTable from './_components/report-table';
import { columnsReports } from './_components/columns';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
// import { jobTitleService } from '@/services/system-settings/job-title.service';

interface Props {
  searchParams: {
     page: string;
     PageSize: string;
  };
}

const ReportPage = async({ searchParams }: Props) => {

  const Page = parseInt(searchParams.page) || 1;
     const PageSize = parseInt(searchParams.PageSize) || 10;
  
     const data = await promotionsService.getPromotions({ Page, PageSize });
     const reportList = data?.data?.items ?? [];
     const totalCount = data?.data?.totalCount ?? 0;

     const jobDegrees = await jobDegreeService.getJobDegree();
     const jobDegreesList = jobDegrees?.data?.items ?? [];

   //   const jobTitles = await jobTitleService.getJobTitle();
   //   const jobTitlesList = jobTitles?.data?.items ?? [];
  

  return (
    <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
    <div className='w-full'>
       <ReportToolbar  jobDegreesList={jobDegreesList} />
    </div>
    <Separator />
    <div className='w-full'>
       <ReportTable columns={columnsReports} data={reportList} />
       <Separator />
       <div className='p-2'>
          <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
       </div>
    </div>
 </div>
  )
}

export default ReportPage