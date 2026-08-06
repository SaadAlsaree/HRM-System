'use client';
import { useEffect, useState } from 'react';
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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { employeeDisciplinary } from '@/services/Employee/employee-disciplinary.service';
import { columnsEmployeeDisciplinary } from './columns';
import AdministrativePenaltiesToolbar from './administrative-penalties-toolbar';
import { Separator } from '@/components/ui/separator';
import SelectStatus from '@/app/_components/select-status';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { AlignJustify, Settings2 } from 'lucide-react';
import AdministrativePenaltiesAttachment from './administrative-penalties-attachment';
import { Button } from '@/components/ui/button';
import AdministrativePenaltiesForm from './administrative-penalties-form';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

export interface IPenalties {
   id?: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   titleOfBook?: string;
   bookNo?: string;
   bookDate?: string;
   stopPromotion?: boolean;
   countOfDayDelay: number;
   note?: string;
   reason?: string;
   disciplinaryLaw?: string;
   typeOfDisciplinaryName?: string;
   typeOfDisciplinaryId?: number;
}

type Props = {
   employeeId: string;
};

const AdministrativePenaltiesTable = ({ employeeId }: Props) => {
   const [data, setData] = useState<IPenalties[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const { refreshKey } = useEmployeeProfileRefresh();
   const postsPerPage = 10;

   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await employeeDisciplinary.patchEmployeeDisciplinary({ id, statusId: value });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (err) {
         console.error('error updating status:', err);
         toast.error('حدث خطأ أثناء تحديث الحالة.');
      }
   };

   useEffect(() => {
      const fetchData = async () => {
         if (!employeeId) {
            setData([]);
            setIsLoading(false);
            return;
         }
         setIsLoading(true);
         try {
            const response = await employeeDisciplinary.getEmployeeDisciplinary({
               Page: currentPage,
               PageSize: postsPerPage,
               EmployeeId: employeeId
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
            <AdministrativePenaltiesToolbar employeeId={employeeId} />
         </div>
         <Separator />
         <ScrollArea className='w-full whitespace-nowrap'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsEmployeeDisciplinary.map((column) => (
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
                           <TableCell colSpan={columnsEmployeeDisciplinary.length + 1}>
                              <Skeleton className='h-8 w-full' />
                           </TableCell>
                        </TableRow>
                     ))}
                  {!isLoading && error && (
                     <TableRow>
                        <TableCell colSpan={columnsEmployeeDisciplinary.length + 1} className='text-center py-6 text-red-500'>
                           {error}
                        </TableCell>
                     </TableRow>
                  )}
                  {!isLoading && !error && data.length === 0 && (
                     <TableRow>
                        <TableCell colSpan={columnsEmployeeDisciplinary.length + 1} className='text-center py-6 text-muted-foreground'>
                           لا توجد بيانات عقوبات إدارية
                        </TableCell>
                     </TableRow>
                  )}
                  {!isLoading &&
                     !error &&
                     data.map((item) => (
                        <TableRow key={item?.id}>
                           <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                           <TableCell>{item?.fullName}</TableCell>
                           <TableCell>{item?.titleOfBook}</TableCell>
                           <TableCell>{item?.typeOfDisciplinaryName}</TableCell>
                           <TableCell>{item?.countOfDayDelay}</TableCell>
                           <TableCell>{item?.bookNo}</TableCell>
                           <TableCell>{item?.bookDate}</TableCell>
                           <TableCell>{item?.disciplinaryLaw}</TableCell>
                           <TableCell>
                              <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                           </TableCell>
                           <TableCell>{item?.stopPromotion ? 'جارية' : 'ملغاة'}</TableCell>
                           <TableCell>{item?.reason || 'لا يوجد'}</TableCell>
                           <TableCell>
                              <AdministrativePenaltiesAttachment
                                 PrimaryTableId={item?.id as string}
                                 employeeId={(item?.employeeId || employeeId) as string}
                              />
                           </TableCell>
                           <TableCell>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button variant='outline'>الملاحظات</Button>
                                 </PopoverTrigger>
                                 <PopoverContent>{item?.note}</PopoverContent>
                              </Popover>
                           </TableCell>
                           <TableCell>
                              <div className='flex items-center gap-2'>
                                 <AdministrativePenaltiesForm
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
            <ScrollBar orientation='horizontal' />
         </ScrollArea>
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

export default AdministrativePenaltiesTable;
