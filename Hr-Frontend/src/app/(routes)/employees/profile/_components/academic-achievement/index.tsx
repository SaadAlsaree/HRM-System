'use client';
import React, { useEffect, useState } from 'react';

import { Status } from '@/types';
import { educationInfoService } from '@/services/education-info.service';
import AcademicAchievementToolbar from './academic-achievement-toolbar';
import { Separator } from '@/components/ui/separator';
import AcademicAchievementTable from './academic-achievement-table';

import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import { IEducationInfo } from './academic-achievement-table';

type Props = {
   employeeId?: string;
   status?: Status;
   initialPage?: number;
   pageSize?: number;
};

const AcademicAchievementPage = ({ initialPage = 1, pageSize = 10, employeeId, status }: Props) => {
   const [data, setData] = useState<{ items: IEducationInfo[]; totalPages: number } | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | undefined>();
   const [currentPage, setCurrentPage] = useState(initialPage);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await educationInfoService.getEducationInfo({
               Page: currentPage,
               PageSize: pageSize,
               employeeId,
               status
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
   }, [currentPage, pageSize, employeeId, status]);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <AcademicAchievementToolbar employeeId={employeeId} />
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
            {!loading && data?.items && (
               <AcademicAchievementTable employeeId={employeeId || ''} />
            )}
            <Separator />
            {/* Pagination */}
            <div className='p-4'>
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious
                           onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
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
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         </div>
      </div>
   );
};

export default AcademicAchievementPage;
