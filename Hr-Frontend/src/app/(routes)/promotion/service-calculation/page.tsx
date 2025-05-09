import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsServiceCalculation } from './_components/columns';
import ServiceCalculationTable from './_components/service-calculation-table';
import ServiceCalculationToolbar from './_components/service-calculation-toolbar';
import { serviceCalculationService } from '@/services/service-calculation.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobTitleService } from '@/services/system-settings/job-title.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IServiceCalculation {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   jobDegreeId:number;
   typeOfServiceId: number;
   typeOfServiceName: string;
   countOfMonth: number;
   orderNo: string;
   orderDate: string;
   isPoliticalTermination: boolean;
   statusName: string;
   status: number;
   notes: string | undefined;
   attachments?: string[];
}

const ServiceCalculationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await serviceCalculationService.getServiceCalculations({ Page, PageSize });
   const serviceCalculation = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   const jobDegrees = await jobDegreeService.getJobDegree();
   const jobDegreesList = jobDegrees?.data?.items ?? [];

   const jobTitles = await jobTitleService.getJobTitle();
   const jobTitlesList = jobTitles?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ServiceCalculationToolbar jobDegreesList={jobDegreesList} jobTitlesList={jobTitlesList}   />
         </div>
         <Separator />
         <div className='w-full'>
            <ServiceCalculationTable columns={columnsServiceCalculation} serviceCalculationData={serviceCalculation} jobDegreesList={jobDegreesList} jobTitlesList={jobTitlesList} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default ServiceCalculationPage;
