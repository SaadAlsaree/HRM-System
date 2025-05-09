import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import LeavesToolbar from './_components/leaves-toolbar';
import LeavesTable from './_components/leaves-table';
import { columnsLeaves } from './_components/columns';
import { leavesService } from '@/services/Leaves/leaves.service';
import { countryService } from '@/services/system-settings/country.service';

export interface ILeave {
   id: string;
   employeeId: string;
   jobCode?: string;
   fullName?: string;
   orderNo?: string;
   orderDate?: string;
   fromDate?: string;
   toDate?: string;
   noOfRelease?: string;
   dateOfRelease?: string;
   releaseBookNo?: string;
   releaseBookDate?: string;
   releaseDate?: string;
   countOfDays?: number;
   remainingBalance?: string;
   isInside?: boolean;
   countryId?: number;
   salaryStatusId?: number;
   statusName?: string;
   attachments?: string;
   status: string;
   note?: string;
   adjustBalance?: boolean;
   daysToCut?: number;
   cutReason?: string;
}

// تعريف واجهة Props داخل page.tsx
interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const LeavesPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 5 });
   const leavesData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   const country = await countryService.getCountries();
   const countryData = country?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <LeavesToolbar countryData={countryData} />
         </div>
         <Separator />
         <div className='w-full'>
            <LeavesTable columns={columnsLeaves} leavesData={leavesData} countryData={countryData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default LeavesPage;
