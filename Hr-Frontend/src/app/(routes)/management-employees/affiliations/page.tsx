import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import IAffiliation from './_components/affiliation-table';
import { columnsAffiliation } from './_components/columns';
import AffiliationsToolbar from './_components/affiliation-toolbar';
import { affiliationService } from '@/services/affiliation.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
      status?: string;
      searchTerm?: string;
   };
}

export interface IAffiliation {
   id?: string;
  employeeId?: string;
  fullName?: string;
  jobCode?: string;
  lotNumber?: string;
  statusName?: string;
  status?: number;
  typeOfAssignmentId?: number;
  typeOfAssignmentName?: string;
  orderNo?: string;
   orderDate?: string;
   issuingAuthority?: string;
   originalEntity?: string;
   ministry?: string;
  reasonForJoining?: string;
  durationMonths?: number;
  fromDate?: string;
  toDate?: string;
  maxRenewals?: number;
  renewalsCount?: number;
  releaseOrderNo?: string;
  releaseOrderDate?: string;
  releaseDate?: string;
  endOrderNo?: string;
  endOrderDate?: string;
  note?: string;
}

const Affiliations = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;
   const Status = searchParams.status ? parseInt(searchParams.status) : undefined;
   const SearchTerm = searchParams.searchTerm || undefined;

   const data = await affiliationService.getAffiliations({ Page, PageSize, status: Status, searchTerm: SearchTerm });
   const affiliationsData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AffiliationsToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <IAffiliation columns={columnsAffiliation} affiliationsData={affiliationsData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default Affiliations;
