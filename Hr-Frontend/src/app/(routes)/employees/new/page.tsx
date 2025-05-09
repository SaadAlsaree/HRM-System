import React from 'react';
import EmployeeForm from '../_components/employee-form';
import { Separator } from '@/components/ui/separator';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobTitleService } from '@/services/system-settings/job-title.service';
import { jobCategoryService } from '@/services/system-settings/job-category.service';
import { jobDescriptionService } from '@/services/system-settings/job-description.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { departmentService } from '@/services/system-settings/department.service';
import { sectionService } from '@/services/system-settings/section.service';
import { unitService } from '@/services/system-settings/unit.service';
import { typeOfJobService } from '@/services/system-settings/type-of-job.service';
import { countryService } from '@/services/system-settings/country.service';
import { positionService } from '@/services/system-settings/position.service';

const NewEmployeeForm = async () => {
   const jobDegrees = await jobDegreeService.getJobDegree();
   const jobDegreesList = jobDegrees?.data?.items ?? [];

   const jobTitles = await jobTitleService.getJobTitle();
   const jobTitlesList = jobTitles?.data?.items ?? [];

   const jobCategories = await jobCategoryService.getJobCategory();
   const jobCategoriesList = jobCategories?.data?.items ?? [];

   const jobDescriptions = await jobDescriptionService.getJobDescription();
   const jobDescriptionsList = jobDescriptions?.data?.items ?? [];

   const directorates = await directorateService.getDirectorates();
   const directoratesList = directorates?.data?.items ?? [];

   const subDirectorates = await subDirectorService.getSubDirectorates();
   const subDirectoratesList = subDirectorates?.data?.items ?? [];

   const departments = await departmentService.getDepartments();
   const departmentsList = departments?.data?.items ?? [];

   const sections = await sectionService.getSection();
   const sectionsList = sections?.data?.items ?? [];

   const units = await unitService.getUnit();
   const unitsList = units?.data?.items ?? [];

   const typeOfJobs = await typeOfJobService.getTypeOfJob();
   const typeOfJobsList = typeOfJobs?.data?.items ?? [];

   const countries = await countryService.getCountries();
   const countriesList = countries?.data?.items ?? [];

   const positions = await positionService.getPositions();
   const positionsList: [] = positions?.data?.items ?? [];

   return (
      <div className='p-2 bg-white rounded-lg border dark:bg-gray-900'>
         <h1 className='text-xl text-gray-800 dark:text-gray-100'>أضافة موظف جديد .</h1>

         <Separator className='my-4' />
         <div className=''>
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
      </div>
   );
};

export default NewEmployeeForm;
