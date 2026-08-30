import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsAnnualAllowance } from './_components/columns';
import AnnualAllowanceTable from './_components/annual-allowance-table';
import AnnualAllowanceToolbar from './_components/annual-allowance-toolbar';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
    searchParams: {
        page?: string;
        PageSize?: string;
        employeeId?: string;
    };
}

const AnnualAllowancePage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page || "1");
    const PageSize = parseInt(searchParams.PageSize || "10");
    const employeeId = searchParams.employeeId;

    const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>(
        '/AnnualAllowance',
        'GET',
        {
            params: {
                Page,
                PageSize,
                ...(employeeId ? { EmployeeId: employeeId } : {})
            }
        }
    );
    const annualAllowances = (data?.items ?? data?.data?.items) ?? [];
    const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <AnnualAllowanceToolbar />
            </div>
            <Separator />
            <div className='w-full'>
                <AnnualAllowanceTable columns={columnsAnnualAllowance} annualAllowanceData={annualAllowances} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default AnnualAllowancePage;
