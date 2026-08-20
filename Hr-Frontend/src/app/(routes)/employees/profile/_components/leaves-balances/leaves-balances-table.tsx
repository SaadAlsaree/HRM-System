'use client';
import { useEffect, useState } from 'react';
import { AlignJustify, Settings2 } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from '@/components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import { logLeavesBalancesService } from '@/services/Leaves/log-leaves-balances.service';
import LeavesBalancesToolbar from './leaves-balances-toolbar';
import LeavesBalancesAttachment from './leaves-balances-attachment';
import { columnsLongLeaveBalances } from './columns';
import LeavesBalancesForm from './leaves-balances-form';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

export interface ILogLeavesBalances {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   countOfDay?: number;
   nameOfIssuing?: string;
   bookNo?: string;
   bookDate?: string;
   note?: string;
}

type Props = {
   employeeId: string;
};

const LeavesBalancesTable = ({ employeeId }: Props) => {
   const [data, setData] = useState<ILogLeavesBalances[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const { refreshKey } = useEmployeeProfileRefresh();
   const postsPerPage = 10;

   useEffect(() => {
      const fetchData = async () => {
         if (!employeeId) {
            setData([]);
            setIsLoading(false);
            return;
         }
         setIsLoading(true);
         try {
            const response = await logLeavesBalancesService.getLogLeavesBalances({
               EmployeeId: employeeId,
               Page: currentPage,
               PageSize: postsPerPage
            });
            setData(response?.data?.items || []);
            setTotalPages(response?.data?.totalPages || 0);
            setError(null);
         } catch (err) {
            setError('فشل في تحميل البيانات');
            console.error(err);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();
   }, [currentPage, employeeId, refreshKey]);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const getPageNumbers = () => {
      const pageNumbers = [];
      const maxPagesToShow = 5;
      let startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage + 1 < maxPagesToShow) {
         startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push(i);
      }

      return pageNumbers;
   };

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <LeavesBalancesToolbar employeeId={employeeId} />
         </div>
         <Separator />
         <Table>
            <TableHeader>
               <TableRow>
                  {columnsLongLeaveBalances.map((column) => (
                     <TableHead key={column.value} className={column.className}>
                        {column.label}
                     </TableHead>
                  ))}
                  <TableHead className='w-[100px] text-center'>
                     <AlignJustify className='justify-center' />
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading &&
                  Array.from({ length: 3 }).map((_, index) => (
                     <TableRow key={index}>
                        <TableCell colSpan={columnsLongLeaveBalances.length + 1}>
                           <Skeleton className='h-8 w-full' />
                        </TableCell>
                     </TableRow>
                  ))}
               {!isLoading && error && (
                  <TableRow>
                     <TableCell colSpan={columnsLongLeaveBalances.length + 1} className='text-center py-6 text-red-500'>
                        {error}
                     </TableCell>
                  </TableRow>
               )}
               {!isLoading && !error && data.length === 0 && (
                  <TableRow>
                     <TableCell colSpan={columnsLongLeaveBalances.length + 1} className='text-center py-6 text-muted-foreground'>
                        لا توجد بيانات رصيد إجازات
                     </TableCell>
                  </TableRow>
               )}
                {!isLoading &&
                   !error &&
                   data.map((item, index) => (
                      <TableRow key={item?.id || index}>
                         <TableCell>{(item?.id || item?.employeeId)?.toString().toUpperCase().split('-', 1)}</TableCell>
                         <TableCell>{item?.nameOfIssuing}</TableCell>
                         <TableCell>{item?.countOfDay}</TableCell>
                         <TableCell>{item?.bookNo}</TableCell>
                         <TableCell>{item?.bookDate ? item.bookDate.split('T')[0] : ''}</TableCell>
                         <TableCell>
                            <LeavesBalancesAttachment
                               PrimaryTableId={item?.id as string}
                               employeeId={(item?.employeeId || employeeId) as string}
                            />
                         </TableCell>
                         <TableCell>
                            <Popover>
                               <PopoverTrigger asChild>
                                  <Button variant='outline'>الملاحظات</Button>
                               </PopoverTrigger>
                               <PopoverContent>{item?.note || 'لا توجد ملاحظات'}</PopoverContent>
                            </Popover>
                         </TableCell>
                         <TableCell>
                            <div className='flex items-center gap-2'>
                               <LeavesBalancesForm
                                  title=''
                                  icon={<Settings2 className='h-4 w-4' />}
                                  data={item}
                                  variant='ghost'
                                  employeeId={(item?.employeeId || employeeId) as string}
                               />
                            </div>
                         </TableCell>
                      </TableRow>
                   ))}
            </TableBody>
         </Table>

         {/* Pagination Start */}
         {totalPages > 1 && (
            <div className='mt-4 p-2'>
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious
                           onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        />
                     </PaginationItem>
                     {currentPage > 3 && (
                        <>
                           <PaginationItem>
                              <PaginationLink onClick={() => handlePageChange(1)}>
                                 1
                              </PaginationLink>
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationEllipsis />
                           </PaginationItem>
                        </>
                     )}
                     {getPageNumbers().map((pageNumber) => (
                        <PaginationItem key={pageNumber}>
                           <PaginationLink
                              isActive={currentPage === pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                           >
                              {pageNumber}
                           </PaginationLink>
                        </PaginationItem>
                     ))}
                     {currentPage < totalPages - 2 && (
                        <>
                           <PaginationItem>
                              <PaginationEllipsis />
                           </PaginationItem>
                           <PaginationItem>
                              <PaginationLink onClick={() => handlePageChange(totalPages)}>
                                 {totalPages}
                              </PaginationLink>
                           </PaginationItem>
                        </>
                     )}
                     <PaginationItem>
                        <PaginationNext
                           onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         )}
      </div>
   );
};

export default LeavesBalancesTable;
