'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { columnsGrades } from './columns';
import React, { useState, useEffect } from 'react';
import { promotionsService } from '@/services/promotions.service';

export interface IPromotions {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   sentPromotionGroupId?: number;
   sentPromotionGroupName?: string;
   degreeFromId?: number;
   degreeFromName?: string;
   degreeToId?: number;
   degreeToName?: string;
   jobCategoryFromId?: number;
   jobCategoryFromName?: string;
   jobCategoryToId?: number;
   jobCategoryToName?: string;
   oldEducationInformationId?: string;
   oldEducationInformationName?: string;
   newEducationInformationId?: string;
   newEducationInformationName?: string;
   dueDateDegree?: string; // assuming it's a date string
   dueDateCategory?: string; // assuming it's a date string
   bookNo?: string;
   bookDate?: string; // assuming it's a date string
   categoryPerMonth?: number;
   serviceRecycle?: number;
   typeOfChange?: number;
   note?: string;
}

type Props = {
   employeeId?: string;
};
const GradesTable = ({ employeeId }: Props) => {
   const [promotions, setPromotions] = useState<IPromotions[]>([]);
   const [isLoading, setIsLoading] = useState(false);
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
            // toast.error('Failed to fetch promotions');
         } finally {
            setIsLoading(false);
         }
      };

      fetchPromotions();
   }, [employeeId]);

   console.log(totalPages);

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <Table>
            <TableHeader>
               <TableRow>
                  {columnsGrades?.map((column) => (
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
                     <TableCell>{item?.dueDateDegree}</TableCell>

                     <TableCell>{item?.bookDate}</TableCell>
                     <TableCell>{item?.note}</TableCell>
                     <TableCell>{item?.bookDate}</TableCell>
                     <TableCell>{item?.dueDateDegree}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default GradesTable;
