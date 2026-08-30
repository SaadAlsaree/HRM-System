import React from 'react';
import Pagination from '@/components/Pagination';
import { columnsAcademicAchievement } from './_components/columns';
import AcademicAchievementToolbar from './_components/academic-achievement-toolbar';
import AcademicAchievementTable from './_components/academic-achievement-table';
import { fetchServer } from '@/lib/fetchServer';
import { Separator } from '@/components/ui/separator';

interface Props {
   searchParams: {
      page?: string;
      PageSize?: string;
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
   const Page = parseInt(searchParams.page || '1') || 1;
   const PageSize = parseInt(searchParams.PageSize || '10') || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>(
      '/CorrectingAcademicAchievement',
      'GET',
      {
         params: {
            Page,
            PageSize
         }
      }
   );
   const academicAchievementData = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

   const academicCertificate = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>(
      '/AcademicCertificateType',
      'GET',
      {
         params: {
            Page: 1,
            PageSize: 100
         }
      }
   );
   const academicCertificateData = (academicCertificate?.items ?? academicCertificate?.data?.items) ?? [];

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
