'use client';
import { useFetchClient } from '@/lib/fetchClient';
import React, { useEffect, useState } from 'react';
import { IChangeDegree } from '../grades/grades-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { columnsCategories } from './columns';

type Props = {
   employeeId: string;
};

interface ChangeDegreeListResponse {
   data?: {
      items?: IChangeDegree[];
   };
}

const CategoriesTable = ({ employeeId }: Props) => {
   const fetchClient = useFetchClient();
   const [changeDegrees, setChangeDegrees] = useState<IChangeDegree[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      if (!employeeId) return;

      const fetchChangeDegrees = async () => {
         setIsLoading(true);
         setError(null);
         try {
            const response = await fetchClient<ChangeDegreeListResponse>('/ChangeDegree', 'GET', {
               params: {
                  EmployeeId: employeeId,
                  Page: 1,
                  PageSize: 100
               }
            });

            setChangeDegrees(response?.data?.items ?? []);
         } catch (error) {
            console.error('Error fetching change degrees:', error);
            setChangeDegrees([]);
            setError('Failed to fetch change degrees');
         } finally {
            setIsLoading(false);
         }
      };

      fetchChangeDegrees();
   }, [employeeId, fetchClient]);

   if (error) return <div>حدث خطأ أثناء تحميل البيانات !</div>;

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <Table>
            <TableHeader>
               <TableRow>
                  {columnsCategories.map((column) => (
                     <TableHead align='right' key={column.value} className={column.className}>
                        {column.label}
                     </TableHead>
                  ))}
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading && (
                  <TableRow>
                     <TableCell colSpan={columnsCategories.length} className='h-10 text-center'>
                        جاري التحميل...
                     </TableCell>
                  </TableRow>
               )}
               {changeDegrees.length === 0 && !isLoading && (
                  <TableRow>
                     <TableCell colSpan={columnsCategories.length} className='h-10 text-center'>
                        لا يوجد بيانات
                     </TableCell>
                  </TableRow>
               )}
               {changeDegrees.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                     <TableCell>{item.jobCategoryFromName}</TableCell>
                     <TableCell>{item.jobCategoryToName}</TableCell>
                     <TableCell>{item.newCategoryDueDate}</TableCell>
                     <TableCell>{item.jobDegreeToName}</TableCell>
                     <TableCell>{item.orderNo}</TableCell>
                     <TableCell>{item.statusName}</TableCell>
                     <TableCell>{item.note}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default CategoriesTable;
