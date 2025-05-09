import { typeOfAssignmentService } from '@/services/system-settings/type-of-assignment.service';
import React from 'react';
import AssignmentTypeToolbar from './_components/assignment-type-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import AssignmentTypeTable from './_components/assignment-type-table';
import { columnsAssignmentType } from './_components/columns';

export interface IAssignmentType {
   id: number;
   name?: string;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const AssignmentTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await typeOfAssignmentService.getTypeOfAssignments({ Page, PageSize });
   const dataList: IAssignmentType[] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AssignmentTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <AssignmentTypeTable columns={columnsAssignmentType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AssignmentTypePage;
