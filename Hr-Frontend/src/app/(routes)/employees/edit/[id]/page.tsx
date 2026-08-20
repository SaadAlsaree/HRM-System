import React from 'react';
import EmployeeForm from '../../_components/employee-form';
import { fetchServer } from '@/lib/fetchServer';
import { notFound } from 'next/navigation';

type Props = {
   params: {
      id: string;
   };
};

const EditEmployeePage = async ({ params }: Props) => {
   const [
      employeeRes,
      jobDegrees,
      jobTitles,
      jobCategories,
      jobDescriptions,
      directorates,
      subDirectorates,
      departments,
      sections,
      units,
      typeOfJobs,
      countries,
      positions
   ] = await Promise.all([
      fetchServer<{ data?: Record<string, unknown> }>(`/Employee/${params.id}`),
      fetchServer<{ data?: { items?: unknown[] } }>('/JobDegree'),
      fetchServer<{ data?: { items?: unknown[] } }>('/JobTitle'),
      fetchServer<{ data?: { items?: unknown[] } }>('/JobCategory'),
      fetchServer<{ data?: { items?: unknown[] } }>('/JobDescription'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Directorate'),
      fetchServer<{ data?: { items?: unknown[] } }>('/SubDirectorate'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Department'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Section'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Unit'),
      fetchServer<{ data?: { items?: unknown[] } }>('/TypeOfJob'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Country'),
      fetchServer<{ data?: { items?: unknown[] } }>('/Position')
   ]);

   const employeeData = employeeRes?.data;
   if (!employeeData) {
      notFound();
   }

   const extractItems = (res: any): unknown[] => {
      if (!res) return [];
      if (Array.isArray(res)) return res;
      if (Array.isArray(res.data)) return res.data;
      if (Array.isArray(res.data?.items)) return res.data.items;
      if (Array.isArray(res.items)) return res.items;
      return [];
   };

   const jobDegreesList = extractItems(jobDegrees);
   const jobTitlesList = extractItems(jobTitles);
   const jobCategoriesList = extractItems(jobCategories);
   const jobDescriptionsList = extractItems(jobDescriptions);
   const directoratesList = extractItems(directorates);
   const subDirectoratesList = extractItems(subDirectorates);
   const departmentsList = extractItems(departments);
   const sectionsList = extractItems(sections);
   const unitsList = extractItems(units);
   const typeOfJobsList = extractItems(typeOfJobs);
   const countriesList = extractItems(countries);
   const positionsList = extractItems(positions);

   return (
      <div className='flex flex-col gap-4 p-2'>
         <h1 className='text-xl font-semibold text-foreground'>تعديل بيانات الموظف</h1>
         <EmployeeForm
            employeeId={params.id}
            data={employeeData as any}
            jobDegreesList={jobDegreesList}
            jobTitlesList={jobTitlesList}
            jobCategoriesList={jobCategoriesList}
            jobDescriptionsList={jobDescriptionsList}
            directoratesList={directoratesList}
            subDirectoratesList={subDirectoratesList}
            departmentsList={departmentsList}
            sectionsList={sectionsList}
            unitsList={unitsList}
            typeOfJobsList={typeOfJobsList}
            countriesList={countriesList}
            positionsList={positionsList}
         />
      </div>
   );
};

export default EditEmployeePage;
