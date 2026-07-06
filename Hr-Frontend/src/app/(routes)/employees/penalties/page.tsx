import { fetchServer } from '@/lib/fetchServer';
import PenaltiesToolbar from './_components/penalties-toolbar';
import { Separator } from '@/components/ui/separator';
import PenaltiesTable from './_components/penalties-table';
import { columnsPenalties } from './_components/columns';
import Pagination from '@/components/Pagination';

export interface IDisciplinaryDetails {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   titleOfBook?: string;
   bookNo?: string;
   bookDate?: string;
   stopPromotion?: boolean;
   countOfDayDelay?: number;
   note?: string;
   reason?: string;
   disciplinaryLaw?: string;
   typeOfDisciplinaryName?: string;
   typeOfDisciplinaryId?: number;
}

interface Props {
   searchParams: {
      page?: string;
      PageSize?: string;
      employeeId?: string;
      EmployeeId?: string;
   };
}
const PenaltiesPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page ?? '', 10) || 1;
   const PageSize = parseInt(searchParams.PageSize ?? '', 10) || 10;
   const employeeId = (searchParams.employeeId || searchParams.EmployeeId || '').trim();

   const data = await fetchServer<{ data?: { items?: IDisciplinaryDetails[]; totalCount?: number } }>(
      '/EmployeeDisciplinary',
      'GET',
      {
         params: {
            Page,
            PageSize,
            EmployeeId: employeeId || undefined
         }
      }
   );
   const disciplinaryDetails: IDisciplinaryDetails[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <PenaltiesToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <PenaltiesTable columns={columnsPenalties} disciplinaryDetails={disciplinaryDetails} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default PenaltiesPage;
