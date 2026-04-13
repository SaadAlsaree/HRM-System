import React from 'react';
import OrganizationToolbar from './_components/organization-toolbar';
import { Separator } from '@/components/ui/separator';
import { columnsOrg } from './_components/columns';
import OrganizationTable from './_components/organization-table';
import { directorateService } from '@/services/system-settings/directorate.service';
import Pagination from '@/components/Pagination';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const OrganizationsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await directorateService.getDirectorates({ Page, PageSize });
   const directorate: [] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <OrganizationToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <OrganizationTable columns={columnsOrg} OrgData={directorate} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default OrganizationsPage;
