import React from 'react';
import { Separator } from '@/components/ui/separator';
import CertificateTypeTable from './_components/certificate-type-table';
import { columnsCertificateType } from './_components/columns';
import CertificateTypeToolbar from './_components/certificate-type-toolbar';
import { academicCertificateTypeService } from '@/services/system-settings/academic-certificate-type.service';
import Pagination from '@/components/Pagination';

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}
const CertificateTypePage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await academicCertificateTypeService.getAcademicCertificateTypes({ Page, PageSize });
   const academicCertificateType: [] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <CertificateTypeToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <CertificateTypeTable columns={columnsCertificateType} CertificateTypeData={academicCertificateType} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default CertificateTypePage;
