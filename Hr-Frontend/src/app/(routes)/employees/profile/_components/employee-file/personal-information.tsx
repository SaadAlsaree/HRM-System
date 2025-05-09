'use client';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IEmployeeInfo } from '../../[id]/page';
import { employeeService } from '@/services/Employee/employee.service';
import { toast } from 'sonner';

type Props = {
   data: IEmployeeInfo;
};

const PersonalInformation = ({ data }: Props) => {
   const [selectedStatus, setSelectedStatus] = useState<string>('0');

   useEffect(() => {
      if (data?.socialStatus) {
         setSelectedStatus(data.socialStatus.toString());
      }
   }, [data?.socialStatus]);

   const handleUpdateSocialStatus = async (value: string) => {
      if (!data?.employeeId) return;

      const statusId = parseInt(value, 10);
      await employeeService.updateEmployeeSocialStatus(data.employeeId, { socialStatus: statusId });
      toast.success('تم تعديل الحالة الزوجية بنجاح');
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
               <SelectItem value='2'>أعزب</SelectItem>
               <SelectItem value='3'>مطلق</SelectItem>
               <SelectItem value='4'>أرمل</SelectItem>
            </SelectContent>
         </Select>
      );
   };

   return (
      <div>
         <Card>
            <CardContent className='p-6'>
               <h2 className='text-lg font-semibold mb-4'>المعلومات الشخصية</h2>
               <div className='space-y-2'>
                  {[
                     { label: 'اسم الأم', value: data?.motherFullName ?? '----' },
                     { label: 'الرقم الوطني', value: data?.jobCode ?? '----' },
                     { label: 'الرقم العائلي', value: data?.lotNumber ?? '----' },
                     { label: 'تاريخ الولادة', value: data?.birthDate ?? '----' },
                     { label: 'محل الولادة', value: data?.birthPlace ?? '----' },
                     { label: 'الجنسية', value: data?.countryName ?? '----' },
                     { label: 'الجنس', value: data?.gender === 1 ? 'ذكر' : 'أنثى' },
                     { label: 'الديانة', value: data?.religion ?? '----' },
                     { label: 'القومية', value: data?.nationalism ?? '----' },
                     { label: 'أسم الزوج', value: data?.wifeName ?? '----' },
                     { label: 'عدد الأطفال', value: data?.childrenCount ?? '----' },
                     { label: 'الحالة الزوجية', value: <MaritalStatus /> }
                  ].map((item) => (
                     <div key={item.label} className='flex justify-between border-dashed border px-4 py-2'>
                        <span className='text-gray-600'>{item.label}</span>
                        <span>{item.value}</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
   );
};

export default PersonalInformation;
