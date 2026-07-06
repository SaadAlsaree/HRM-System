import { fetchServer } from '@/lib/fetchServer';
import ProfileHeader from '../_components/profile-header';
import ProfileTabs from '../_components/profile-tabs';

export interface IEmployeeAdministrativeOrder {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   ministerialOrderAppointingOrderNo?: string;
   ministerialOrderAppointingOrderDate?: string;
   administrativeOrderForAppointmentOrderNo?: string;
   administrativeOrderForAppointmentOrderDate?: string;
   administrativeOrderToCommenceOrderNo?: string;
   administrativeOrderToCommenceOrderDate?: string;
   administrativeOrderToConfirmAgeOrderNo?: string;
   administrativeOrderToConfirmAgeOrderDate?: string;
}

export interface IEmployeeEducationInfo {
   id: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   academicFieldIdIsInHiring?: number;
   academicFieldNameIsInHiring?: string;
   academicAchievementIdIsInHiring?: number;
   academicAchievementNameIsInHiring?: string;
   academicFieldIdIsCurrent?: number;
   academicFieldNameIsCurrent?: string;
   academicAchievementIdIsCurrent?: number;
   academicAchievementNameIsCurrent?: string;
   isDocumentVerify?: boolean;
}

export interface IEmployeeManagementInfo {
   id: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   degreeNameIsInHiring?: string;
   categoryNameIsInHiring?: string;
   degreeNameIsCurrent?: string;
   categoryNameIsCurrent?: string;
   stopJobDegreeName?: string;
   jobTitleName?: string;
   jobDescriptionName?: string;
   directorateName?: string;
   subDirectorateName?: string;
   departmentName?: string;
   sectionName?: string;
   unitName?: string;
   positionName?: string;
   stopPromotion?: boolean;
}

export interface IEmployeeInfo {
   id: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   statisticalIndex?: string;
   motherFullName?: string;
   gender?: number;
   birthPlace?: string;
   birthDate?: string;
   socialStatus?: number;
   notes?: string;
   statusWorkingId?: number;
   nationalism?: string;
   religion?: string;
   avatar?: string;
   fileExtension?: string;
   countryName?: string;
   typeOfJobName?: string;
   medicalTest?: boolean;
   isReEmployed?: boolean;
   isBehaviorCode?: boolean;
   endOfServiceDate?: string;
   isPinned?: boolean;
   wifeName?: string;
   childrenCount?: number;
}

export interface ILotEmployee {
   id: string;
   employeeId: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   statisticalIndex?: string;
   motherFullName?: string;
   gender?: number;
   birthPlace?: string;
   birthDate?: string;
   socialStatus?: number;
   notes?: string;
   statusWorkingId?: number;
   nationalism?: string;
   religion?: string;
   avatar?: string;
   fileExtension?: string;
   countryName?: string;
   typeOfJobName?: string;
   medicalTest?: boolean;
   isReEmployed?: boolean;
   isBehaviorCode?: boolean;
   endOfServiceDate?: string;
}

type Props = {
   params: { id: string };
   searchParams: {
      page: string;
      PageSize: string;
   };
};
export default async function EmployeeProfile({ params, searchParams }: Props) {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 12;

   const [administrativeOrder, educationInfo, managementInfo, employeeInfo, lotEmployee] = await Promise.all([
      fetchServer<{ data?: IEmployeeAdministrativeOrder }>(
         `/EmployeeProfileBaseInfo/GetAdministrativeOrder/${params.id}`
      ),
      fetchServer<{ data?: IEmployeeEducationInfo }>(
         `/EmployeeProfileBaseInfo/GetEducationInfo/${params.id}`
      ),
      fetchServer<{ data?: IEmployeeManagementInfo }>(
         `/EmployeeProfileBaseInfo/GetManagementInfo/${params.id}`
      ),
      fetchServer<{ data?: IEmployeeInfo }>(
         `/EmployeeProfileBaseInfo/GetEmployeeInfo/${params.id}`
      ),
      fetchServer<{ data?: ILotEmployee }>(
         '/EmployeeProfileBaseInfo/GetLotEmployee/GetLotEmployee',
         'GET',
         {
            params: {
               EmployeeId: params.id,
               Page,
               PageSize
            }
         }
      )
   ]);

   const EmployeeAdministrativeOrder = administrativeOrder?.data as IEmployeeAdministrativeOrder;
   const EmployeeEducationInfo = educationInfo?.data as IEmployeeEducationInfo;
   const EmployeeManagementInfo = managementInfo?.data as IEmployeeManagementInfo;
   const EmployeeInfoData = employeeInfo?.data as IEmployeeInfo;
   const LotEmployeeData = lotEmployee?.data as ILotEmployee;

   return (
      <div className='container  p-4'>
         {/* Header Section */}
         <ProfileHeader data={EmployeeInfoData} />

         {/* Tabs Navigation */}
         <ProfileTabs
            AdministrativeOrder={EmployeeAdministrativeOrder}
            EducationInfo={EmployeeEducationInfo}
            ManagementInfo={EmployeeManagementInfo}
            EmployeeInfo={EmployeeInfoData}
            LotEmployee={LotEmployeeData}
         />
      </div>
   );
}
