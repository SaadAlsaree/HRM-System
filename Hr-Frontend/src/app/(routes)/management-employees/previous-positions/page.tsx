import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAffiliatesFromOrg } from './_components/columns';
import PreviousPositionToolbar from './_components/previous-position-toolbar';
import PreviousPositionTable from './_components/previous-position-table';
import { employeePositionService } from '@/services/Employee/employee-position.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IPreviousPosition {
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

const PreviousPositionPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await employeePositionService.getEmployeePosition({ Page, PageSize });
   const previousPositionData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PreviousPositionToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <PreviousPositionTable columns={columnsAffiliatesFromOrg} previousPositionData={previousPositionData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PreviousPositionPage;
