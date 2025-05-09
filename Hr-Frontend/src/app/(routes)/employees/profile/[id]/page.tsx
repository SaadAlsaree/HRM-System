import { employeeProfileService } from '@/services/Employee/employee-profile.service';
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

   const AdministrativeOrder = await employeeProfileService.getAdministrativeOrder(params.id);
   const EmployeeAdministrativeOrder: IEmployeeAdministrativeOrder = AdministrativeOrder.data as IEmployeeAdministrativeOrder;

   const EducationInfo = await employeeProfileService.getEducationInfo(params.id);
   const EmployeeEducationInfo: IEmployeeEducationInfo = EducationInfo.data as IEmployeeEducationInfo;

   const ManagementInfo = await employeeProfileService.getManagementInfo(params.id);
   const EmployeeManagementInfo: IEmployeeManagementInfo = ManagementInfo.data as IEmployeeManagementInfo;

   const EmployeeInfo = await employeeProfileService.getEmployeeInfo(params.id);
   const EmployeeInfoData: IEmployeeInfo = EmployeeInfo.data as IEmployeeInfo;

   const LotEmployee = await employeeProfileService.getLotEmployee({ EmployeeId: params.id, Page, PageSize });
   const LotEmployeeData: ILotEmployee = LotEmployee.data as ILotEmployee;

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
