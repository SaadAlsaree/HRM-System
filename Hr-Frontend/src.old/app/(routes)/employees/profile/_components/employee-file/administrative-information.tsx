import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { IEmployeeEducationInfo, IEmployeeInfo, IEmployeeManagementInfo } from '../../[id]/page';

type Props = {
   data: IEmployeeEducationInfo;
   Management: IEmployeeManagementInfo;
   EmployeeInfo: IEmployeeInfo;
};

const AdministrativeInformation = ({ data, Management, EmployeeInfo }: Props) => {
   return (
      <div>
         <Card>
            <CardContent className='p-6'>
               <h2 className='text-lg font-semibold mb-4'>المعلومات الادارية</h2>
               <div className='space-y-2'>
                  {[
                     { label: 'التحصيل الدراسي الحالي', value: data?.academicAchievementNameIsCurrent ?? '---' },
                     { label: 'التخصص الدراسي الحالي', value: data?.academicFieldNameIsCurrent ?? '---' },
                     { label: 'الدرجة الحالية', value: Management?.degreeNameIsCurrent ?? '---' },
                     { label: 'الفئة الحالية', value: Management?.categoryNameIsCurrent ?? '---' },
                     { label: 'الدائرة أو المكتب', value: Management?.directorateName ?? '---' },
                     { label: 'المديرية', value: Management?.subDirectorateName ?? '---' },
                     { label: 'القسم', value: Management?.departmentName ?? '---' },
                     { label: 'الشعبة', value: Management?.sectionName ?? '---' },
                     { label: 'الوحدة', value: Management?.unitName ?? '---' },
                     { label: 'المنصب', value: Management?.positionName ?? '---' },
                     { label: 'العنوان الوظيفي', value: Management?.jobTitleName ?? '---' },
                     { label: 'الوصف الوظيفي', value: Management?.jobDescriptionName ?? '---' },
                     { label: 'درجة التوقف', value: Management?.stopJobDegreeName ?? '---' },
                     { label: 'الموظف موقوف من العلاوات؟', value: Management?.stopPromotion ? 'نعم' : 'كلا' },
                     { label: 'تاريخ الخروج من الخدمة ', value: EmployeeInfo?.endOfServiceDate ?? '---' }
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

export default AdministrativeInformation;
