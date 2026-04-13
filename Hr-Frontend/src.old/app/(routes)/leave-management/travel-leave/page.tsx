import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import TravelLeaveToolbar from './_components/travel-leave-toolbar';
import TravelLeaveTable from './_components/travel-leave-table';
import { columnsTravelLeave } from './_components/columns';
import { leavesService } from '@/services/Leaves/leaves.service';
import { countryService } from '@/services/system-settings/country.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface ITravelLeave {
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

const TravelLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 6, status: 1 });
   const travelLeaveData = data?.data ?? [];
   const totalCount = data?.totalCount ?? 0;

   const country = await countryService.getCountries();
   const countryData = country?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <TravelLeaveToolbar countryData={countryData} />
         </div>
         <Separator />
         <div className='w-full'>
            <TravelLeaveTable columns={columnsTravelLeave} travelLeaveData={travelLeaveData} countryData={countryData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default TravelLeavePage;
