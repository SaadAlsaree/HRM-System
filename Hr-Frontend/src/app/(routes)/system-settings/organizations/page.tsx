import { fetchServer } from '@/lib/fetchServer';
import React from 'react';
import OrganizationToolbar from './_components/organization-toolbar';
import { Separator } from '@/components/ui/separator';
import { columnsOrg } from './_components/columns';
import OrganizationTable from './_components/organization-table';
import { directorateService } from '@/services/system-settings/directorate.service';
import Pagination from '@/components/Pagination';

export interface ApiResponse<T = Record<string, unknown>> {
   data?: {
      items?: T[];
      totalCount?: number;
   };
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const OrganizationsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await fetchServer<{ items?: any[]; totalCount?: number; data?: { items?: any[]; totalCount?: number } }>('/Directorate', 'GET', { params: { Page, PageSize } });
   const directorate = (data?.items ?? data?.data?.items) ?? [];
   const totalCount = (data?.totalCount ?? data?.data?.totalCount) ?? 0;

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
