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

import { marriageInformationService } from '@/services/marriage-information.service';
import MaritalStatusToolbar from './marital-status-toolbar';
import MaritalStatusAttachment from './marital-status-attachment';
import { columnsMaritalStatus } from './columns';
import MaritalStatusForm from './marital-status-form';
import { IMarriageInformation } from './marital-status-form';

import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

type Props = {
   employeeId?: string;
   data?: IMarriageInformation[] | null;
   columns?: { label: string; value: string; className?: string }[];
};

const MaritalStatusTable = ({ employeeId, data, columns = columnsMaritalStatus }: Props) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [marriageData, setMarriageData] = useState<IMarriageInformation[]>([]);
   const postsPerPage = 10;
   const { refreshKey } = useEmployeeProfileRefresh();

   useEffect(() => {
      const fetchData = async () => {
         if (!employeeId) {
            setMarriageData([]);
            setIsLoading(false);
            return;
         }
         setIsLoading(true);
         try {
            const response = await marriageInformationService.getMarriageInformation({
               employeeId: employeeId,
               Page: currentPage,
               PageSize: postsPerPage
            });
            setMarriageData(response?.data?.items || []);
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
            <MaritalStatusToolbar employeeId={employeeId} />
         </div>
         <Separator />
         <Table>
            <TableHeader>
               <TableRow>
                  {columns.map((column) => (
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
                        <TableCell colSpan={columns.length + 1}>
                           <Skeleton className='h-8 w-full' />
                        </TableCell>
                     </TableRow>
                  ))}
               {!isLoading && error && (
                  <TableRow>
                     <TableCell colSpan={columns.length + 1} className='text-center py-6 text-red-500'>
                        {error}
                     </TableCell>
                  </TableRow>
               )}
               {!isLoading && !error && marriageData.length === 0 && (
                  <TableRow>
                     <TableCell colSpan={columns.length + 1} className='text-center py-6 text-muted-foreground'>
                        لا توجد بيانات الحالة الزوجية
                     </TableCell>
                  </TableRow>
               )}
               {!isLoading &&
                  !error &&
                  marriageData.map((item) => (
                     <TableRow key={item?.id || item?.employeeId}>
                        <TableCell>{(item?.id || item?.employeeId)?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.childrenCount}</TableCell>
                        <TableCell>فعال</TableCell>
                        <TableCell>
                           <MaritalStatusAttachment PrimaryTableId={(item?.id || item?.employeeId) as string} employeeId={(employeeId || item?.employeeId) as string} />
                        </TableCell>
                        <TableCell>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button variant='outline'>الملاحظات</Button>
                              </PopoverTrigger>
                              <PopoverContent>{item?.notes}</PopoverContent>
                           </Popover>
                        </TableCell>
                        <TableCell>
                           <div className='flex items-center gap-2'>
                              <MaritalStatusForm
                                 title=''
                                 icon={<Settings2 className='h-4 w-4' />}
                                 data={item}
                                 variant='ghost'
                                 employeeId={employeeId}
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
                        <PaginationPrevious onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
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
                           <PaginationLink isActive={currentPage === pageNumber} onClick={() => handlePageChange(pageNumber)}>
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
                        <PaginationNext onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         )}
      </div>
   );
};

export default MaritalStatusTable;
