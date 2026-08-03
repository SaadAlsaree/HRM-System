import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsWithholding } from './_components/columns';
import WithholdingTable from './_components/withholding-table';
import WithholdingToolbar from './_components/withholding-toolbar';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
    searchParams: {
        page?: string;
        PageSize?: string;
        employeeId?: string;
    };
}

const PromotionWithholdingPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page || "1");
    const PageSize = parseInt(searchParams.PageSize || "10");
    const employeeId = searchParams.employeeId;

    const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/PromotionWithholding', 'GET', { params: { Page, PageSize, employeeId } });
    const withholdings = (data?.items ?? data?.data?.items) ?? [];
    const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <WithholdingToolbar />
            </div>
            <Separator />
            <div className='w-full'>
                <WithholdingTable columns={columnsWithholding} withholdingData={withholdings} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default PromotionWithholdingPage;
