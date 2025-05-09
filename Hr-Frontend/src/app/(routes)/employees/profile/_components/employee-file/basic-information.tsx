import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IEmployeeAdministrativeOrder, IEmployeeEducationInfo, IEmployeeInfo, IEmployeeManagementInfo } from '../../[id]/page';

type Props = {
   data: IEmployeeAdministrativeOrder;
   EducationInfo: IEmployeeEducationInfo;
   ManagementInfo: IEmployeeManagementInfo;
   EmployeeInfo: IEmployeeInfo;
};
const BasicInformation = ({ data, EducationInfo, ManagementInfo, EmployeeInfo }: Props) => {
   return (
      <div>
         <Card>
            <CardContent className='p-6'>
               <h2 className='text-lg font-semibold mb-4'>المعلومات الأساسية</h2>
               <div className='space-y-2'>
                  {[
                     { label: 'رقم الأمر الوزاري بالتعيين', value: data?.ministerialOrderAppointingOrderNo ?? '----' },
                     { label: 'تاريخ الأمر الوزاري بالتعيين', value: data?.ministerialOrderAppointingOrderDate ?? '----' },
                     { label: 'رقم الأمر الإداري بالتعيين', value: data?.administrativeOrderForAppointmentOrderNo ?? '----' },
                     { label: 'تاريخ الأمر الإداري بالتعيين', value: data?.administrativeOrderForAppointmentOrderDate ?? '----' },
                     { label: 'رقم الأمر الإداري بالمباشرة', value: data?.administrativeOrderToCommenceOrderNo ?? '----' },
                     { label: 'تاريخ الأمر الإداري بالمباشرة', value: data?.administrativeOrderToCommenceOrderDate ?? '----' },
                     { label: 'رقم الأمر الإداري بتثبيت العمر', value: data?.administrativeOrderToConfirmAgeOrderNo ?? '----' },
                     { label: 'تاريخ الأمر الإداري بتثبيت العمر', value: data?.administrativeOrderToConfirmAgeOrderDate ?? '----' },
                     { label: 'التحصيل الدراسي عند التعيين', value: EducationInfo?.academicAchievementNameIsInHiring ?? '----' },
                     { label: 'التخصص الدراسي عند التعيين', value: EducationInfo?.academicFieldNameIsInHiring ?? '----' },
                     { label: 'صحة صدور الوظيفة الدراسية', value: EducationInfo?.isDocumentVerify ? 'نعم' : 'كلا' },
                     { label: 'الدرجة عند التعيين', value: ManagementInfo?.degreeNameIsInHiring ?? '----' },
                     { label: 'الفئة عند التعيين', value: ManagementInfo?.categoryNameIsInHiring ?? '----' },
                     { label: 'نوع التعيين', value: EmployeeInfo?.typeOfJobName ?? '----' },
                     { label: 'إعادة تعيين', value: EmployeeInfo?.isReEmployed ? 'نعم' : 'كلا' },
                     { label: 'خاضع للفحص الطبي', value: EmployeeInfo?.medicalTest ? 'نعم' : 'كلا' },
                     { label: 'لائحة السنوات', value: EmployeeInfo?.isBehaviorCode ? 'نعم' : 'كلا' },
                     { label: 'القوانين المشمول بها', value: <Button>عرض</Button> }
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

export default BasicInformation;
