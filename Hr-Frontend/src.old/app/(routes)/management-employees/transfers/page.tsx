import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import TransferToolbar from './_components/transfer-toolbar';
import { columnsAffiliatesFromOrg } from './_components/columns';
import TransferTable from './_components/transfer-table';
import { movementsService } from '@/services/movements.service';

interface Props {
    searchParams: {
        page: string;
        PageSize: string;
    };
}

export interface ITransfer{
    id: string;
    employeeId: string;
    fullName: string;
    jobCode: string;
    orderNo: string;
    orderDate: string;
    typeOfAssignmentId: string;
    fromDirectorateId?: number;
    fromSubDirectorateId?: number;
    fromDepartmentId?: number;
    fromSectionId?: number;
    fromUniteId?: number;
    toDirectorateId?: number;
    toSubDirectorateId?: number;
    toDepartmentId?: number;
    toSectionId?: number;
    toUnitId?: number;
    releaseOrderNo?: string;
    releaseOrderDate?: string;
    releaseDate?: string;
    hireOrderDate?: string;
    hireDate?: string;
    hireOrderNo?: string;
    note?: string;
    status?: string;
    attachments?: string[];
}

const TransferPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page) || 1;
    const PageSize = parseInt(searchParams.PageSize) || 10;

    const data = await movementsService.getMovements({ Page, PageSize });
    const transferData = data?.data ?? [];
    const totalCount = data?.totalCount ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <TransferToolbar />
            </div>
            <Separator />
            <div className='w-full'>
                <TransferTable columns={columnsAffiliatesFromOrg} transferData={transferData} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default TransferPage;