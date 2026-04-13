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
   employeeId: string;
};
const ThanksAndSeniorityProfile = ({ employeeId }: Props) => {
   const [data, setData] = useState<IThanksAndSeniority[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchThanksAndSeniority = async () => {
         setLoading(true);
         try {
            const response = await thanksSeniorityService.getThanksSeniorities({ employeeId, Page: 1, PageSize: 100 });
            setData(response?.data?.items || []);
            setTotalPages(response?.data?.totalCount);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchThanksAndSeniority();
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
               <TableHead align='right'>رقم الكتاب</TableHead>
               <TableHead align='right'>تاريخ الكتاب</TableHead>
               <TableHead align='right'>الجهة المانحة</TableHead>

               {/* <TableHead className='w-[100px] text-center'>
              <AlignJustify className='justify-center' />
           </TableHead> */}
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length === 0 && <h1 className='text-center text-muted-foreground'>لايوجد بيانات !</h1>}

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
