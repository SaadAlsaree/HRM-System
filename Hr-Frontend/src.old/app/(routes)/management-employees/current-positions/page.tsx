import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAffiliatesFromOrg } from './_components/columns';
import CurrentPositionToolbar from './_components/current-position-toolbar';
import CurrentPositionTable from './_components/current-position-table';
import { employeePositionService } from '@/services/Employee/employee-position.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface ICurrentPosition {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   orderNo: string;
   orderDate: string;
   startDate: string;
   endAssignedOrderNo: string;
   endAssignedOrderDate: string;
   assignedDate: string;
   assignedOrderDate: string;
   assignedOrderNo: string;
   administrativeOrderDate: string;
   administrativeOrderNo: string;
   directorateId: number;
   subDirectorateId: number;
   departmentId: number;
   sectionId: number;
   unitId: number;
   positionId: number;
   statusName: string;
   status: number;
   note: string;
   attachments?: string[];
}

const CurrentPositionPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await employeePositionService.getEmployeePosition({ Page, PageSize });
   const currentPositionData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <CurrentPositionToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <CurrentPositionTable columns={columnsAffiliatesFromOrg} currentPositionData={currentPositionData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default CurrentPositionPage;
