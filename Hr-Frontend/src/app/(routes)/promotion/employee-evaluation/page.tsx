import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsEmployeeEvaluation } from './_components/columns';
import EmployeeEvaluationToolbar from './_components/employee-evaluatio-toolbar';
import EmployeeEvaluationTable from './_components/employee-evaluatio-table';
import { valuationsService } from '@/services/valuations.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IEmployeeEvaluation {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   statusName: string;
   status: number;
   secondaryId: string;
   bookNo: string;
   bookDate: string; // Format: YYYY-MM-DD
   recommendation: string;
   totalPoint: number;
   valuationType: string;
}

const EmployeeEvaluationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await valuationsService.getValuations({ Page, PageSize });
   const employeeEvaluationData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <EmployeeEvaluationToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <EmployeeEvaluationTable columns={columnsEmployeeEvaluation} employeeEvaluationData={employeeEvaluationData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default EmployeeEvaluationPage;
