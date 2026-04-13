import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BasicInformation from './employee-file/basic-information';
import PersonalInformation from './employee-file/personal-information';
import { IEmployeeAdministrativeOrder, IEmployeeEducationInfo, IEmployeeInfo, IEmployeeManagementInfo, ILotEmployee } from '../[id]/page';
import AdministrativeInformation from './employee-file/administrative-information';
import AdministrativeOrderPage from '../_components/administrative-order';
import DocumentPage from './document';
import PersonalFilePage from './personal-file';
import HomeAddressPage from './home-address';
import ContactInformationPage from './contact-information';
import GradesTable from './grades/grades-table';
import CategoriesTable from './categories/categories-table';
import AcademicAchievementTable from './academic-achievement/academic-achievement-table';
import AdministrativePenaltiesTable from './administrative-penalties/administrative-penalties-table';
import TrainingCoursesTable from './training-courses/training-courses-table';
import LeavesBalancesTable from './leaves-balances/leaves-balances-table';
import ServiceLinePage from './service-line';
import MaritalStatusTable from './marital-status/marital-status-table';
import AcademicAchievementPage from './academic-achievement';

type Props = {
   AdministrativeOrder: IEmployeeAdministrativeOrder;
   EducationInfo: IEmployeeEducationInfo;
   ManagementInfo: IEmployeeManagementInfo;
   EmployeeInfo: IEmployeeInfo;
   LotEmployee: ILotEmployee;
};

const ProfileTabs = ({ AdministrativeOrder, EducationInfo, EmployeeInfo, ManagementInfo }: Props) => {
   return (
      <div>
         <Tabs defaultValue='employee-file' className='w-full'>
            <TabsList className='mb-6 bg-white dark:bg-gray-900  p-2 rounded-lg shadow overflow-x-auto flex h-auto'>
               <TabsTrigger
                  value='employee-file'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  ملف الموظف
               </TabsTrigger>
               <TabsTrigger
                  value='marital-status'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الحالة الزوجية
               </TabsTrigger>
               <TabsTrigger
                  value='admin-portal'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الأوامر الإدارية
               </TabsTrigger>
               <TabsTrigger
                  value='document'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  المستمسكات
               </TabsTrigger>
               <TabsTrigger
                  value='personal-additions'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الأضبارة الشخصية
               </TabsTrigger>
               <TabsTrigger
                  value='residence'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  عنوان السكن
               </TabsTrigger>
               <TabsTrigger
                  value='contacts'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  جهات الاتصال
               </TabsTrigger>
               <TabsTrigger
                  value='grades'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الدرجات
               </TabsTrigger>
               <TabsTrigger
                  value='categories'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الفئات
               </TabsTrigger>
               <TabsTrigger
                  value='education'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  التحصيل الدراسي
               </TabsTrigger>
               <TabsTrigger
                  value='penalties'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  العقوبات الإدارية
               </TabsTrigger>
               <TabsTrigger
                  value='training'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  الدورات التدريبية
               </TabsTrigger>
               <TabsTrigger
                  value='service-line'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  خط الخدمة
               </TabsTrigger>
               <TabsTrigger
                  value='vacation-balance'
                  className='active:bg-primary data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg'
               >
                  رصيد الإجازات
               </TabsTrigger>
            </TabsList>

            {/* Employee File Tab Content */}
            <TabsContent value='employee-file' className='mt-0 لال'>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {/* Basic Information */}
                  <BasicInformation
                     data={AdministrativeOrder}
                     EducationInfo={EducationInfo}
                     ManagementInfo={ManagementInfo}
                     EmployeeInfo={EmployeeInfo}
                  />
                  {/* Administrative information */}

                  <AdministrativeInformation data={EducationInfo} Management={ManagementInfo} EmployeeInfo={EmployeeInfo} />
                  {/* Personal Information */}
                  <PersonalInformation data={EmployeeInfo} />
               </div>
            </TabsContent>
            <TabsContent value='admin-portal' className='mt-0'>
               <AdministrativeOrderPage employeeId={EmployeeInfo?.employeeId} />
            </TabsContent>
            <TabsContent value='marital-status' className='mt-0'>
               <MaritalStatusTable employeeId={EmployeeInfo?.employeeId} />
            </TabsContent>
            <TabsContent value='document' className='mt-0'>
               <DocumentPage employeeId={EmployeeInfo?.employeeId} />
            </TabsContent>
            <TabsContent value='personal-additions' className='mt-0'>
               <PersonalFilePage employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='residence' className='mt-0'>
               <HomeAddressPage employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='contacts' className='mt-0'>
               <ContactInformationPage employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='grades' className='mt-0'>
               <GradesTable employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='categories' className='mt-0'>
               <CategoriesTable employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='education' className='mt-0'>
               <AcademicAchievementPage employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='penalties' className='mt-0'>
               <AdministrativePenaltiesTable employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='training' className='mt-0'>
               <TrainingCoursesTable employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            <TabsContent value='service-line' className='mt-0'>
               <ServiceLinePage
                  data={AdministrativeOrder}
                  EducationInfo={EducationInfo}
                  ManagementInfo={ManagementInfo}
                  EmployeeInfo={EmployeeInfo}
               />
            </TabsContent>
            <TabsContent value='vacation-balance' className='mt-0'>
               <LeavesBalancesTable employeeId={EmployeeInfo?.employeeId as string} />
            </TabsContent>
            {/* Placeholder content for other tabs */}
         </Tabs>
      </div>
   );
};

export default ProfileTabs;
