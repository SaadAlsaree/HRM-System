import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { studyLeaveExtensionService } from '@/services/study-leave-extension.service';

import { useRouter, useSearchParams } from 'next/navigation';
import ExtendStudyLeaveToolbar from './_components/extend-study-leaveToolbar';
import ExtendStudyLeaveForm from './_components/extend-study-leaveForm';
import ExtendStudyLeaveTable from './_components/extend-study-leaveTable';
import { columnsStudyLeaveExtension } from './_components/columns';
// services
import { typeOfLeaveService } from '@/services/Leaves/type-of-leave.service';
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import { academicFieldService } from '@/services/system-settings/academic-field.service';
import { countryService } from '@/services/system-settings/country.service';
import { studyResultService } from '@/services/system-settings/study-result.service';
import { studyStatusService } from '@/services/system-settings/study-status.service';

export interface IStudyLeaveExtension {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   orderType: string;
   studyFileDocumentNo: string;
   extensionOrderNo: string;
   orderDate: string;
   fromDate: string;
   toDate: string;
   countOfDay: number;
   statusName: string;
   notes: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

async function ExtendStudyLeavePage({ searchParams }: Props) {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyLeaveExtensionService.getStudyLeaveExtensions({ Page, PageSize });
   const studyLeaveExtensionDetails: IStudyLeaveExtension[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   // services
   const academicAchievementData = await academicAchievementService.getAcademicAchievements({ Page: 1, PageSize: 100 });
   const academicFieldData = await academicFieldService.getAcademicFields({ Page: 1, PageSize: 100 });
   const countryData = await countryService.getCountries({ Page: 1, PageSize: 100 });
   const studyResultData = await studyResultService.getStudyResults({ Page: 1, PageSize: 100 });
   const studyStatusData = await studyStatusService.getStudyStatuses({ Page: 1, PageSize: 100 });
   const typeOfLeaveData = await typeOfLeaveService.getTypeOfLeave({ Page: 1, PageSize: 100 });

   // data
   const academicAchievement: [] = academicAchievementData?.data?.items ?? [];
   const academicField: [] = academicFieldData?.data?.items ?? [];
   const country: [] = countryData?.data?.items ?? [];
   const studyResult: [] = studyResultData?.data?.items ?? [];
   const studyStatus: [] = studyStatusData?.data?.items ?? [];
   const typeOfLeave: [] = typeOfLeaveData?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ExtendStudyLeaveToolbar
               academicAchievement={academicAchievement}
               academicField={academicField}
               country={country}
               studyResult={studyResult}
               studyStatus={studyStatus}
               typeOfLeave={typeOfLeave}
            />
         </div>
         <Separator />
         <div className='w-full'>
            <ExtendStudyLeaveTable columns={columnsStudyLeaveExtension} studyLeaveExtensionDetails={studyLeaveExtensionDetails} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
}

export default ExtendStudyLeavePage;
