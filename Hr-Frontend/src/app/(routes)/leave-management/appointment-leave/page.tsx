import { leavesService } from '@/services/Leaves/leaves.service';
import React from 'react';
import AppointmentLeaveToolbar from './_components/appointment-leave-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAppointmentLeaves } from './_components/columns';
import AppointmentLeaveTable from './_components/appointment-leave-table';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IAppointmentLeave {
   id: string;
   jobCode?: string;
   fullName?: string;
   statusName?: string;
   employeeId: string;
   remainingBalance?: number;
   normalLeaveTypeId?: number;
   sicknessTypeId?: number;
   typeOfLeaveId?: number;
   longLeaveTypeId?: number;
   orderNo?: string;
   orderDate?: string;
   fromDate?: string;
   toDate?: string;
   status: number;
   countOfDays?: number;
   countOfMinutes?: number;
   countryId?: number;
   salaryStatusId?: number;
   isInside: boolean;
   country?: string;
   note?: string;
   dateOfAssignment?: string;
   noOfAssignment?: string;
   releaseDate?: string;
   dateOfBirthCertificate?: string;
   noOfBirthCertificate?: string;
   dateOfRelease?: string;
   noOfRelease?: string;
   dateOfStart?: string;
   noOfStart?: string;
   dateOfPermission?: string;
   noOfPermission?: string;
   hireDate?: string;
   hireOrderNo?: string;
   hireOrderDate?: string;
}

const AppointmentLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 8, status: 1 });
   const appointmentLeaveData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AppointmentLeaveToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <AppointmentLeaveTable columns={columnsAppointmentLeaves} appointmentLeaveData={appointmentLeaveData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AppointmentLeavePage;
