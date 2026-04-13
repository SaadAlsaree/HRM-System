import { handPullService } from '@/services/system-settings/hand-pull.service';
import React from 'react';
import { columnsHandPull } from './_components/columns';
import PullHandToolbar from './_components/pull-hand-toolbar';
import PullHandTable from './_components/pull-hand-table';
import Pagination from '@/components/Pagination';
import { Separator } from '@/components/ui/separator';

export interface IHandPull {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   withdrawHandPullOrderNo?: string;
   withdrawHandPullOrderDate?: string;
   raiseHandPullOrderNo?: string;
   raiseHandPullOrderDate?: string;
   note?: string;
   createAt?: string;
   createBy?: string;
   lastUpdateAt?: string;
   lastUpdateBy?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const PullAndLiftHandPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await handPullService.getHandPull({ Page, PageSize });
   const handPullList: IHandPull[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PullHandToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <PullHandTable columns={columnsHandPull} handPullList={handPullList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PullAndLiftHandPage;
