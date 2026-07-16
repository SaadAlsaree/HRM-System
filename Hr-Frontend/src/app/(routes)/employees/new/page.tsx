import React from 'react';
import EmployeeForm from '../_components/employee-form';
import { fetchServer } from '@/lib/fetchServer';

const NewEmployeeForm = async () => {
   const [
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

   const jobDegreesList = jobDegrees?.data?.items ?? [];
   const jobTitlesList = jobTitles?.data?.items ?? [];
   const jobCategoriesList = jobCategories?.data?.items ?? [];
   const jobDescriptionsList = jobDescriptions?.data?.items ?? [];
   const directoratesList = directorates?.data?.items ?? [];
   const subDirectoratesList = subDirectorates?.data?.items ?? [];
   const departmentsList = departments?.data?.items ?? [];
   const sectionsList = sections?.data?.items ?? [];
   const unitsList = units?.data?.items ?? [];
   const typeOfJobsList = typeOfJobs?.data?.items ?? [];
   const countriesList = countries?.data?.items ?? [];
   const positionsList = positions?.data?.items ?? [];

   return (
      <div className='flex flex-col gap-4 p-2'>
         <h1 className='text-xl font-semibold text-foreground'>إضافة موظف جديد</h1>
         <EmployeeForm
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

export default NewEmployeeForm;
