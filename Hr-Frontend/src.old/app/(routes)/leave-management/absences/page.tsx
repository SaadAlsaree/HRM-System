import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import AbsencesToolbar from './_components/absences-toolbar';
import AbsencesTable from './_components/absences-table';
import { columnsAbsences } from './_components/columns';
import { absencesService } from '@/services/Employee/absences.service';

interface Props {
    searchParams: {
        page: string;
        PageSize: string;
    };
}

export interface IAbsence {
    id: string;
    employeeId: string;
    fullName: string;
    jobCode: string;
    lotNumber: string;
    statusName: string;
    status: number;
    statisticalIndex: string;
    bookNo: string;
    bookDate: string;
    absenceDate: string;
    countOfDays: number;
    note: string;
    attachments?: string[];
}


const AbsencesPage = async ({ searchParams }: Props) => {
    // تحويل معاملات البحث إلى أرقام
    const Page = parseInt(searchParams.page) || 1;
    const PageSize = parseInt(searchParams.PageSize) || 10;

    // جلب البيانات من الخادم
    const data = await absencesService.getAbsences({ Page, PageSize });
    const absencesData = data?.data ?? [];
    const totalCount = data?.totalCount ?? 0;

    return (
        <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
            {/* شريط الأدوات */}
            <div className='w-full'>
                <AbsencesToolbar />
            </div>
            <Separator />

            {/* جدول الغيابات */}
            <div className='w-full'>
                <AbsencesTable columns={columnsAbsences} absencesData={absencesData} />
                <Separator />

                {/* الترقيم (Pagination) */}
                <div className='p-2'>
                    <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
                </div>
            </div>
        </div>
    );
};

export default AbsencesPage;