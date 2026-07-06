import React from 'react'
import ReportToolbar from './_components/report-toolbar';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';
import ReportTable from './_components/report-table';
import { columnsReports } from './_components/columns';
import { fetchServer } from '@/lib/fetchServer';
import type { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
// import { jobTitleService } from '@/services/system-settings/job-title.service';

export interface PromotionReportItem {
  id?: string;
  employeeId: string;
  fileNumber?: string;
  fullName?: string;
  jobDegreeName?: string;
  jobTitleName?: string;
  orderNo?: string;
  orderDate?: string;
  thanksOrderNo?: string;
  thanksOrderDate?: string;
  penalties?: string;
  penaltiesDate?: string;
  leaveWithoutSalary?: string;
  fromDate?: string;
  toDate?: string;
  newJobDegreeName?: string;
  academicAchievement?: string;
  dueDate?: string;
  [key: string]: string | number | null | undefined;
}

interface PagedResponse<T> {
  data?: {
    items?: T[];
    totalCount?: number;
  };
}

interface Props {
  searchParams: {
     page: string;
     PageSize: string;
     employeeId?: string;
     degreeId?: string;
     fromDate?: string;
     toDate?: string;
  };
}

const ReportPage = async({ searchParams }: Props) => {

  const Page = parseInt(searchParams.page) || 1;
  const PageSize = parseInt(searchParams.PageSize) || 10;

  const data = await fetchServer<PagedResponse<PromotionReportItem>>('/Promotions/Reports', 'GET', {
      params: {
        Page,
        PageSize,
        employeeId: searchParams.employeeId,
        degreeId: searchParams.degreeId,
        fromDate: searchParams.fromDate,
        toDate: searchParams.toDate,
      }
  });
  const reportList = data?.data?.items ?? [];
  const totalCount = data?.data?.totalCount ?? 0;

  console.log(data);

  const jobDegrees = await fetchServer<PagedResponse<IJobDegree>>('/JobDegree', 'GET', {
      params: { Page: 1, PageSize: 100 }
  });
  const jobDegreesList = jobDegrees?.data?.items ?? [];

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
