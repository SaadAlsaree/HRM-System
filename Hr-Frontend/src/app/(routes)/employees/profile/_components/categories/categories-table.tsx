'use client';
import { promotionsService } from '@/services/promotions.service';
import React, { useEffect, useState } from 'react';
import { IPromotions } from '../grades/grades-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { columnsCategories } from './columns';

type Props = {
   employeeId: string;
};
const CategoriesTable = ({ employeeId }: Props) => {
   const [promotions, setPromotions] = useState<IPromotions[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchPromotions = async () => {
         setIsLoading(true);
         try {
            const response = await promotionsService.getPromotions({ employeeId, Page: 1, PageSize: 100 });

            setPromotions(response?.data?.items);
            setTotalPages(response?.data?.totalCount);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
            // toast.error('Failed to fetch promotions');
         } finally {
            setIsLoading(false);
         }
      };

      fetchPromotions();
   }, [employeeId]);

   if (totalPages === 0)
      return (
         <div>
            <div>لايوجد بيانات !</div>
         </div>
      );

   if (error) return <div>حدث خطأ أثناء تحميل البيانات !</div>;

   if (isLoading) return <div>جاري التحميل...</div>;

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <Table>
            <TableHeader>
               <TableRow>
                  {columnsCategories?.map((column) => (
                     <TableHead align='right' key={column.value} className={column.className}>
                        {column.label}
                     </TableHead>
                  ))}
                  {/* <TableHead className='w-[100px] text-center'>
                  <AlignJustify className='justify-center' />
               </TableHead> */}
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading && (
                  <TableRow>
                     <TableCell className='h-10 text-center'>جاري التحميل...</TableCell>
                  </TableRow>
               )}
               {promotions.length === 0 && !isLoading && (
                  <TableRow>
                     <TableCell className='h-10 text-center'>لا يوجد بيانات</TableCell>
                  </TableRow>
               )}
               {promotions?.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>

                     <TableCell>{item?.degreeToName}</TableCell>
                     <TableCell>{item?.jobCategoryToName}</TableCell>

                     <TableCell>{item?.bookNo}</TableCell>
                     <TableCell>{item?.bookDate}</TableCell>
                     <TableCell>{item?.dueDateDegree}</TableCell>
                     <TableCell>{item?.note}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default CategoriesTable;
