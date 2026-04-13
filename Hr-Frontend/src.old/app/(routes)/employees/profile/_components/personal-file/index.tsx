'use client';
import React, { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { columnsDocument } from './columns';
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { employeeProfileService } from '@/services/Employee/employee-profile.service';
import PersonalFileToolbar from './personal-file-toolbar';
import PersonalFileTable from './personal-file-table';

export interface IPersonalFile {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   statisticalIndex?: string;
   motherFullName?: string;
   gender?: number;
   birthPlace?: string;
   birthDate?: string; // ISO date format
   socialStatus?: number;
   notes?: string;
   statusWorkingId?: number;
   nationalism?: string;
   religion?: string;
   avatar?: string;
   fileExtension?: string;
   countryName?: string;
   typeOfJobName?: string;
   medicalTest?: boolean;
   isReEmployed?: boolean;
   isBehaviorCode?: boolean;
   endOfServiceDate?: string; // ISO date format
}

type Props = {
   employeeId?: string;
};

const PersonalFilePage = ({ employeeId }: Props) => {
   const initialPage = 1;
   const pageSize = 10;
   const [data, setData] = useState<{ items: IPersonalFile[]; totalPages: number } | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | undefined>();
   const [currentPage, setCurrentPage] = useState(initialPage);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await employeeProfileService.getLotEmployee({
               Page: currentPage,
               PageSize: pageSize,
               EmployeeId: employeeId
            });
            setData(response?.data);
            setTotalPages(response?.data?.totalPages || 0);
            setError(undefined);
         } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [currentPage, pageSize, employeeId]);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PersonalFileToolbar />
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

            <PersonalFileTable data={data?.items} employeeId={employeeId as string} columns={columnsDocument} />
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

export default PersonalFilePage;
