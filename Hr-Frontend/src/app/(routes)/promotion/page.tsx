import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsPromotions } from './_components/columns';
import PromotionTable from './_components/promotion-table';
import PromotionToolbar from './_components/promotion-toolbar';
import { fetchServer } from '@/lib/fetchServer';

interface Props {
    searchParams: {
        page?: string;
        PageSize?: string;
        employeeId?: string;
    };
}

const PromotionsPage = async ({ searchParams }: Props) => {
    const Page = parseInt(searchParams.page || "1");
    const PageSize = parseInt(searchParams.PageSize || "10");
    const employeeId = searchParams.employeeId;

    const data = await fetchServer<{ data?: { items?: any[]; totalCount?: number } }>(
        '/Promotions',
        'GET',
        {
            params: {
                Page,
                PageSize,
                employeeId: employeeId || undefined
            }
        }
    );

    const promotions = data?.data?.items ?? [];
    const totalCount = data?.data?.totalCount ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            <div className='w-full'>
                <PromotionToolbar />
            </div>
            <Separator />
            <div className='w-full'>
                <PromotionTable columns={columnsPromotions} promotionData={promotions} />
                <Separator />
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default PromotionsPage;
