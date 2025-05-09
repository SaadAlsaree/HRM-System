import React from 'react';
import RelationshipToolbar from './_components/relationship-toolbar';
import { Separator } from '@/components/ui/separator';
import RelationshipTable from './_components/relationship-table';
import Pagination from '@/components/Pagination';
import { columnsRelationship } from './_components/columns';
import { levelOfRelationshipService } from '@/services/system-settings/level-of-relationship.service';

export interface IRelationship {
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

const DegreeOfRelationshipPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await levelOfRelationshipService.getLevelOfRelationship({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <RelationshipToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <RelationshipTable columns={columnsRelationship} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default DegreeOfRelationshipPage;
