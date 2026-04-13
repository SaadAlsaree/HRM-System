import React from 'react';
import { IEmployeeAdministrativeOrder, IEmployeeEducationInfo, IEmployeeInfo, IEmployeeManagementInfo } from '../../[id]/page';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import ServiceCalculationProfile from './service-calculation';
import ThanksAndSeniorityProfile from './thanks-and-seniority';
import EmployeeDisciplinaryProfile from './employee-disciplinary';
import AbsencesProfile from './absences';

type Props = {
   data: IEmployeeAdministrativeOrder;
   EducationInfo: IEmployeeEducationInfo;
   ManagementInfo: IEmployeeManagementInfo;
   EmployeeInfo: IEmployeeInfo;
};
const ServiceLinePage = ({ EducationInfo, EmployeeInfo, ManagementInfo, data }: Props) => {
   return (
      <div className='flex flex-col items-center gap-2 border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <div className='w-full'>
            <h1 className='text-center'>خط الخدمة</h1>
            <Separator />
         </div>
         <div className='w-full grid grid-cols-1 xl:grid-cols-12 gap-2 mt-4'>
            {/* 1 */}
            <div className='xl:col-span-4'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>الرقم الوظيفي</h1>
                  <Input value={EmployeeInfo?.jobCode} disabled />
               </div>
            </div>
            <div className='xl:col-span-4'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>الاسم الرباعي واللقب</h1>
                  <Input value={EmployeeInfo?.fullName} disabled />
               </div>
            </div>
            <div className='xl:col-span-4'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>حالة الموظف</h1>
                  <Input value={EmployeeInfo?.statusName && '---'} disabled />
               </div>
            </div>
            {/* 2 */}
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>مسقط الرأس</h1>
                  <Input value={EmployeeInfo?.birthPlace && '---'} disabled />
               </div>
            </div>

            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>تاريخ المباشرة</h1>
                  <Input value={data?.administrativeOrderToCommenceOrderDate && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>التولد</h1>
                  <Input value={EmployeeInfo?.birthDate && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>التحصيل الدراسي الحالي</h1>
                  <Input value={EducationInfo?.academicAchievementNameIsCurrent && '---'} disabled />
               </div>
            </div>
            {/* 3 */}
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>الدرجة الوظيفية</h1>
                  <Input value={ManagementInfo?.degreeNameIsCurrent && '---'} disabled />
               </div>
            </div>

            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>العنوان الوظيفي</h1>
                  <Input value={ManagementInfo?.jobTitleName && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>الوصف الوظيفي</h1>
                  <Input value={ManagementInfo?.jobDescriptionName && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>المنصب</h1>
                  <Input value={ManagementInfo?.positionName && '---'} disabled />
               </div>
            </div>

            {/* 4 */}

            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>رقم الامر الاداري بالتعيين</h1>
                  <Input value={data?.administrativeOrderForAppointmentOrderNo && '---'} disabled />
               </div>
            </div>

            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>تاريخ الامر الاداري بالتعيين</h1>
                  <Input value={data?.administrativeOrderForAppointmentOrderDate && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>رقم الامر الاداري بالمباشرة</h1>
                  <Input value={data?.administrativeOrderToCommenceOrderNo && '---'} disabled />
               </div>
            </div>
            <div className='xl:col-span-3'>
               <div className='w-full flex flex-col gap-2'>
                  <h1>تاريخ الامر الاداري بالمباشرة</h1>
                  <Input value={data?.administrativeOrderToCommenceOrderDate && '---'} disabled />
               </div>
            </div>
         </div>

         <Separator className='my-4' />
         <div className='w-full space-y-2'>
            <h1 className='text-2xl font-semibold'>الخدمة المضافة</h1>
            <ServiceCalculationProfile employeeId={EmployeeInfo?.employeeId} />
         </div>

         <Separator className='my-4' />

         <div className='w-full space-y-2'>
            <h1 className='text-2xl font-semibold'>التشكرات</h1>
            <ThanksAndSeniorityProfile employeeId={EmployeeInfo?.employeeId} />
         </div>
         <Separator className='my-4' />

         <div className='w-full space-y-2'>
            <h1 className='text-2xl font-semibold'>العقوبات</h1>
            <EmployeeDisciplinaryProfile employeeId={EmployeeInfo?.employeeId} />
         </div>
         <Separator className='my-4' />

         <div className='w-full space-y-2'>
            <h1 className='text-2xl font-semibold'>الغيابات</h1>
            <AbsencesProfile employeeId={EmployeeInfo?.employeeId} />
         </div>
      </div>
   );
};

export default ServiceLinePage;
