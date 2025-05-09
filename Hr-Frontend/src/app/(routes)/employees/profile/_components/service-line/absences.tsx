'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { absencesService } from '@/services/Employee/absences.service';

interface AbsenceDetails {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   statisticalIndex?: string;
   bookNo?: string;
   bookDate?: string;
   absenceDate?: string;
   countOfDays?: number;
   note?: string;
}

type Props = {
   employeeId: string;
};
const AbsencesProfile = ({ employeeId }: Props) => {
   const [data, setData] = useState<AbsenceDetails[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchAbsences = async () => {
         setLoading(true);
         try {
            const response = await absencesService.getAbsences({ EmployeeId: employeeId, Page: 1, PageSize: 100 });
            setData(response?.data?.items || []);
            setTotalPages(response?.data?.totalCount);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchAbsences();
   }, [employeeId]);

   if (totalPages === 0)
      return (
         <div>
            <div>لايوجد بيانات !</div>
         </div>
      );

   if (loading)
      return (
         <div>
            <div>جاري التحميل ...</div>
         </div>
      );

   if (error)
      return (
         <div>
            <div>حدث خطأ في التحميل البيانات</div>
         </div>
      );

   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead align='right'>تاريخ الغياب</TableHead>
               <TableHead align='right'>عدد الايام</TableHead>

               {/* <TableHead className='w-[100px] text-center'>
                      <AlignJustify className='justify-center' />
                   </TableHead> */}
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length === 0 && <h1 className='text-center text-muted-foreground'>لايوجد بيانات !</h1>}

            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.absenceDate}</TableCell>
                  <TableCell>{item?.countOfDays}</TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default AbsencesProfile;
