import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsCertificateCalculation } from './_components/columns';
import ServiceCalculationTable from './_components/certificate-calculation-table';
import ServiceCalculationToolbar from './_components/certificate-calculation-toolbar';
import { correctingAcademicAchievementService} from '@/services/correcting-academic-achievement.service';

interface Props {
    searchParams: {
        page: string;
        PageSize: string;
    };
}

export interface ICertificateCalculation {
    id: string;
    employeeId: string;
    fullName: string;
    jobCode: string;
    lotNumber: string;
    oldJobTitle: string;
    oldJobDescription: string;
    oldDegree: string;
    oldCategory: string;
    jobTitleToId: string;
    jobDescriptionToId: string;
    degreeToId: string;
    jobCategoryToId: string;
    degreePlacementDate: string;
    categoryPlacementDate: string;
    orderNo: string;
    orderDate: string;
    statusName: string;
    status: number;
    note: string;
    attachments?: string[];
}

const CertificateCalculationPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page) || 1;
    const PageSize = parseInt(searchParams.PageSize) || 10;

    const data = await correctingAcademicAchievementService.getCorrectingAcademicAchievement({ Page, PageSize});
    
    const certificateCalculation = data?.data ?? [];
    const totalCount = data?.totalCount ?? 0;

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