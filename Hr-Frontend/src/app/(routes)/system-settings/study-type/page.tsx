import { studyTypeService } from '@/services/system-settings/study-type.service';
import React from 'react';
import StudyTypeToolbar from './_components/study-type-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import StudyTypeTable from './_components/study-type-table';
import { columnsStudyType } from './_components/columns';

export interface IStudyType {
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

const StudyTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await studyTypeService.getStudyTypes({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <StudyTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <StudyTypeTable columns={columnsStudyType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default StudyTypePage;
