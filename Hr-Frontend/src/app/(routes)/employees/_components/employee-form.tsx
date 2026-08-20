'use client';
import { useEffect, useState, useMemo } from 'react';
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
function extractApiMessage(result: Record<string, unknown> | undefined | null): string | null {
   if (!result) return null;
   const msg = (result.message ?? result.Message) as string | undefined;
   if (typeof msg === 'string' && msg.trim()) return msg;
   const errors = result.errors as Record<string, string[]> | undefined;
   if (errors) {
      const first = Object.values(errors).flat()[0];
      if (first) return first;
   }
   const messages = (result.messages ?? result.Messages) as string[] | undefined;
   if (Array.isArray(messages) && messages[0]) return messages[0];
   return null;
}

function isApiFailure(result: Record<string, unknown> | undefined | null): boolean {
   if (!result || typeof result !== 'object') return true;
   if (Object.keys(result).length === 0) return true;
   if (result.errors || result.messages || result.Messages) return true;
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
   employeeId?: string;
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

const buildDefaultValues = (empData?: EmployeePayload): FormValues => ({
   statisticalIndex: empData?.statisticalIndex?.toString() || '',
   jobCode: empData?.jobCode?.toString() || '',
   lotNumber: empData?.lotNumber?.toString() || '',
   firstName: empData?.firstName || '',
   secondName: empData?.secondName || '',
   thirdName: empData?.thirdName || '',
   fourthName: empData?.fourthName || '',
   surName: empData?.surName || '',
   motherFirstName: empData?.motherFirstName || '',
   motherSecondName: empData?.motherSecondName || '',
   motherThirdName: empData?.motherThirdName || '',
   motherSurName: empData?.motherSurName || '',
   genderId: empData?.genderId !== undefined && empData?.genderId !== null ? Number(empData.genderId) : (undefined as unknown as number),
   birthPlace: empData?.birthPlace || '',
   birthDate: empData?.birthDate ? String(empData.birthDate).split('T')[0] : '',
   socialStatus: empData?.socialStatus !== undefined && empData?.socialStatus !== null ? Number(empData.socialStatus) : (undefined as unknown as number),
   medicalTest: empData?.medicalTest !== undefined && empData?.medicalTest !== null ? Boolean(empData.medicalTest) : (undefined as unknown as boolean),
   statusWorkingId: empData?.statusWorkingId !== undefined && empData?.statusWorkingId !== null ? Number(empData.statusWorkingId) : (undefined as unknown as number),
   typeOfJobId: empData?.typeOfJobId !== undefined && empData?.typeOfJobId !== null ? Number(empData.typeOfJobId) : (undefined as unknown as number),
   countryId: empData?.countryId !== undefined && empData?.countryId !== null ? Number(empData.countryId) : (undefined as unknown as number),
   nationalism: empData?.nationalism || '',
   religion: empData?.religion || '',
   hireDate: empData?.hireDate ? String(empData.hireDate).split('T')[0] : '',
   isMovedFromOutside: empData?.isMovedFromOutside !== undefined && empData?.isMovedFromOutside !== null ? Boolean(empData.isMovedFromOutside) : (undefined as unknown as boolean),
   isReEmployed: empData?.isReEmployed !== undefined && empData?.isReEmployed !== null ? Boolean(empData.isReEmployed) : (undefined as unknown as boolean),
   directorateId: empData?.directorateId !== undefined && empData?.directorateId !== null ? Number(empData.directorateId) : (undefined as unknown as number),
   subDirectorateId: empData?.subDirectorateId !== undefined && empData?.subDirectorateId !== null ? Number(empData.subDirectorateId) : (undefined as unknown as number),
   departmentId: empData?.departmentId !== undefined && empData?.departmentId !== null ? Number(empData.departmentId) : (undefined as unknown as number),
   jobDegreeId: empData?.jobDegreeId !== undefined && empData?.jobDegreeId !== null ? Number(empData.jobDegreeId) : (undefined as unknown as number),
   jobCategoryId: empData?.jobCategoryId !== undefined && empData?.jobCategoryId !== null ? Number(empData.jobCategoryId) : (undefined as unknown as number),
   jobTitleId: empData?.jobTitleId !== undefined && empData?.jobTitleId !== null ? Number(empData.jobTitleId) : (undefined as unknown as number),
   jobDescriptionId: empData?.jobDescriptionId !== undefined && empData?.jobDescriptionId !== null ? Number(empData.jobDescriptionId) : (undefined as unknown as number),
   notes: empData?.notes || '',
   isBehaviorCode: empData?.isBehaviorCode !== undefined && empData?.isBehaviorCode !== null ? Boolean(empData.isBehaviorCode) : (undefined as unknown as boolean),
   positionId: empData?.positionId !== undefined && empData?.positionId !== null ? Number(empData.positionId) : (undefined as unknown as number)
});

export default function EmployeeForm({
   employeeId: propEmployeeId,
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
   const jobDegreeOptions = useMemo(() => jobDegreesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [jobDegreesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobTitleOptions = useMemo(() => jobTitlesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      degreeId: item.degreeId ?? item.DegreeId,
      label: item.name ?? item.Name
   })) ?? [], [jobTitlesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobCategoryOptions = useMemo(() => jobCategoriesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      degreeId: item.degreeId ?? item.DegreeId,
      label: item.name ?? item.Name
   })) ?? [], [jobCategoriesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobDescriptionOptions = useMemo(() => jobDescriptionsList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [jobDescriptionsList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const directorateOptions = useMemo(() => directoratesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [directoratesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const subDirectorateOptions = useMemo(() => subDirectoratesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [subDirectoratesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const departmentOptions = useMemo(() => departmentsList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [departmentsList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const typeOfJobOptions = useMemo(() => typeOfJobsList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [typeOfJobsList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const countryOptions = useMemo(() => countriesList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [countriesList]);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const positionOptions = useMemo(() => positionsList?.map((item: any) => ({
      value: item.id ?? item.Id,
      label: item.name ?? item.Name
   })) ?? [], [positionsList]);

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: buildDefaultValues(data)
   });

   useEffect(() => {
      if (data) {
         form.reset(buildDefaultValues(data));
      }
   }, [data, form]);

   // Cascading selects: JobCategory and JobTitle belong to a specific JobDegree (DegreeId).
   // Filter them to match the chosen degree so the user cannot pick an incompatible pair.
   const watchedDegreeIdRaw = form.watch('jobDegreeId');
   const watchedDegreeId = watchedDegreeIdRaw ? Number(watchedDegreeIdRaw) : 0;

   const filteredCategoryOptions = useMemo(() => {
      return jobCategoryOptions.filter(
         (option) => !watchedDegreeId || option.degreeId === watchedDegreeId
      );
   }, [jobCategoryOptions, watchedDegreeId]);

   const filteredTitleOptions = useMemo(() => {
      return jobTitleOptions.filter(
         (option) => !watchedDegreeId || option.degreeId === watchedDegreeId
      );
   }, [jobTitleOptions, watchedDegreeId]);

   // Track previous degree to only reset category/title on intentional user degree change
   const [prevDegreeId, setPrevDegreeId] = useState<number>(data?.jobDegreeId ? Number(data.jobDegreeId) : 0);

   useEffect(() => {
      if (prevDegreeId !== watchedDegreeId) {
         setPrevDegreeId(watchedDegreeId);
         if (watchedDegreeId) {
            const catVal = form.getValues('jobCategoryId');
            const selectedCategoryId = catVal ? Number(catVal) : 0;
            const titleVal = form.getValues('jobTitleId');
            const selectedTitleId = titleVal ? Number(titleVal) : 0;

            if (
               selectedCategoryId &&
               !jobCategoryOptions.find((o) => o.value === selectedCategoryId && o.degreeId === watchedDegreeId)
            ) {
               form.setValue('jobCategoryId', undefined as unknown as number);
            }
            if (
               selectedTitleId &&
               !jobTitleOptions.find((o) => o.value === selectedTitleId && o.degreeId === watchedDegreeId)
            ) {
               form.setValue('jobTitleId', undefined as unknown as number);
            }
         }
      }
   }, [watchedDegreeId, prevDegreeId, jobCategoryOptions, jobTitleOptions, form]);

   // Validate the current step's fields before allowing navigation to the next one.
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
         if (data || propEmployeeId) {
            const rawData = data as (EmployeePayload & { id?: string; employeeId?: string }) | undefined;
            const isValidGuid = (id?: string | null): id is string =>
               typeof id === 'string' && id.trim().length > 0 && id !== '00000000-0000-0000-0000-000000000000';

            const resolvedEmployeeId =
               (isValidGuid(propEmployeeId) ? propEmployeeId : null) ||
               (isValidGuid(rawData?.id) ? rawData?.id : null) ||
               (isValidGuid(rawData?.employeeId) ? rawData?.employeeId : null);

            if (!resolvedEmployeeId) {
               toast.error('تعذر تحديد الموظف للتعديل');
               setSubmitting(false);
               return;
            }
            const result = (await employeeService.updateEmployee(
               resolvedEmployeeId,
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
         router.refresh();
      } catch (error) {
         const message = extractErrorMessage(error);
         console.error('Form submission error', error);
         toast.error(message);
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
                                          <Input placeholder='الرقم الاحصائي' type='text' {...field} />
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
                                          <Input placeholder='الرقم الوظيفي' type='text' {...field} />
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
                                          <Input placeholder='رقم الاضبارة' type='text' {...field} />
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
                                          <Input placeholder='الاسم الاول' type='text' {...field} />
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
                                          <Input placeholder='الاسم الثاني' type='text' {...field} />
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
                                          <Input placeholder='الاسم الثالث' type='text' {...field} />
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
                                          <Input placeholder='الاسم الرابع' type='text' {...field} />
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
                                          <Input placeholder='اللقب' type='text' {...field} />
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
                                          <Input placeholder='اسم الام الاول' type='text' {...field} />
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
                                          <Input placeholder='اسم الام الثاني' type='text' {...field} />
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
                                          <Input placeholder='اسم الام الثالث' type='text' {...field} />
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
                                          <Input placeholder='لقب الام' type='text' {...field} />
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الجنس' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {genderOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                          <Input placeholder='محل الولادة' type='text' {...field} />
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
                                       <Input
                                          type='date'
                                          {...field}
                                          value={field.value ? String(field.value).split('T')[0] : ''}
                                       />
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val !== '' ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الحالة الاجتماعية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {socialStatusOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='المنصب' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {positionOptions?.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                          <Input placeholder='القومية' type='text' {...field} />
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
                                          <Input placeholder='الديانة' type='text' {...field} />
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='البلد' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {countryOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val === 'true')}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='للفحص الطبي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {medicalTestOptions.map((option) => (
                                                <SelectItem key={String(option.value)} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val === 'true')}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف لديه لائحة سلوك؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {isBehaviorCodeOptions.map((option) => (
                                                <SelectItem key={String(option.value)} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val !== '' ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='حالة الموظف' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {workingStatusOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='نوع الوظيفة' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {typeOfJobOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Input
                                          type='date'
                                          {...field}
                                          value={field.value ? String(field.value).split('T')[0] : ''}
                                       />
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val === 'true')}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف منقول من خارج الجهاز؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {isMovedFromOutsideOptions.map((option) => (
                                                <SelectItem key={String(option.value)} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val === 'true')}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='هل الموظف تم اعادة تعيينه؟' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {isReEmployedOptions.map((option) => (
                                                <SelectItem key={String(option.value)} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الدائرة' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {directorateOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='المديرية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {subDirectorateOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='القسم' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {departmentOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الدرجة الوظيفية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {jobDegreeOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الفئة الوظيفية' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {filteredCategoryOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='العنوان الوظيفي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {filteredTitleOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                       <Select
                                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                          value={field.value !== undefined && field.value !== null ? String(field.value) : ''}
                                       >
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='الوصف الوظيفي' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {jobDescriptionOptions.map((option: { value: number | string; label: string }) => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
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
                                    <Textarea placeholder='الملاحظة' className='resize-none' {...field} />
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
