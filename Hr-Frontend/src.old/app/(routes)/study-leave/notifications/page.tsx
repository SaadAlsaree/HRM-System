import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import { columnsStudyLeave } from './_components/columns';
import { studyLeaveService } from '@/services/study-leave.service';
import StudyLeaveToolbar from './_components/study-leave-notifications-toolbar';
import StudyLeaveTable from './_components/study-leave-notifications-table';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IStudyLeave {
   id: string;
   employeeId: string;
   employeeFullName: string;
   studyPeriodTime: number;
   releaseOrderDate: string;
   hireDate: string;
   remainingDays: number;
   statusName: string;
   status: number;
   note: string;
   attachments?: string[];
}

const StudyLeavePage = async ({ searchParams }: Props) => {
   // تحويل معاملات البحث إلى أرقام
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   // جلب البيانات من الخادم
   const data = await studyLeaveService.getStudyLeaves({ Page, PageSize });
   const studyLeavesData = data?.data ?? [];
   const totalCount = data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         {/* شريط الأدوات */}
         <div className='w-full'>
            <StudyLeaveToolbar />
         </div>
         <Separator />

         {/* جدول إجازات الدراسة */}
         <div className='w-full'>
            <StudyLeaveTable columns={columnsStudyLeave} studyLeavesData={studyLeavesData} />
            <Separator />

            {/* الترقيم (Pagination) */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default StudyLeavePage;
