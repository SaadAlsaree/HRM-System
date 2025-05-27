'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { ICertificateCalculation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { correctingAcademicAchievementService } from '@/services/correcting-academic-achievement.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { jobTitleService } from '@/services/system-settings/job-title.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import { jobCategoryService } from '@/services/system-settings/job-category.service';
import { jobDescriptionService } from '@/services/system-settings/job-description.service';

const formSchema = z.object({
   employeeId: z.string().optional(),
   degreeFromId: z.number().optional(),
   degreeToId: z.coerce.number().optional(),
   jobCategoryFromId: z.number().optional(),
   jobCategoryToId: z.coerce.number(),
   jobTitleFromId: z.number().optional(),
   jobDescriptionFromId: z.coerce.number(),
   jobTitleToId: z.coerce.number(),
   jobDescriptionToId: z.coerce.number(),
   dueDateDegree: z.coerce.string(),
   dueDateCategory: z.coerce.string(),
   academicAchievementId: z.coerce.number(),
   isCertificateCalculation: z.coerce.boolean(),
   bookNo: z.coerce.string(),
   bookDate: z.coerce.string(),
   note: z.coerce.string(),
   createBy: z.string().optional()
});

type Props = {
   data?: ICertificateCalculation;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

type selectType = {
   label: string;
   value: string;
};

const CertificateCalculationForm = ({ data, icon, title, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const [jobTitleList, setJobTitleList] = useState<selectType[]>([]);
   const [degreeList, setDegreeList] = useState<selectType[]>([]);
   const [academicAchievementList, setAcademicAchievementList] = useState<selectType[]>([]);
   const [jobCategoryList, setJobCategoryList] = useState<selectType[]>([]);
   const [jobDescriptionList, setJobDescriptionList] = useState<selectType[]>([]);

   const getDegreeList = async () => {
      const degreeList = await jobDegreeService.getJobDegree({ Page: 1, PageSize: 100 });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newDegreeList = degreeList.data.items.map((item: any) => ({
         label: item.name,
         value: item.id.toString()
      }));

      setDegreeList(newDegreeList);
   };

   const getJobTitleList = async () => {
      const jobTitleList = await jobTitleService.getJobTitle({ Page: 1, PageSize: 100 });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newJobTitleList = jobTitleList.data.items.map((item: any) => ({
         label: item.name,
         value: item.id.toString()
      }));
      setJobTitleList(newJobTitleList);
   };

   const getJobCategoryList = async () => {
      const jobCategoryList = await jobCategoryService.getJobCategory({ Page: 1, PageSize: 100 });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newJobCategoryList = jobCategoryList.data.items.map((item: any) => ({
         label: item.name,
         value: item.id.toString()
      }));
      setJobCategoryList(newJobCategoryList);
   };

   const getAcademicAchievementList = async () => {
      const academicAchievementList = await academicAchievementService.getAcademicAchievements({ Page: 1, PageSize: 100 });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newAcademicAchievementList = academicAchievementList.data.items.map((item: any) => ({
         label: item.name,
         value: item.id.toString()
      }));
      setAcademicAchievementList(newAcademicAchievementList);
   };

   const getJobDescriptionList = async () => {
      const jobDescriptionList = await jobDescriptionService.getJobDescription({ Page: 1, PageSize: 100 });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newJobDescriptionList = jobDescriptionList.data.items.map((item: any) => ({
         label: item.name,
         value: item.id.toString()
      }));
      setJobDescriptionList(newJobDescriptionList);
   };

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
      form.setValue('employeeId', user?.employeeId ?? '');
      form.setValue('degreeFromId', user?.jobDegreeId ?? 0);
      form.setValue('jobCategoryFromId', user?.jobCategoryId ?? 0);
      form.setValue('jobTitleFromId', user?.jobTitleId ?? 0);
      form.setValue('jobDescriptionFromId', user?.jobDescriptionId ?? 0);
      form.setValue('createBy', user?.employeeId ?? '');
   };
   const router = useRouter();

   useEffect(() => {
      getJobTitleList();
      getDegreeList();
      getAcademicAchievementList();
      getJobCategoryList();
      getJobDescriptionList();
   }, []);
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         jobTitleToId: data?.jobTitleToId ?? 0,
         degreeToId: data?.degreeToId ?? 0,
         dueDateDegree: data?.dueDateDegree,
         dueDateCategory: data?.dueDateCategory ?? '',
         academicAchievementId: data?.academicAchievementId ?? 0,
         isCertificateCalculation: data?.isCertificateCalculation ?? false,
         bookNo: data?.bookNo ?? '',
         bookDate: data?.bookDate ?? '',
         note: data?.note ?? '',
         jobCategoryToId: data?.jobCategoryToId ?? 0,
         jobDescriptionToId: data?.jobDescriptionToId ?? 0
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? ''
            };
            await correctingAcademicAchievementService.updateCorrectingAcademicAchievement(data.id as string, payload);
            console.log('payload', payload);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            setSelectedUser(null);
            router.refresh();
            setOpen(false);
         } else {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? ''
            };
            if (selectedUser === null) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            const response = await correctingAcademicAchievementService.createCorrectingAcademicAchievement(payload);
            console.log('response', response);
            console.log('payload', payload);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            router.refresh();
            setOpen(false);
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
         setSelectedUser(null);
         form.reset();
         setSubmitting(false);
         setOpen(false);
      }
   }
   console.log(form.formState.errors);
   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant}>
                  <p>{title}</p>
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[680px] '>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                     {/* <Button variant='ghost' size='icon' className='rounded-full' onClick={() => setOpen(false)}>
                <X className='h-4 w-4' />
             </Button> */}
                  </div>
               </DialogHeader>
               <Separator />

               {!data && (
                  <div className='flex flex-col items-center justify-between w-full p-2'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الاسم الرباعي واللقب</h1>
                              <Input value={selectedUser?.fullName} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>رقم الاضبارة</h1>
                              <Input value={selectedUser?.lotNumber} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الرقم الوظيفي</h1>
                              <Input value={selectedUser?.jobCode} disabled />
                           </div>
                        </div>
                     </div>
                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-8'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>العنوان الوظيفي السابق</h1>
                              <Input value={selectedUser?.jobTitleName} disabled />
                           </div>
                        </div>

                        <div className='xl:col-span-8'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الدرجة السابقة</h1>
                              <Input value={selectedUser?.jobDegreeName} disabled />
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               {!data && <Separator />}

               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4 py-4' autoComplete='off'>
                     <FormField
                        control={form.control}
                        name='jobTitleToId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>العنوان الوظيفي الجديد</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={data?.jobTitleToId?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='العنوان الوظيفي الجديد' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {jobTitleList.map((option, index) => (
                                       <SelectItem key={index} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='degreeToId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الدرجة الجديدة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={data?.degreeToId?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الدرجة الجديدة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {degreeList.map((option, index) => (
                                       <SelectItem key={index} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='jobCategoryToId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الفئة الوظيفية الجديدة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={data?.jobCategoryToId?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الفئة الوظيفية الجديدة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {jobCategoryList.map((option, index) => (
                                       <SelectItem key={index} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='jobDescriptionToId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الوصف الوظيفي الجديد</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={data?.jobDescriptionToId?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الوصف الوظيفي الجديد' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {jobDescriptionList.map((option, index) => (
                                       <SelectItem key={index} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='dueDateDegree'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ تسكين الدرجة</FormLabel>
                              <FormControl>
                                 <Input placeholder='تاريخ تسكين الدرجة' type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='dueDateCategory'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ تسكين الفئة الوظيفية</FormLabel>
                              <FormControl>
                                 <Input placeholder='تاريخ تسكين الفئة الوظيفية' type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='bookNo'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>رقم الأمر الإداري</FormLabel>
                              <FormControl>
                                 <Input placeholder='رقم الأمر الإداري' type='text' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name='bookDate'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ الأمر الإداري</FormLabel>
                              <FormControl>
                                 <Input placeholder='تاريخ الأمر الإداري' type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name='academicAchievementId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>التحصيل الدراسي الجديد</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={data?.academicAchievementId?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='التحصيل الدراسي الجديد' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {academicAchievementList.map((option, index) => (
                                       <SelectItem key={index} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='note'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>ملاحظات</FormLabel>
                                 <FormControl>
                                    <Input placeholder='ملاحظات' type='text' {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='col-span-3'>
                        <Button disabled={isSubmitting} className='w-full'>
                           {isSubmitting ? (
                              <>
                                 <p className='ml-2'>حفظ البيانات</p> <Spinner />
                              </>
                           ) : (
                              'حفظ البيانات'
                           )}
                        </Button>
                     </div>
                  </form>
               </Form>
               <Separator />
               <DialogFooter>
                  <DialogClose asChild>
                     <Button variant='destructive' onClick={() => form.reset()}>
                        إغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default CertificateCalculationForm;
