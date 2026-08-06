'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { columnsTrainingCourses } from './columns';
import { employeeCourseService } from '@/services/Employee/employee-course.service';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

interface ITrainingCourses {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   title?: string;
   place?: string;
   startDate?: string;
   endDate?: string;
   evaluation?: string;
   residentEntity?: string;
   courseOrderNo?: string;
   courseOrderDate?: string;
   courseDurationInDays?: number;
   nominationOrderNo?: string;
   nominationOrderDate?: string;
   releaseOrderDate?: string;
   releaseOrderNo?: string;
   releaseDate?: string;
   hireOrderNo?: string;
   hireOrderDate?: string;
   hireDate?: string;
}

type Props = {
   employeeId: string;
};

const TrainingCoursesTable = ({ employeeId }: Props) => {
   const [courses, setCourses] = useState<ITrainingCourses[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const { refreshKey } = useEmployeeProfileRefresh();

   useEffect(() => {
      const fetchCourses = async () => {
         if (!employeeId) {
            setCourses([]);
            return;
         }
         setLoading(true);
         try {
            const response = await employeeCourseService.getEmployeeCourses({ EmployeeId: employeeId });
            setCourses(response?.data?.items || []);
            setError(null);
         } catch (err) {
            console.error('Error fetching training courses:', err);
            setError('حدث خطأ أثناء تحميل البيانات !');
         } finally {
            setLoading(false);
         }
      };
      fetchCourses();
   }, [employeeId, refreshKey]);

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-full whitespace-nowrap'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsTrainingCourses?.map((column) => (
                        <TableHead align='right' key={column.value} className={column.className}>
                           {column.label}
                        </TableHead>
                     ))}
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {loading && (
                     <TableRow>
                        <TableCell colSpan={columnsTrainingCourses?.length || 1} className='text-center py-6 text-muted-foreground'>
                           جاري التحميل...
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && error && (
                     <TableRow>
                        <TableCell colSpan={columnsTrainingCourses?.length || 1} className='text-center py-6 text-red-500'>
                           {error}
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && !error && courses.length === 0 && (
                     <TableRow>
                        <TableCell colSpan={columnsTrainingCourses?.length || 1} className='text-center py-6 text-muted-foreground'>
                           لا توجد بيانات دورات تدريبية
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && !error && courses.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell>{item?.residentEntity}</TableCell>
                        <TableCell>{item?.courseOrderNo}</TableCell>
                        <TableCell>{item?.courseOrderDate}</TableCell>
                        <TableCell>{item?.courseDurationInDays}</TableCell>
                        <TableCell>{item?.startDate}</TableCell>
                        <TableCell>{item?.endDate}</TableCell>
                        <TableCell>{item?.place}</TableCell>
                        <TableCell>{item?.nominationOrderNo}</TableCell>
                        <TableCell>{item?.nominationOrderDate}</TableCell>
                        <TableCell>{item?.evaluation}</TableCell>
                        <TableCell>{item?.releaseOrderNo}</TableCell>
                        <TableCell>{item?.releaseOrderDate}</TableCell>
                        <TableCell>{item?.releaseDate}</TableCell>
                        <TableCell>{item?.hireOrderNo}</TableCell>
                        <TableCell>{item?.hireOrderDate}</TableCell>
                        <TableCell>{item?.hireDate}</TableCell>
                        <TableCell>{item?.statusName}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
            <ScrollBar orientation='horizontal' />
         </ScrollArea>
      </div>
   );
};

export default TrainingCoursesTable;
