'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/spinner';
import { useRouter } from 'next/navigation';
import { EmployeePayload, employeeService } from '@/services/Employee/employee.service';
import { formatDate } from '@/utils/format-date';

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
   { label: 'عزل', value: 6 }
];

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
   jobDegreeId: z.coerce.number(),
   jobCategoryId: z.coerce.number(),
   jobTitleId: z.coerce.number(),
   jobDescriptionId: z.coerce.number(),
   notes: z.string().optional(),
   isBehaviorCode: z.coerce.boolean().optional(),
   positionId: z.coerce.number()
});

type Props = {
   data?: EmployeePayload;
   jobDegreesList: [];
   jobTitlesList: [];
   jobCategoriesList: [];
   jobDescriptionsList: [];
   directoratesList: [];
   subDirectoratesList: [];
   departmentsList: [];
   sectionsList: [];
   unitsList: [];
   typeOfJobsList: [];
   countriesList: [];
   positionsList: [];
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

   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegreesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobTitleOptions = jobTitlesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobCategoryOptions = jobCategoriesList?.map((item: any) => {
      return { value: item.id, label: item.name };
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

   const form = useForm<z.infer<typeof formSchema>>({
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

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            router.refresh();
         } else {
            values.birthDate = formatDate(new Date(values.birthDate));
            values.hireDate = formatDate(new Date(values.hireDate));
            await employeeService.createEmployee(values);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);

            router.refresh();
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
         form.reset();
         setSubmitting(false);
      }
      setSubmitting(false);
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-4'>
            <div className='grid grid-cols-12 gap-4'>
               <div className='col-span-4'>
                  <FormField
                     control={form.control}
                     name='statisticalIndex'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الرقم الوظيفي</FormLabel>
                           <FormControl>
                              <Input placeholder='الرقم الوظيفي' type='text' {...field} defaultValue={data?.statisticalIndex?.toString()} />
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
                           <FormLabel>رقم الاضبارة</FormLabel>
                           <FormControl>
                              <Input placeholder='رقم الاضبارة' type='text' {...field} defaultValue={data?.jobCode?.toString()} />
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
                           <FormLabel>الرقم الاحصائي</FormLabel>
                           <FormControl>
                              <Input placeholder='الرقم الاحصائي' type='text' {...field} defaultValue={data?.lotNumber?.toString()} />
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
                              <Input
                                 placeholder='اسم الام الثاني'
                                 type='text'
                                 {...field}
                                 defaultValue={data?.motherSecondName?.toString()}
                              />
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
                              <Input placeholder='' type='text' {...field} defaultValue={data?.motherThirdName?.toString()} />
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

            <div className='grid grid-cols-12 gap-4'>
               <div className='col-span-2'>
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

               <div className='col-span-2'>
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

               <div className='col-span-2 mt-2.5'>
                  <FormField
                     control={form.control}
                     name='birthDate'
                     render={({ field }) => (
                        <FormItem className='flex flex-col'>
                           <FormLabel>تاريخ الميلاد</FormLabel>
                           {/* <DatetimePicker {...field} value={new Date(field.value)} format={[['days', 'months', 'years']]} /> */}
                           <Input type='date' {...field} defaultValue={field.value} />

                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <div className='col-span-2'>
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

               <div className='col-span-2'>
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

               {/* <div className='col-span-2'>
                  <FormField
                     control={form.control}
                     name='childrenCount'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>عدد الابناء</FormLabel>
                           <FormControl>
                              <Input placeholder='عدد الابناء' type='number' {...field} defaultValue={data?.childrenCount} />
                           </FormControl>

                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div> */}
            </div>

            <div className='grid grid-cols-12 gap-4'>
               <div className='col-span-3'>
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

               <div className='col-span-3'>
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

               <div className='col-span-2'>
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

               <div className='col-span-2'>
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

               <div className='col-span-2'>
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
            </div>

            <div className='grid grid-cols-12 gap-4'></div>

            <div className='grid grid-cols-12 gap-4'>
               <div className='col-span-2'>
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
               <div className='col-span-2'>
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

               <div className='col-span-2 mt-2.5'>
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

               <div className='col-span-2'>
                  <FormField
                     control={form.control}
                     name='isMovedFromOutside'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>هل الموظف منقول من خارج الجهاز؟ </FormLabel>
                           <Select onValueChange={field.onChange}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder='هل الموظف منقول من خارج الجهاز؟ ' />
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

               <div className='col-span-4'>
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

               {/* <div className='col-span-2'>
                  <FormField
                     control={form.control}
                     name='sectionId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الشعبة</FormLabel>
                           <Select onValueChange={field.onChange}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder='' />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent defaultValue={data?.sectionId?.toString()}>
                                 {sectionOptions.map((option, index) => (
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

               <div className='col-span-2'>
                  <FormField
                     control={form.control}
                     name='unitId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الوحدة</FormLabel>
                           <Select onValueChange={field.onChange}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder='الوحدة' />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent defaultValue={data?.unitId?.toString()}>
                                 {unitOptions.map((option, index) => (
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
               </div> */}
            </div>

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
                                 {jopDegreeOptions.map((option, index) => (
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
                                 {jobCategoryOptions.map((option, index) => (
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
                                 {jobTitleOptions.map((option, index) => (
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
            <Button disabled={isSubmitting}>
               {isSubmitting ? (
                  <>
                     <p className='ml-2'>حفظ البيانات</p> <Spinner />
                  </>
               ) : (
                  'حفظ البيانات'
               )}
            </Button>
         </form>
      </Form>
   );
}
