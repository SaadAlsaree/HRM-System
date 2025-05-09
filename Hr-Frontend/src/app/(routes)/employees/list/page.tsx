import { employeeService } from '@/services/Employee/employee.service';
import EmployeeCard from '../_components/employee-card';
import EmployeeListToolbar from '../_components/employee-list-toolbar';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';

export interface EmployeeData {
   statisticalIndex?: string | number | null;
   jobCode?: string | null;
   lotNumber?: string | null;
   firstName?: string | null;
   secondName?: string | null;
   thirdName?: string | null;
   fourthName?: string | null;
   surName?: string | null;
   motherFirstName?: string | null;
   motherSecondName?: string | null;
   motherThirdName?: string | null;
   motherSurName?: string | null;
   genderId?: number | null;
   birthPlace?: string | null;
   birthDate?: string | null;
   socialStatus?: number | null;
   statusWorkingId?: number | null;
   hireDate?: string | null;
   isBehaviorCode?: boolean | null;
   typeOfJobId?: number | null;
   medicalTest?: boolean | null;
   isReEmployed?: boolean | null;
   isStillWorking?: number | null;
   isMovedFromOutside?: boolean | null;
   notes?: string | null;
   nationalism?: string | null;
   religion?: string | null;
   countryId?: number | null;
   jobCategoryId?: number | null;
   jobDegreeId?: number | null;
   employmentDegreeId?: number | null;
   jobTitleId?: number | null;
   jobDescriptionId?: number | null;
   directorateId?: number | null;
   subDirectorateId?: number | null;
   departmentId?: number | null;
   sectionId?: number | null;
   unitId?: number | null;
   positionId?: number | null;
}

export interface EmployeeList {
   statisticalIndex: string;
   jobTitle: string | null;
   pathOfProfile: string;
   avatar: string | null;
   extinctionFile: string | null;
   attachmentSetting: string | null;
   nationalism: string;
   religion: string;
   countryId: number;
   countryName: string;
   id: string;
   employeeId: string;
   fullName: string;
   jobCode: string;
   lotNumber: string;
   statusName: string | null;
   status: number;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const EmployeeListPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 12;

   const employees = await employeeService.getEmployees({ Page, PageSize });
   const employeeList: EmployeeList[] = employees?.data?.items ?? [];

   const totalCount = employees?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col w-full border rounded-md bg-white dark:bg-gray-900'>
         <EmployeeListToolbar />
         <Separator />
         <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {employeeList.map((employee) => (
               <EmployeeCard key={employee.id} employee={employee} />
            ))}
         </div>

         <Separator />
         {/* Pagination */}
         <div className='p-2'>
            <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
         </div>
      </div>
   );
};

export default EmployeeListPage;
