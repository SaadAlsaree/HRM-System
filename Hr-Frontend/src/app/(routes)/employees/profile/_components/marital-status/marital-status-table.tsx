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
import { IMarriageInformation } from './index';

type Props = {
   employeeId: string;
   data?: IMarriageInformation[] | null;
   columns?: { label: string; value: string; className?: string }[];
};

const MaritalStatusTable = ({ employeeId, data, columns = columnsMaritalStatus }: Props) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [marriageData, setMarriageData] = useState<IMarriageInformation[] | null>(null);
   const postsPerPage = 10;

   useEffect(() => {
      if (data) {
         setMarriageData(data);
         setIsLoading(false);
         return;
      }

      const fetchData = async () => {
         setIsLoading(true);
         try {
            const response = await marriageInformationService.getMarriageInformation({
               employeeId: employeeId,
               Page: currentPage,
               PageSize: postsPerPage
            });
            setMarriageData(response?.data?.items);
            setTotalPages(response?.data?.totalPages || 0);
            setError(null);
         } catch (err) {
            setError('Failed to fetch data');
            console.error(err);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();
   }, [currentPage, employeeId, data]);

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

   if (error) return <div>حدث خطاء اثناء تحميل البيانات</div>;

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
               {isLoading
                  ? Array.from({ length: postsPerPage }).map((_, index) => (
                       <TableRow key={index}>
                          <TableCell>
                             <Skeleton className='h-4 w-8' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                          <TableCell>
                             <Skeleton className='h-4 w-full' />
                          </TableCell>
                       </TableRow>
                    ))
                  : marriageData?.map((item) => (
                       <TableRow key={item?.employeeId}>
                          <TableCell>{item?.employeeId?.toString().toUpperCase().split('-', 1)}</TableCell>
                          <TableCell>{item?.fullName}</TableCell>
                          <TableCell>{item?.childrenCount}</TableCell>
                          <TableCell>فعال</TableCell>
                          <TableCell>
                             <MaritalStatusAttachment PrimaryTableId={item?.employeeId as string} employeeId={item?.employeeId as string} />
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
         <div className='mt-4'>
            <Pagination>
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious href='#' onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
                  </PaginationItem>
                  {currentPage > 3 && (
                     <>
                        <PaginationItem>
                           <PaginationLink href='#' onClick={() => handlePageChange(1)}>
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
                        <PaginationLink href='#' isActive={currentPage === pageNumber} onClick={() => handlePageChange(pageNumber)}>
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
                           <PaginationLink href='#' onClick={() => handlePageChange(totalPages)}>
                              {totalPages}
                           </PaginationLink>
                        </PaginationItem>
                     </>
                  )}
                  <PaginationItem>
                     <PaginationNext href='#' onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </div>
      </div>
   );
};

export default MaritalStatusTable;
