'use client';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IEmployeeInfo } from '../../[id]/page';
import { employeeService } from '@/services/Employee/employee.service';
import { toast } from 'sonner';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';
import { useFetchClient } from '@/lib/fetchClient';

type Props = {
   data: IEmployeeInfo;
};

const PersonalInformation = ({ data }: Props) => {
   const [empData, setEmpData] = useState<IEmployeeInfo>(data);
   const [selectedStatus, setSelectedStatus] = useState<string>('0');
   const { refreshKey, triggerRefresh } = useEmployeeProfileRefresh();
   const fetchClient = useFetchClient();

   useEffect(() => {
      setEmpData(data);
      if (data?.socialStatus !== undefined && data?.socialStatus !== null) {
         setSelectedStatus(data.socialStatus.toString());
      }
   }, [data]);

   useEffect(() => {
      const empId = data?.employeeId ?? data?.id;
      if (!empId) return;

      const refetch = async () => {
         try {
            const response = await fetchClient<{ data?: IEmployeeInfo }>(
               `/EmployeeProfileBaseInfo/GetEmployeeInfo/${empId}`
            );
            if (response?.data) {
               setEmpData(response.data);
               if (response.data.socialStatus !== undefined && response.data.socialStatus !== null) {
                  setSelectedStatus(response.data.socialStatus.toString());
               }
            }
         } catch (err) {
            console.error('Error refreshing personal info:', err);
         }
      };

      if (refreshKey > 0) {
         refetch();
      }
   }, [refreshKey, data?.id, data?.employeeId, fetchClient]);

   const handleUpdateSocialStatus = async (value: string) => {
      const empId = empData?.employeeId ?? empData?.id ?? data?.employeeId ?? data?.id;
      if (!empId) return;

      const statusId = parseInt(value, 10);
      try {
         await employeeService.updateEmployeeSocialStatus(empId, { socialStatus: statusId });
         toast.success('تم تعديل الحالة الزوجية بنجاح');
         triggerRefresh();
      } catch (error) {
         console.error('Failed to update social status:', error);
         toast.error('حدث خطأ أثناء تعديل الحالة الزوجية');
      }
   };

   const MaritalStatus = () => {
      return (
         <Select
            value={selectedStatus}
            onValueChange={(newValue) => {
               setSelectedStatus(newValue);
               handleUpdateSocialStatus(newValue);
            }}
         >
            <SelectTrigger className='w-[200px]'>
               <SelectValue placeholder='اختر الحالة الزوجية' />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value='1'>متزوج</SelectItem>
               <SelectItem value='0'>أعزب</SelectItem>
               <SelectItem value='2'>مطلق</SelectItem>
               <SelectItem value='3'>أرمل</SelectItem>
            </SelectContent>
         </Select>
      );
   };

   const spouseLabel = empData?.gender === 2 ? 'اسم الزوج' : 'اسم الزوجة';
   const spouseValue = empData?.wifeName && empData.wifeName.trim().length > 0 ? empData.wifeName : '----';
   const childrenValue =
      empData?.childrenCount !== undefined && empData?.childrenCount !== null
         ? empData.childrenCount.toString()
         : '----';

   return (
      <div>
         <Card>
            <CardContent className='p-6'>
               <h2 className='text-lg font-semibold mb-4'>المعلومات الشخصية</h2>
               <div className='space-y-2'>
                  {[
                     { label: 'اسم الأم', value: empData?.motherFullName || '----' },
                     { label: 'الرقم الوظيفي', value: empData?.jobCode || '----' },
                     { label: 'الرقم الاحصائي', value: empData?.statisticalIndex || '----' },
                     { label: 'رقم الاضبارة', value: empData?.lotNumber || '----' },
                     { label: 'تاريخ الولادة', value: empData?.birthDate || '----' },
                     { label: 'محل الولادة', value: empData?.birthPlace || '----' },
                     { label: 'الجنسية', value: empData?.countryName || '----' },
                     { label: 'الجنس', value: empData?.gender === 1 ? 'ذكر' : empData?.gender === 2 ? 'أنثى' : '----' },
                     { label: 'الديانة', value: empData?.religion || '----' },
                     { label: 'القومية', value: empData?.nationalism || '----' },
                     { label: spouseLabel, value: spouseValue },
                     { label: 'عدد الأطفال', value: childrenValue },
                     { label: 'الحالة الزوجية', value: <MaritalStatus /> }
                  ].map((item) => (
                     <div key={item.label} className='flex justify-between border-dashed border px-4 py-2'>
                        <span className='text-gray-600 dark:text-gray-400'>{item.label}</span>
                        <span className='font-medium'>{item.value}</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
   );
};

export default PersonalInformation;
