'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { serviceCalculationService } from '@/services/service-calculation.service';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

interface IServiceCalculation {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   typeOfServiceId?: number;
   countOfMonth?: number;
   orderNo?: string;
   orderDate?: string;
   isPoliticalTermination?: boolean;
   notes?: string;
   typeOfServiceName?: string;
}

type Props = {
   employeeId?: string;
};
const ServiceCalculationProfile = ({ employeeId }: Props) => {
   const [data, setData] = useState<IServiceCalculation[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const { refreshKey } = useEmployeeProfileRefresh();

   useEffect(() => {
      const fetchServiceCalculation = async () => {
         if (!employeeId) {
            setData([]);
            return;
         }

         setLoading(true);
         setError(null);
         try {
            const response = await serviceCalculationService.getServiceCalculations({ employeeId, Page: 1, PageSize: 100 });
            setData(response?.data?.items || []);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchServiceCalculation();
   }, [employeeId, refreshKey]);

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
               <TableHead align='right'>نوع الخدمة</TableHead>
               <TableHead align='right'>المدة المضافة (شهر)</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length === 0 && (
               <TableRow>
                  <TableCell colSpan={2} className='text-center text-muted-foreground'>
                     لايوجد بيانات !
                  </TableCell>
               </TableRow>
            )}
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.typeOfServiceName}</TableCell>
                  <TableCell>{item?.countOfMonth}</TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ServiceCalculationProfile;
