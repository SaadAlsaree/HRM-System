'use client';
import React, { useEffect, useState } from 'react';
import { contactInformationService } from '@/services/contact-information.service';
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from '@/components/ui/pagination';
import ContactInformationToolbar from './contact-information-toolbar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import ContactInformationTable from './contact-information-table';
import { columnsContactInformation } from './columns';

export interface IContactInformation {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   levelOfRelationshipId?: number;
   levelOfRelationshipName?: string;
   phoneNumber?: string;
   contactName?: string;
   notes?: string;
}

type Props = {
   employeeId: string;
};
const ContactInformationPage = ({ employeeId }: Props) => {
   const [data, setData] = useState<IContactInformation[] | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | undefined>();
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      contactInformationService
         .getContactInformation({ employeeId, Page: currentPage, PageSize: 20 })
         .then((response) => {
            setData(response?.data?.items);
            setTotalPages(response?.data?.totalPages || 0);
            setError(undefined);
         })

         .catch((error) => {
            setError(error);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [currentPage, employeeId]);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };
   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <ContactInformationToolbar employeeId={employeeId} />
         </div>
         <Separator />
         <div className='w-full'>
            {error && <div className='text-red-500 p-4'>{error}</div>}
            {loading && (
               <div className='p-4'>
                  <Skeleton className='h-12 w-full mb-2' />
                  <Skeleton className='h-12 w-full mb-2' />
                  <Skeleton className='h-12 w-full mb-2' />
               </div>
            )}
            <ContactInformationTable data={data as IContactInformation[]} columns={columnsContactInformation} />
            <Separator />
            {/* Pagination */}
            <div className='p-4'>
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious
                           onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                           // disabled={currentPage === 1}
                        />
                     </PaginationItem>
                     {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                           <PaginationLink onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1}>
                              {index + 1}
                           </PaginationLink>
                        </PaginationItem>
                     ))}
                     <PaginationItem>
                        <PaginationNext
                           onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                           // disabled={currentPage === totalPages}
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         </div>
      </div>
   );
};

export default ContactInformationPage;
