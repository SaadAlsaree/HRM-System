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
      page?: string;
      PageSize?: string;
      search?: string;
   };
}

const EmployeeListPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page ?? '', 10) || 1;
   const PageSize = parseInt(searchParams.PageSize ?? '', 10) || 12;
   const search = (searchParams.search || '').trim();

   const employees = await employeeService.getEmployees({ Page, PageSize });
   const employeeList: EmployeeList[] = employees?.data?.items ?? [];

   const filteredEmployees = search
      ? employeeList.filter((employee) => {
           const searchable = [employee.fullName, employee.jobCode, employee.lotNumber, employee.statisticalIndex]
              .filter(Boolean)
              .map((value) => String(value).toLowerCase());

           return searchable.some((value) => value.includes(search.toLowerCase()));
        })
      : employeeList;

   const totalCount = employees?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col w-full border rounded-md bg-white dark:bg-gray-900'>
         <EmployeeListToolbar search={search} pageSize={PageSize} />
         <Separator />
         <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {filteredEmployees.map((employee) => (
               <EmployeeCard key={employee.id} employee={employee} />
            ))}

            {filteredEmployees.length === 0 && (
               <div className='col-span-full py-10 text-center text-muted-foreground'>
                  لا توجد نتائج مطابقة لمدخلات البحث.
               </div>
            )}
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
