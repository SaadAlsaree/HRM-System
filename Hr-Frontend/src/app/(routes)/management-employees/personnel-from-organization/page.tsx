import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import IAffiliatesFromOrg from './_components/from-org-table';
import { columnsAffiliatesFromOrg } from './_components/columns';
import AffiliatesFromOrgToolbar from './_components/from-org-toolbar';
import { assignmentService } from '@/services/assignment.service';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IAffiliatesFromOrg {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   typeOfAssignmentId: string;
   orderNo: string;
   orderDate: string;
   assignmentSite: number;
   assignedFromOrganization: string;
   assignedToOrganization: string;
   durationOfAssignment: number;
   releaseOrderDate: string;
   releaseOrderNo: string;
   assignmentOrderDate: string;
   assignmentOrderNo: string;
   releaseDate: string;
   hireDate: string;
   hireOrderNo: string;
   hireOrderDate: string;
   endOrderNo: string;
   endOrderDate: string;
   endReleaseOrderDate: string;
   endReleaseOrderNo: string;
   endHireNo: string;
   endHireDate: string;
   note: string;
   lastUpdateBy: string;
   attachments: string[];
   status: string;
}

const AffiliatesFromOrg = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await assignmentService.getAssignment({ Page, PageSize });
   const affiliatesFromOrgData = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AffiliatesFromOrgToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <IAffiliatesFromOrg columns={columnsAffiliatesFromOrg} affiliatesFromOrgData={affiliatesFromOrgData} />
            <Separator />
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default AffiliatesFromOrg;
