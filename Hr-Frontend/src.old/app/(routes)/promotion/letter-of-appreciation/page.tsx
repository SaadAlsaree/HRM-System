import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsLetterOfAppreciation } from './_components/columns';
import EditJobTitleToolbar from './_components/letter-appreciation-toolbar';
import LetterOfAppreciationTable from './_components/letter-appreciation-table';
import { thanksSeniorityService } from '@/services/thanks-seniority.service';

interface Props {
    searchParams: {
        page: string;
        PageSize: string;
    };
}

export interface ILetterOfAppreciation {
    id: string;
    employeeId: string;
    fullName: string;
    jobCode: string;
    lotNumber: string;
    typeOfBook?: string;
    typeOfSeniority?: string;
    bookNo?: string;
    dateOfBook?: string;
    bookIssueName?: string;
    reason?: string;
    countOfMonths?: string;
    isDocumentVerify?: boolean;
    calculationDate?: string;
    statusName: string;
    status: number;
    note: string;
    attachments?: string[];
}

const LetterOfAppreciationPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page) || 1;
    const PageSize = parseInt(searchParams.PageSize) || 10;

    const data = await thanksSeniorityService.getThanksSeniorities({ Page, PageSize});
    const letterOfAppreciationData = data?.data?.items ?? [];
    const totalCount = data?.data?.totalCount ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <EditJobTitleToolbar />
            </div>
            <Separator />
            <div className='w-full'>
                <LetterOfAppreciationTable columns={columnsLetterOfAppreciation} letterOfAppreciationData={letterOfAppreciationData} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default LetterOfAppreciationPage;