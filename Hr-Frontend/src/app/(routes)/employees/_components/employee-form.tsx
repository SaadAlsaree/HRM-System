'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
   Stepper,
   StepperContent,
   StepperDescription,
   StepperIndicator,
   StepperItem,
   StepperList,
   StepperNext,
   StepperPrev,
   StepperSeparator,
   StepperTitle,
   StepperTrigger,
} from '@/components/ui/stepper';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/spinner';
import { useRouter } from 'next/navigation';
import { EmployeePayload, employeeService, type UpdateEmployeePayload } from '@/services/Employee/employee.service';
import { formatDate } from '@/utils/format-date';
import { Building2, Briefcase, GraduationCap, IdCard, User } from 'lucide-react';

const genderOptions = [
   { label: 'ذكر', value: 1 },
   { label: 'أنثى', value: 2 }
];

const socialStatusOptions = [
   { label: 'أعزب', value: 0 },
   { label: 'متزوج', value: 1 },
   { label: 'مطلق', value: 2 },
   { label: 'أرمل', value: 3 }
];

const medicalTestOptions = [
   { label: 'نعم', value: true },
   { label: 'كلا', value: false }
];

const isBehaviorCodeOptions = [
   { label: 'نعم', value: true },
   { label: 'كلا', value: false }
];

const isMovedFromOutsideOptions = [
   { label: 'نعم', value: true },
   { label: 'كلا', value: false }
];

const isReEmployedOptions = [
   { label: 'نعم', value: true },
   { label: 'كلا', value: false }
];

const workingStatusOptions = [
   { label: 'مستمر في الخدمة', value: 0 },
   { label: 'متوفي', value: 1 },
   { label: 'شهيد', value: 2 },
   { label: 'استقالة', value: 3 },
   { label: 'نقل خدمات', value: 4 },
   { label: 'تقاعد', value: 5 },
   { label: 'عزل', value: 6 },
   { label: 'خدمة مقطوعة', value: 7 },
   { label: 'خدمة منسوخة', value: 8 }
];

// The backend returns success/failure in several shapes depending on the failure path:
//  - business failure (Response<T>):        { succeeded: false, message: "..." }
//  - validation failure (ProblemDetails):   { title, errors: { DomainValidations: ["..."] } }
//  - generic 500 (JsonErrorResponse):       { messages: ["..."] }
// These helpers normalize them into a single Arabic message + failure flag.
function extractApiMessage(result: Record<string, unknown> | undefined | null): string | null {
   if (!result) return null;
   // 1) Response<T>: { message } or { Message }
   const msg = (result.message ?? result.Message) as string | undefined;
   if (typeof msg === 'string' && msg.trim()) return msg;
   // 2) ProblemDetails: { errors: { DomainValidations: ["..."] } }
   const errors = result.errors as Record<string, string[]> | undefined;
   if (errors) {
      const first = Object.values(errors).flat()[0];
      if (first) return first;
   }
   // 3) JsonErrorResponse: { messages: ["..."] } or { Messages: ["..."] }
   const messages = (result.messages ?? result.Messages) as string[] | undefined;
   if (Array.isArray(messages) && messages[0]) return messages[0];
   return null;
}

function isApiFailure(result: Record<string, unknown> | undefined | null): boolean {
   if (!result || typeof result !== 'object') return true;
   // An empty object means the request was swallowed by ApiClient (treated as failure).
   if (Object.keys(result).length === 0) return true;
   // ProblemDetails / generic error wrappers are always failures.
   if (result.errors || result.messages || result.Messages) return true;
   // Response<T> with an explicit succeeded flag.
   const succeeded = (result.succeeded ?? result.Succeeded) as boolean | undefined;
   if (typeof succeeded === 'boolean') return !succeeded;
   return false;
}

function extractErrorMessage(error: unknown): string {
   if (error instanceof Error && error.message) return error.message;
   if (typeof error === 'string') return error;
   return 'حدث خطأ أثناء حفظ البيانات، يرجى المحاولة لاحقاً';
}

const formSchema = z.object({
   statisticalIndex: z.coerce.string().min(4).max(35),
   jobCode: z.string().min(4).max(35),
   lotNumber: z.string().min(4).max(35),
   firstName: z.string().min(2).max(25),
   secondName: z.string().min(2).max(25),
   thirdName: z.string().min(2).max(25),
   fourthName: z.string().min(2).max(25),
   surName: z.string().min(2).max(25),
   motherFirstName: z.string().min(2).max(25),
   motherSecondName: z.string().min(2).max(25),
   motherThirdName: z.string().min(2).max(25),
   motherSurName: z.string().min(2).max(25),
   genderId: z.coerce.number(),
   birthPlace: z.string().min(3).max(35),
   birthDate: z.coerce.string(),
   socialStatus: z.coerce.number(),
   medicalTest: z.coerce.boolean(),
   statusWorkingId: z.coerce.number(),
   typeOfJobId: z.coerce.number(),
   countryId: z.coerce.number(),
   nationalism: z.string().min(2).max(25),
   religion: z.string().min(2).max(25),
   hireDate: z.coerce.string(),
   isMovedFromOutside: z.coerce.boolean(),
   isReEmployed: z.coerce.boolean(),
   directorateId: z.coerce.number(),
   subDirectorateId: z.coerce.number(),
   departmentId: z.coerce.number(),
   jobDegreeId: z.coerce.number({ required_error: 'الدرجة الوظيفية مطلوبة' }).min(1, { message: 'الدرجة الوظيفية مطلوبة' }),
   jobCategoryId: z.coerce.number({ required_error: 'الفئة الوظيفية مطلوبة' }).min(1, { message: 'الفئة الوظيفية مطلوبة' }),
   jobTitleId: z.coerce.number({ required_error: 'العنوان الوظيفي مطلوب' }).min(1, { message: 'العنوان الوظيفي مطلوب' }),
   jobDescriptionId: z.coerce.number({ required_error: 'الوصف الوظيفي مطلوب' }).min(1, { message: 'الوصف الوظيفي مطلوب' }),
   notes: z.string().optional(),
   isBehaviorCode: z.coerce.boolean().optional(),
   positionId: z.coerce.number({ required_error: 'المنصب مطلوب' }).min(1, { message: 'المنصب مطلوب' })
});

type FormValues = z.infer<typeof formSchema>;

// Per-step validation: only the fields belonging to the current step are validated
// before allowing navigation to the next one (handled via the Stepper onValidate prop).
const stepFields: Record<string, (keyof FormValues)[]> = {
   '1': ['statisticalIndex', 'jobCode', 'lotNumber', 'firstName', 'secondName', 'thirdName', 'fourthName', 'surName', 'motherFirstName', 'motherSecondName', 'motherThirdName', 'motherSurName'],
   '2': ['genderId', 'birthPlace', 'birthDate', 'socialStatus', 'positionId', 'nationalism', 'religion', 'countryId', 'medicalTest', 'isBehaviorCode'],
   '3': ['statusWorkingId', 'typeOfJobId', 'hireDate', 'isMovedFromOutside', 'isReEmployed'],
   '4': ['directorateId', 'subDirectorateId', 'departmentId'],
   '5': ['jobDegreeId', 'jobCategoryId', 'jobTitleId', 'jobDescriptionId']
};

const STEP_META = [
   { value: '1', title: 'المعلومات الأساسية', description: 'الأرقام التعريفية والأسماء', icon: User },
   { value: '2', title: 'البيانات الشخصية', description: 'الجنس والولادة والقومية', icon: IdCard },
   { value: '3', title: 'حالة الموظف والتعيين', description: 'الحالة الوظيفية وتاريخ التعيين', icon: Briefcase },
   { value: '4', title: 'الهيكل الإداري', description: 'الدائرة والمديرية والقسم', icon: Building2 },
   { value: '5', title: 'البيانات الوظيفية', description: 'الدرجة والفئة والعنوان الوظيفي', icon: GraduationCap },
];

type Props = {
   data?: EmployeePayload;
   jobDegreesList: unknown[];
   jobTitlesList: unknown[];
   jobCategoriesList: unknown[];
   jobDescriptionsList: unknown[];
   directoratesList: unknown[];
   subDirectoratesList: unknown[];
   departmentsList: unknown[];
   sectionsList: unknown[];
   unitsList: unknown[];
   typeOfJobsList: unknown[];
   countriesList: unknown[];
   positionsList: unknown[];
};

export default function EmployeeForm({
   data,
   departmentsList,
   directoratesList,
   jobCategoriesList,
   jobDegreesList,
   jobDescriptionsList,
   jobTitlesList,
   subDirectoratesList,
   typeOfJobsList,
   countriesList,
   positionsList
}: Props) {
   const [isSubmitting, setSubmitting] = useState(false);
   const [currentStep, setCurrentStep] = useState('1');

   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobDegreeOptions = jobDegreesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobTitleOptions = jobTitlesList?.map((item: any) => {
      return { value: item.id, degreeId: item.degreeId, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobCategoryOptions = jobCategoriesList?.map((item: any) => {
      return { value: item.id, degreeId: item.degreeId, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobDescriptionOptions = jobDescriptionsList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const directorateOptions = directoratesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const subDirectorateOptions = subDirectoratesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const departmentOptions = departmentsList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const typeOfJobOptions = typeOfJobsList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const countryOptions = countriesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const positionOptions = positionsList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         statisticalIndex: data?.statisticalIndex?.toString() || '',
         jobCode: data?.jobCode,
         lotNumber: data?.lotNumber,
         firstName: data?.firstName,
         secondName: data?.secondName,
         thirdName: data?.thirdName,
         fourthName: data?.fourthName,
         surName: data?.surName,
         motherFirstName: data?.motherFirstName,
         motherSecondName: data?.motherSecondName,
         motherThirdName: data?.motherThirdName,
         motherSurName: data?.motherSurName,
         genderId: data?.genderId,
         birthPlace: data?.birthPlace,
         birthDate: data?.birthDate,
         socialStatus: data?.socialStatus,
         medicalTest: data?.medicalTest,
         statusWorkingId: data?.statusWorkingId,
         typeOfJobId: data?.typeOfJobId,
         countryId: data?.countryId,
         nationalism: data?.nationalism,
         religion: data?.religion,
         hireDate: data?.hireDate,
         isMovedFromOutside: data?.isMovedFromOutside,
         isReEmployed: data?.isReEmployed,
         directorateId: data?.directorateId,
         subDirectorateId: data?.subDirectorateId,
         departmentId: data?.departmentId,
         jobDegreeId: data?.jobDegreeId,
         jobCategoryId: data?.jobCategoryId,
         jobTitleId: data?.jobTitleId,
         jobDescriptionId: data?.jobDescriptionId,
         notes: data?.notes,
         isBehaviorCode: data?.isBehaviorCode,
         positionId: data?.positionId
      }
   });

   // Cascading selects: JobCategory and JobTitle belong to a specific JobDegree (DegreeId).
   // Filter them to match the chosen degree so the user cannot pick an incompatible pair.
   const watchedDegreeIdRaw = form.watch('jobDegreeId');
   const watchedDegreeId = watchedDegreeIdRaw ? Number(watchedDegreeIdRaw) : 0;

   const filteredCategoryOptions = jobCategoryOptions.filter(
      (option) => !watchedDegreeId || option.degreeId === watchedDegreeId
   );
   const filteredTitleOptions = jobTitleOptions.filter(
      (option) => !watchedDegreeId || option.degreeId === watchedDegreeId
   );
   // When the degree changes, clear any previously chosen category/title that no longer belongs to it.
   useEffect(() => {
      const catVal = form.getValues('jobCategoryId');
      const selectedCategoryId = catVal ? Number(catVal) : 0;
      
      const titleVal = form.getValues('jobTitleId');
      const selectedTitleId = titleVal ? Number(titleVal) : 0;

      if (
         selectedCategoryId &&
         !jobCategoryOptions.find((o) => o.value === selectedCategoryId && o.degreeId === watchedDegreeId)
      ) {
         form.setValue('jobCategoryId', 0 as unknown as number);
      }
      if (
         selectedTitleId &&
         !jobTitleOptions.find((o) => o.value === selectedTitleId && o.degreeId === watchedDegreeId)
      ) {
         form.setValue('jobTitleId', 0 as unknown as number);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [watchedDegreeIdRaw]);

   // Validate the current step's fields before allowing navigation to the next one.
   // StepperPrev skips validation automatically (diceui default), so going back is always allowed.
   const handleValidate = async (value: string, direction?: 'next' | 'prev'): Promise<boolean> => {
      if (direction === 'prev') return true;
      const fields = stepFields[currentStep];
      if (!fields?.length) return true;
      return await form.trigger(fields as (keyof FormValues)[]);
   };

   async function onSubmit(values: FormValues) {
      setSubmitting(true);
      try {
         values.birthDate = formatDate(new Date(values.birthDate));
         values.hireDate = formatDate(new Date(values.hireDate));
         if (data) {
            // Update existing employee. Note: UpdateEmployeeCommand in the backend only updates
            // personal data — job fields (degree/category/title) are changed via dedicated endpoints
            // (ChangeDegree / ChangeJobTitles). Those are handled on the employee profile page.
            const employeeId =
               (data as EmployeePayload & { id?: string; employeeId?: string }).employeeId ||
               (data as EmployeePayload & { id?: string; employeeId?: string }).id;
            if (!employeeId) {
               toast.error('تعذر تحديد الموظف للتعديل');
               setSubmitting(false);
               return;
            }
            const result = (await employeeService.updateEmployee(
               employeeId,
               values as unknown as UpdateEmployeePayload
            )) as Record<string, unknown> | undefined;

            const message = extractApiMessage(result);
            if (isApiFailure(result)) {
               toast.error(message || 'تعذر تعديل البيانات، يرجى المحاولة لاحقاً');
               setSubmitting(false);
               return;
            }
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const result = (await employeeService.createEmployee(values)) as Record<string, unknown> | undefined;

            const message = extractApiMessage(result);
            if (isApiFailure(result)) {
               toast.error(message || 'تعذر حفظ البيانات، يرجى التأكد من الحقول المطلوبة والمحاولة لاحقاً');
               setSubmitting(false);
               return;
            }
            toast.success('تم حفظ البيانات بنجاح.');
         }
         form.reset();
         router.refresh();
      } catch (error) {
         // Network/transport errors (e.g. 401 redirect). API business errors don't throw here
         // because ApiClient returns the response body instead — handled above via isApiFailure.
         const message = extractErrorMessage(error);
         console.error('Form submission error', error);
         toast.error(message);
         form.reset();
      }
      setSubmitting(false);
   }

   return (
      <Card className='mx-auto w-full max-w-5xl'>
         <Stepper
            defaultValue='1'
            onValueChange={setCurrentStep}
            onValidate={handleValidate}
            className='w-full'
         >
            <CardHeader>
               <StepperList className='w-full'>
                  {STEP_META.map(({ value, title, description, icon: Icon }, index) => (
                     <StepperItem key={value} value={value} className='not-last:flex-1'>
                        <StepperTrigger className='w-full items-start rounded-lg p-2'>
                           <StepperIndicator className='size-9 border-2 data-[state=active]:border-primary data-[state=completed]:border-primary' />
                           <div className='flex flex-col items-start gap-0.5'>
                              <StepperTitle className='flex items-center gap-1.5 text-sm font-medium'>
                                 <Icon className='size-3.5 text-muted-foreground' />
                                 {title}
                              </StepperTitle>
                              <StepperDescription className='text-xs text-muted-foreground'>
                                 {description}
                              </StepperDescription>
                           </div>
                        </StepperTrigger>
                        {index < STEP_META.length - 1 && <StepperSeparator />}
                     </StepperItem>
                  ))}
               </StepperList>
            </CardHeader>

            <CardContent>
               <Form {...form}>
                  <form id='employee-form' onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                     {/* STEP 1 — المعلومات الأساسية */}
                     <StepperContent value='1' className='space-y-6 pt-2'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='statisticalIndex'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الرقم الاحصائي</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الرقم الاحصائي' type='text' {...field} defaultValue={data?.statisticalIndex?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='jobCode'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الرقم الوظيفي</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الرقم الوظيفي' type='text' {...field} defaultValue={data?.jobCode?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='lotNumber'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>رقم الاضبارة</FormLabel>
                                       <FormControl>
                                          <Input placeholder='رقم الاضبارة' type='text' {...field} defaultValue={data?.lotNumber?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='firstName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الاسم الاول</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الاسم الاول' type='text' {...field} defaultValue={data?.firstName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='secondName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الاسم الثاني</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الاسم الثاني' type='text' {...field} defaultValue={data?.secondName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-2'>
                              <FormField
                                 control={form.control}
                                 name='thirdName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الاسم الثالث</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الاسم الثالث' type='text' {...field} defaultValue={data?.thirdName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-2'>
                              <FormField
                                 control={form.control}
                                 name='fourthName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الاسم الرابع</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الاسم الرابع' type='text' {...field} defaultValue={data?.fourthName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-2'>
                              <FormField
                                 control={form.control}
                                 name='surName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>اللقب</FormLabel>
                                       <FormControl>
                                          <Input placeholder='اللقب' type='text' {...field} defaultValue={data?.surName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='motherFirstName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>اسم الام الاول</FormLabel>
                                       <FormControl>
                                          <Input placeholder='اسم الام الاول' type='text' {...field} defaultValue={data?.motherFirstName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='motherSecondName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>اسم الام الثاني</FormLabel>
                                       <FormControl>
                                          <Input placeholder='اسم الام الثاني' type='text' {...field} defaultValue={data?.motherSecondName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='motherThirdName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>اسم الام الثالث</FormLabel>
                                       <FormControl>
                                          <Input placeholder='اسم الام الثالث' type='text' {...field} defaultValue={data?.motherThirdName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='motherSurName'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>لقب الام</FormLabel>
                                       <FormControl>
                                          <Input placeholder='لقب الام' type='text' {...field} defaultValue={data?.motherSurName?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>
                     </StepperContent>

                     {/* STEP 2 — البيانات الشخصية */}
                     <StepperContent value='2' className='space-y-6 pt-2'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='genderId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الجنس</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الجنس' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.genderId?.toString()}>
                                             {genderOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='birthPlace'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>محل الولادة</FormLabel>
                                       <FormControl>
                                          <Input placeholder='محل الولادة' type='text' {...field} defaultValue={data?.birthPlace?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='birthDate'
                                 render={({ field }) => (
                                    <FormItem className='flex flex-col'>
                                       <FormLabel>تاريخ الميلاد</FormLabel>
                                       <Input type='date' {...field} defaultValue={field.value} />
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='socialStatus'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الحالة الاجتماعية</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الحالة الاجتماعية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.socialStatus?.toString()}>
                                             {socialStatusOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='positionId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>المنصب</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='المنصب' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.positionId?.toString()}>
                                             {positionOptions?.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='nationalism'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>القومية</FormLabel>
                                       <FormControl>
                                          <Input placeholder='القومية' type='text' {...field} defaultValue={data?.nationalism?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='religion'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الديانة</FormLabel>
                                       <FormControl>
                                          <Input placeholder='الديانة' type='text' {...field} defaultValue={data?.religion?.toString()} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='countryId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>البلد</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='البلد' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.countryId?.toString()}>
                                             {countryOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='medicalTest'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>هل الموظف خاضع للفحص الطبي؟</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='للفحص الطبي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.medicalTest?.toString()}>
                                             {medicalTestOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='isBehaviorCode'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>هل الموظف لديه لائحة سلوك؟</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف لديه لائحة سلوك؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.statusWorkingId?.toString()}>
                                             {isBehaviorCodeOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>
                     </StepperContent>

                     {/* STEP 3 — حالة الموظف والتعيين */}
                     <StepperContent value='3' className='space-y-6 pt-2'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='statusWorkingId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>حالة الموظف</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='حالة الموظف' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.statusWorkingId?.toString()}>
                                             {workingStatusOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='typeOfJobId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>نوع الوظيفة</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='نوع الوظيفة' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.typeOfJobId?.toString()}>
                                             {typeOfJobOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='hireDate'
                                 render={({ field }) => (
                                    <FormItem className='flex flex-col'>
                                       <FormLabel>تاريخ التعين</FormLabel>
                                       <Input type='date' {...field} defaultValue={field.value} />
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-6'>
                              <FormField
                                 control={form.control}
                                 name='isMovedFromOutside'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>هل الموظف منقول من خارج الجهاز؟</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف منقول من خارج الجهاز؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.isMovedFromOutside?.toString()}>
                                             {isMovedFromOutsideOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-6'>
                              <FormField
                                 control={form.control}
                                 name='isReEmployed'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>هل الموظف تم اعادة تعيينه؟</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف تم اعادة تعيينه؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.isReEmployed?.toString()}>
                                             {isReEmployedOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>
                     </StepperContent>

                     {/* STEP 4 — الهيكل الإداري */}
                     <StepperContent value='4' className='space-y-6 pt-2'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='directorateId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الدائرة</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الدائرة' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.directorateId?.toString()}>
                                             {directorateOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='subDirectorateId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>المديرية</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='المديرية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.subDirectorateId?.toString()}>
                                             {subDirectorateOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='departmentId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>القسم</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='القسم' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.departmentId?.toString()}>
                                             {departmentOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>
                     </StepperContent>

                     {/* STEP 5 — البيانات الوظيفية + ملاحظات */}
                     <StepperContent value='5' className='space-y-6 pt-2'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='jobDegreeId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الدرجة الوظيفية</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الدرجة الوظيفية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.jobDegreeId?.toString()}>
                                             {jobDegreeOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='jobCategoryId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الفئة الوظيفية</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الفئة الوظيفية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.jobCategoryId?.toString()}>
                                             {filteredCategoryOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='jobTitleId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>العنوان الوظيفي</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='العنوان الوظيفي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.jobTitleId?.toString()}>
                                             {filteredTitleOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                           <div className='col-span-3'>
                              <FormField
                                 control={form.control}
                                 name='jobDescriptionId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الوصف الوظيفي</FormLabel>
                                       <Select onValueChange={field.onChange}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الوصف الوظيفي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent defaultValue={data?.jobDescriptionId?.toString()}>
                                             {jobDescriptionOptions.map((option, index) => (
                                                <SelectItem key={index} value={option.value.toString()}>
                                                   {option.label}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>
                        </div>

                        <FormField
                           control={form.control}
                           name='notes'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>الملاحظة</FormLabel>
                                 <FormControl>
                                    <Textarea placeholder='الملاحظة' className='resize-none' {...field} defaultValue={data?.notes?.toString()} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </StepperContent>
                  </form>
               </Form>
               <div className='mt-8'>
                  <p className='text-sm text-muted-foreground'>
                     الخطوة {Number(currentStep)} من {STEP_META.length} —{' '}
                     {STEP_META[Number(currentStep) - 1]?.title}
                  </p>
               </div>
            </CardContent>

            <CardFooter className='flex flex-row-reverse items-center justify-between gap-2'>
            {currentStep !== '5' ? (
               <StepperNext asChild>
                  <Button>التالي</Button>
               </StepperNext>
            ) : (
               <Button type='submit' form='employee-form' disabled={isSubmitting}>
                  {isSubmitting ? (
                     <>
                        <span className='me-2'>حفظ البيانات</span> <Spinner />
                     </>
                  ) : (
                     'حفظ البيانات'
                  )}
               </Button>
            )}
            <StepperPrev asChild>
               <Button variant='outline'>السابق</Button>
            </StepperPrev>
         </CardFooter>
         </Stepper>
      </Card>
   );
}
