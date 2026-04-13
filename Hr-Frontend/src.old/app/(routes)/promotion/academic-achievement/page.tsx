import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAcademicAchievement } from './_components/columns';
import AcademicAchievementToolbar from './_components/academic-achievement-toolbar';
import AcademicAchievementTable from './_components/academic-achievement-table';
import { correctingAcademicAchievementService } from '@/services/correcting-academic-achievement.service';
import { academicCertificateTypeService } from '@/services/system-settings/academic-certificate-type.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IAcademicAchievement {
   degreeFromId: number;
   degreeFromName: string;
   degreeToId: number;
   degreeToName: string;

   jobCategoryFromId: number;
   jobCategoryFromName: string;
   jobCategoryToId: number;
   jobCategoryToName: string;

   jobTitleFromId: number;
   jobTitleFromName: string;
   jobDescriptionFromId: number;
   jobDescriptionFromName: string;

   jobTitleToId: number;
   jobTitleToName: string;
   jobDescriptionToId: number;
   jobDescriptionToName: string;

   isCertificateCalculation: boolean;

   dueDateDegree: string; // Format: YYYY-MM-DD
   dueDateCategory: string; // Format: YYYY-MM-DD
   bookNo: string;
   bookDate: string; // Format: YYYY-MM-DD
   note: string;

   academicAchievementId: number;
   academicAchievementName: string;

   id: string; // UUID
   employeeId: string; // UUID
   fullName: string;
   jobCode: string;
   lotNumber: string;
   statusName: string;
   status: number;
}

const AcademicAchievementPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await correctingAcademicAchievementService.getCorrectingAcademicAchievement({ Page, PageSize });
   const academicAchievementData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount;

   const academicCertificate = await academicCertificateTypeService.getAcademicCertificateTypes();
   const academicCertificateData = academicCertificate?.data?.items ?? [];

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicAchievementToolbar academicCertificateType={academicCertificateData} />
         </div>
         <Separator />
         <div className='w-full'>
            <AcademicAchievementTable
               columns={columnsAcademicAchievement}
               academicAchievementData={academicAchievementData}
               academicCertificateType={academicCertificateData}
            />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AcademicAchievementPage;
