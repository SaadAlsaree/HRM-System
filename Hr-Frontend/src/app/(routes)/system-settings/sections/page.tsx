import { departmentService } from '@/services/system-settings/department.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import { sectionService } from '@/services/system-settings/section.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import SectionToolbar from './_components/section-toolbar';
import { Separator } from '@/components/ui/separator';
import SectionTable from './_components/section-table';
import { columnsSection } from './_components/columns';
import Pagination from '@/components/Pagination';

export interface ISection {
   id: number;
   directorateId?: number | string | null;
   subDirectorateId?: number | string | null;
   departmentId?: number | string | null;
   directorateName?: string;
   subDirectorateName?: string;
   departmentName?: string;
   name?: string;
   shortKey?: string;
   status?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const SectionsPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const department = await departmentService.getDepartments();
   const departmentList: [] = department?.data?.items ?? [];

   const directorate = await directorateService.getDirectorates();
   const directorateList: [] = directorate?.data?.items ?? [];

   const subDirectorate = await subDirectorService.getSubDirectorates();
   const subDirectorateList: [] = subDirectorate?.data?.items ?? [];

   const sections = await sectionService.getSection({ Page, PageSize });
   const sectionsList: [] = sections?.data?.items ?? [];

   const totalCount = sections?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <SectionToolbar directorateList={directorateList} subDirectorateList={subDirectorateList} DepartmentData={departmentList} />
         </div>
         <Separator />
         <div>
            <SectionTable
               columns={columnsSection}
               DepartmentData={departmentList}
               directorateList={directorateList}
               subDirectorateList={subDirectorateList}
               data={sectionsList}
            />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default SectionsPage;
