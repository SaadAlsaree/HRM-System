import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

import { columnsMedicalLeave } from './_components/columns';
import { leavesService } from '@/services/Leaves/leaves.service';
import MedicalLeaveToolbar from './_components/medical-leave-toolbar';
import MedicalLeaveTable from './_components/medical-leave-table';
import { sicknessTypeService } from '@/services/system-settings/sickness-type.service';
import { countryService } from '@/services/system-settings/country.service';

export interface IMedicalLeave {
   id: string;
   employeeId: string;
   jobCode?: string;
   fullName?: string;
   normalLeaveTypeId?: number;
   sicknessTypeName?: string;
   sicknessTypeId?: number;
   totalRemainingBalance?: number;
   typeOfLeaveId?: number;
   typeOfLeaveName?: string;
   longLeaveTypeId?: number;
   orderNo?: string;
   orderDate?: string;
   fromDate?: string;
   status: string;
   toDate?: string;
   countOfDays?: number;
   countOfMinutes?: number;
   countryId?: number;
   salaryStatusId?: number;
   isInside?: boolean;
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

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const MedicalLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await leavesService.getLeaves({ Page, PageSize, TypeOfLeaveId: 3, status: 1 });
   const medicalLeaveData = data?.data?.items ?? [];
   const totalCount = data?.totalCount ?? 0;

   const siknesTypes = await sicknessTypeService.getSicknessTypes();
   const siknesTypesData = siknesTypes?.data?.items ?? [];

   const country = await countryService.getCountries();
   const countryData = country?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <MedicalLeaveToolbar countryData={countryData} siknesTypesData={siknesTypesData} />
         </div>
         <Separator />
         <div className='w-full'>
            <MedicalLeaveTable
               columns={columnsMedicalLeave}
               medicalLeaveData={medicalLeaveData}
               countryData={countryData}
               siknesTypesData={siknesTypesData}
            />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default MedicalLeavePage;
