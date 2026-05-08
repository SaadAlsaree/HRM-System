'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { thanksSeniorityService } from '@/services/thanks-seniority.service';

interface IThanksAndSeniority {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   typeOfBook?: number;
   typeOfSeniority?: number;
   bookNo?: string;
   dateOfBook?: string;
   bookIssueName?: string;
   reason?: string;
   countOfMonths?: number;
   isDocumentVerify?: boolean;
   calculationDate?: string;
   isCalculation?: boolean;
   note?: string;
}

type Props = {
   employeeId?: string;
};
const ThanksAndSeniorityProfile = ({ employeeId }: Props) => {
   const [data, setData] = useState<IThanksAndSeniority[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchThanksAndSeniority = async () => {
         if (!employeeId) {
            setData([]);
            return;
         }

         setLoading(true);
         setError(null);
         try {
            const response = await thanksSeniorityService.getThanksSeniorities({ EmployeeId: employeeId, Page: 1, PageSize: 100 });
            setData(response?.data?.items || []);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchThanksAndSeniority();
   }, [employeeId]);

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
            <TableHead align='right'>رقم الكتاب</TableHead>
            <TableHead align='right'>تاريخ الكتاب</TableHead>
            <TableHead align='right'>الجهة المانحة</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length === 0 && (
               <TableRow>
                  <TableCell colSpan={3} className='text-center text-muted-foreground'>
                     لايوجد بيانات !
                  </TableCell>
               </TableRow>
            )}

            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.bookNo}</TableCell>
                  <TableCell>{item?.dateOfBook}</TableCell>
                  <TableCell>{item?.bookIssueName}</TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ThanksAndSeniorityProfile;
