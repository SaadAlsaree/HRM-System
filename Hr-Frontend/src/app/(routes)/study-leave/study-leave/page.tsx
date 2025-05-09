import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { studyLeaveService } from '@/services/study-leave.service';
import StudyLeaveToolbar from './_components/study-leaveToolbar';
import StudyLeaveTable from './_components/study-leaveTable';
import columnsStudyLeave from './_components/columns';
// services
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import { academicFieldService } from '@/services/system-settings/academic-field.service';
import { countryService } from '@/services/system-settings/country.service';
import { studyResultService } from '@/services/system-settings/study-result.service';
import { studyStatusService } from '@/services/system-settings/study-status.service';
import { academicCertificateTypeService } from '@/services/system-settings/academic-certificate-type.service';

export interface IStudyLeave {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   studyPeriodTime?: number;
   acceptanceYear?: string;
   nameOfIssuingCertificate?: string;
   financialInsuranceNo?: string;
   financialInsuranceDate?: string;
   releaseOrderDate?: string;
   releaseOrderNo?: string;
   releaseDate?: string;
   hireOrderNo?: string;
   hireOrderDate?: string;
   hireDate?: string;
   fromDate?: string;
   toDate?: string;
   countryId?: number;
   countryName?: string;
   notes?: string;
   studyFileId: string;
   studyFileDocumentNo?: string;
   studyStatusId?: number;
   studyStatusName?: string;
   academicFieldId?: number;
   academicFieldName?: string;
   studyResultId?: number;
   studyResultName?: string;
   academicAchievementId?: number;
   academicAchievementName?: string;
   academicCertificateTypeId?: number;
   academicCertificateTypeName?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const StudyLeavePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyLeaveService.getStudyLeaves({ Page, PageSize });
   const studyLeaveDetails: IStudyLeave[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   // services
   const academicAchievementData = await academicAchievementService.getAcademicAchievements({ Page: 1, PageSize: 100 });
   const academicFieldData = await academicFieldService.getAcademicFields({ Page: 1, PageSize: 100 });
   const countryData = await countryService.getCountries({ Page: 1, PageSize: 100 });
   const studyResultData = await studyResultService.getStudyResults({ Page: 1, PageSize: 100 });
   const studyStatusData = await studyStatusService.getStudyStatuses({ Page: 1, PageSize: 100 });
   const academicCertificateTypeData = await academicCertificateTypeService.getAcademicCertificateTypes({ Page: 1, PageSize: 100 });

   // data
   const academicAchievement: [] = academicAchievementData?.data?.items ?? [];
   const academicField: [] = academicFieldData?.data?.items ?? [];
   const country: [] = countryData?.data?.items ?? [];
   const studyResult: [] = studyResultData?.data?.items ?? [];
   const studyStatus: [] = studyStatusData?.data?.items ?? [];

   const academicCertificateType: [] = academicCertificateTypeData?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyLeaveToolbar
               academicAchievement={academicAchievement}
               academicField={academicField}
               country={country}
               studyResult={studyResult}
               studyStatus={studyStatus}
               academicCertificateType={academicCertificateType}
            />
         </div>
         <Separator />
         <div className='w-full'>
            <StudyLeaveTable
               columns={columnsStudyLeave}
               studyLeavesData={studyLeaveDetails}
               academicAchievement={academicAchievement}
               academicField={academicField}
               country={country}
               studyResult={studyResult}
               studyStatus={studyStatus}
               academicCertificateType={academicCertificateType}
            />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};
export default StudyLeavePage;
