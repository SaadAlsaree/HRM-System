import React from 'react';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

import { documentVerificationService } from '@/services/document-verification.service';
import DocumentVerificationToolbar from './_components/issue-validation-toolbar';
import DocumentVerificationTable from './_components/issue-validation-table';
import { columnsDocumentVerification } from './_components/columns';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

export interface IDocumentVerification {
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   statusName: string;
   status: number;
   documentNumber: string;
   documentDate: string;
   recipient: string;
   answered: boolean;
   sendingDate: string;
   note: string;
   attachments?: string[];
}

const DocumentVerificationPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await documentVerificationService.getDocumentVerification({ Page, PageSize });
   const documentVerificationData = data?.data ?? [];
   const totalCount = data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <DocumentVerificationToolbar />
         </div>
         <Separator />

         <div className='w-full'>
            <DocumentVerificationTable columns={columnsDocumentVerification} documentVerificationData={documentVerificationData} />
            <Separator />

            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default DocumentVerificationPage;
