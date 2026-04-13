'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { columnsTrainingCourses } from './columns';
import { employeeCourseService } from '@/services/Employee/employee-course.service';

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
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchCourses = async () => {
         setLoading(true);
         try {
            const response = await employeeCourseService.getEmployeeCourses({ EmployeeId: employeeId });
            setCourses(response?.data?.items || []);
            setTotalPages(response?.data?.totalCount);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchCourses();
   }, [employeeId]);

   if (totalPages === 0)
      return (
         <div>
            <div>لايوجد بيانات !</div>
         </div>
      );

   if (error) return <div>حدث خطأ أثناء تحميل البيانات !</div>;

   if (loading) return <div>جاري التحميل...</div>;

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-[1380px] whitespace-nowrap '>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsTrainingCourses?.map((column) => (
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
                  {courses?.map((item) => (
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
