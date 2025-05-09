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
    id: string;
    employeeId: string;
    fullName: string;
    jobCode: string;
    lotNumber: string;
    jobTitleFromName: string;
    degreeFromName: string;
    jobCategoryFromName: string;
    jobDescriptionFromName: string;
    jobDescriptionToId: number;
    jobDegreeToId: number;
    dueDateDegree: string;
    dueDateCategory: string;
    academicAchievementId: number;
    isCertificateCalculation: boolean;
    createBy: string;
    jobTitleToId: number;
    jobCategoryToId: number;
    bookNo: string;
    bookDate: string;
    statusName: string;
    status: number;
    note: string;
    attachments?: string[];
}

const AcademicAchievementPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page) || 1;
    const PageSize = parseInt(searchParams.PageSize) || 10;

    const data = await correctingAcademicAchievementService.getCorrectingAcademicAchievement({ Page, PageSize});
    const academicAchievementData = data?.data?.items ?? [];
    const totalCount = data?.totalCount ?? 0;

    const academicCertificate = await academicCertificateTypeService.getAcademicCertificateTypes();
    const academicCertificateData = academicCertificate?.data?.items ?? [];


    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <AcademicAchievementToolbar academicCertificateType={academicCertificateData} />
            </div>
            <Separator />
            <div className='w-full'>
                <AcademicAchievementTable columns={columnsAcademicAchievement} academicAchievementData={academicAchievementData} academicCertificateType={academicCertificateData} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default AcademicAchievementPage;