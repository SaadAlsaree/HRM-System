import { employeeDocumentsTypeService } from '@/services/Employee/employee-documents-type.service';
import React from 'react';
import { columnsEmployeeDocumentType } from './_components/columns';
import EmployeeDocumentTypeToolbar from './_components/employee-document-type-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import EmployeeDocumentTypeTable from './_components/employee-document-type-table';

export interface IEmployeeDocumentType {
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

const EmployeeDocumentTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await employeeDocumentsTypeService.getEmployeeDocumentsType({ Page, PageSize });
   const dataList: [] = data?.data?.items ?? [];

   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <EmployeeDocumentTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <EmployeeDocumentTypeTable columns={columnsEmployeeDocumentType} data={dataList} />
            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default EmployeeDocumentTypePage;
