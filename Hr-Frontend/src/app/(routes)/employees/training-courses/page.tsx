import { employeeCourseService } from '@/services/Employee/employee-course.service';
import React from 'react';
import TrainingCoursesToolbar from './_components/training-courses-toolbar';
import { columnsCourse } from './_components/columns';
import { Separator } from '@/components/ui/separator';
import Pagination from '@/components/Pagination';
import TrainingCoursesTable from './_components/training-courses-table';

export interface ICourse {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   title?: string;
   place?: string;
   startDate?: string;
   endDate?: string;
   evaluation?: string;
   residentEntity?: string;
   courseOrderNo?: string;
   courseOrderDate?: string;
   courseDurationInDays?: number;
   nominationOrderNo?: string;
   nominationOrderDate?: string;
   releaseOrderDate?: string;
   releaseOrderNo?: string;
   releaseDate?: string;
   hireOrderNo?: string;
   hireOrderDate?: string;
   hireDate?: string;
}

interface Props {
   searchParams: {
      page: string;
      PageSize: string;
   };
}

const TrainingCoursesPage = async ({ searchParams }: Props) => {
   const Page = parseInt(searchParams.page) || 1;
   const PageSize = parseInt(searchParams.PageSize) || 10;

   const data = await employeeCourseService.getEmployeeCourses({ Page, PageSize });
   const courseList: ICourse[] = data?.data?.items ?? [];
   const totalCount = data?.data?.totalCount ?? 0;

   return (
      <div className='flex flex-col border rounded-lg bg-white dark:bg-gray-900 gap-2'>
         <div className='w-full'>
            <TrainingCoursesToolbar />
         </div>
         <Separator />
         <div className='w-full'>
            <TrainingCoursesTable columns={columnsCourse} courseList={courseList} />

            <Separator />
            {/* Pagination */}
            <div className='p-2'>
               <Pagination itemCount={totalCount} pageSize={PageSize} currentPage={Page} />
            </div>
         </div>
      </div>
   );
};

export default TrainingCoursesPage;
