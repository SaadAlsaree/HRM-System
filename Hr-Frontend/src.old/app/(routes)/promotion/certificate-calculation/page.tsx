import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsCertificateCalculation } from './_components/columns';
import ServiceCalculationTable from './_components/certificate-calculation-table';
import ServiceCalculationToolbar from './_components/certificate-calculation-toolbar';
import { correctingAcademicAchievementService } from '@/services/correcting-academic-achievement.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface ICertificateCalculation {
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

const CertificateCalculationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await correctingAcademicAchievementService.getCorrectingAcademicAchievement({ Page, PageSize });

   const certificateCalculation = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ServiceCalculationToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <ServiceCalculationTable columns={columnsCertificateCalculation} certificateCalculationData={certificateCalculation} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default CertificateCalculationPage;
