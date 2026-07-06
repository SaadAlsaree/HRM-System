'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { columnsGrades } from './columns';
import React, { useEffect, useState } from 'react';
import { useFetchClient } from '@/lib/fetchClient';

export interface IChangeDegree {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   jobDegreeFromId?: number;
   jobDegreeFromName?: string;
   jobDegreeToId?: number;
   jobDegreeToName?: string;
   jobCategoryFromId?: number;
   jobCategoryFromName?: string;
   jobCategoryToId?: number;
   jobCategoryToName?: string;
   oldDegreeDueDate?: string;
   newDegreeDueDate?: string;
   oldCategoryDueDate?: string;
   newCategoryDueDate?: string;
   orderNo?: string;
   orderDate?: string;
   note?: string;
}

type Props = {
   employeeId?: string;
};

interface ChangeDegreeListResponse {
   data?: {
      items?: IChangeDegree[];
   };
}

const GradesTable = ({ employeeId }: Props) => {
   const fetchClient = useFetchClient();
   const [changeDegrees, setChangeDegrees] = useState<IChangeDegree[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      if (!employeeId) return;

      const fetchChangeDegrees = async () => {
         setIsLoading(true);
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
         } finally {
            setIsLoading(false);
         }
      };

      fetchChangeDegrees();
   }, [employeeId, fetchClient]);

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <Table>
            <TableHeader>
               <TableRow>
                  {columnsGrades.map((column) => (
                     <TableHead align='right' key={column.value} className={column.className}>
                        {column.label}
                     </TableHead>
                  ))}
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading && (
                  <TableRow>
                     <TableCell colSpan={columnsGrades.length} className='h-10 text-center'>
                        جاري التحميل...
                     </TableCell>
                  </TableRow>
               )}
               {changeDegrees.length === 0 && !isLoading && (
                  <TableRow>
                     <TableCell colSpan={columnsGrades.length} className='h-10 text-center'>
                        لا يوجد بيانات
                     </TableCell>
                  </TableRow>
               )}
               {changeDegrees.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                     <TableCell>{item.jobDegreeFromName}</TableCell>
                     <TableCell>{item.jobDegreeToName}</TableCell>
                     <TableCell>{item.newDegreeDueDate}</TableCell>
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

export default GradesTable;
