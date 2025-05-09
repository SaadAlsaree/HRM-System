"use client";
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
import { IAcademicAchievement } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { correctingAcademicAchievementService } from '@/services/correcting-academic-achievement.service';
import { jobCategoryService } from '@/services/system-settings/job-category.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobDescriptionService } from '@/services/system-settings/job-description.service';
import { jobTitleService } from '@/services/system-settings/job-title.service';
import { AcademicCertificateType, IselectType } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    degreeFromId: z.coerce.number().min(0, 'الحقل مطلوب'),
    degreeToId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobCategoryFromId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobCategoryToId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobTitleFromId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobDescriptionFromId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobTitleToId: z.coerce.number().min(0, 'الحقل مطلوب'),
    jobDescriptionToId: z.coerce.number().min(0, 'الحقل مطلوب'),
    dueDateDegree: z.string().min(1, 'تاريخ تسكين الدرجة مطلوب'),
    dueDateCategory: z.string().optional(),
    academicAchievementId: z.coerce.number().optional(),
    isCertificateCalculation: z.boolean().default(true),
    bookNo: z.string().min(1, 'رقم الكتاب مطلوب'),
    bookDate: z.string().min(1, 'تاريخ الكتاب مطلوب'),
    note: z.string().optional(),
    createBy: z.string().optional(),
});

type Props = {
    data?: IAcademicAchievement;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
    academicCertificateType: AcademicCertificateType[]
};

const AcademicAchievementForm = ({ data, icon, title, variant, academicCertificateType }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const [jobTitleList, setJobTitleList] = useState<IselectType[]>([]);
        const [jobDescriptionList, setJobDescriptionList] = useState<IselectType[]>([]);
        const [degreeList, setDegreeList] = useState<IselectType[]>([]);
        const [categoryList, setCategoryList] = useState<IselectType[]>([]);
    

        const academicCertificateOptions = academicCertificateType.map((item: AcademicCertificateType) => ({
         label: item.name,
         value: item.id
     }));
        const getCategoryList = async () => {
            const categoryList = await jobCategoryService.getJobCategory({Page: 1, PageSize: 100});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newCategoryList = categoryList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            setCategoryList(newCategoryList);
        }
    
        const getDegreeList = async () => {
            const degreeList = await jobDegreeService.getJobDegree({Page: 1, PageSize: 100});
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newDegreeList = degreeList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            
            setDegreeList(newDegreeList);
        }
    
        const getJobDescriptionList = async () => {
            const jobDescriptionList = await jobDescriptionService.getJobDescription({Page: 1, PageSize: 100});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newJobDescriptionList = jobDescriptionList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            setJobDescriptionList(newJobDescriptionList);
        }
        
        const getJobTitleList = async () => {
            const jobTitleList = await jobTitleService.getJobTitle({Page: 1, PageSize: 100});
     
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newJobTitleList = jobTitleList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            setJobTitleList(newJobTitleList);
        }
    
       const handleUserSelect = (user: IEmployeeSearch | null) => {
          setSelectedUser(user);
          form.setValue('employeeId', user?.employeeId ?? '');
        form.setValue('degreeFromId', user?.jobDegreeId ?? 0);
        form.setValue('jobCategoryFromId', user?.jobCategoryId ?? 0);
        form.setValue('jobDescriptionFromId', user?.jobDescriptionId ?? 0);
        form.setValue('jobTitleFromId', user?.jobTitleId ?? 0);
        form.setValue('createBy', user?.employeeId ?? '');
       };
    const router = useRouter();

     useEffect(() => {
            getJobTitleList();
            getJobDescriptionList();
            getDegreeList();
            getCategoryList();
        }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            jobDescriptionToId: data?.jobDescriptionToId,
            degreeToId: data?.jobDegreeToId,
            dueDateDegree: data?.dueDateDegree ?? '',
            dueDateCategory: data?.dueDateCategory ?? '',
            jobTitleToId: data?.jobTitleToId,
            jobCategoryToId: data?.jobCategoryToId,
            bookNo: data?.bookNo ?? '',
            bookDate: data?.bookDate ?? '',
            note: data?.note ?? '',
            academicAchievementId: data?.academicAchievementId ?? 0,
            isCertificateCalculation: data?.isCertificateCalculation ?? true,
            createBy: data?.createBy ?? '',

           
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
             setSubmitting(true);
             try {
                if (data) {
                   const payload = {
                      ...values,
                      employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
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
                      employeeId: selectedUser?.employeeId ?? '',
                   };
                   if (selectedUser === null) {
                      toast.error('يجب اختيار موظف');
                      setSubmitting(false);
                      return;
                   }
                   await correctingAcademicAchievementService.createCorrectingAcademicAchievement(payload);
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
           </div>
        )}

        {!data && <Separator />}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     {/* start form */}
                     <div className='grid grid-cols-12 gap-4'>
                     <div className='col-span-4'>
                          <FormField
                                    control={form.control}
                                    name='degreeToId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الدرجة الجديدة</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الدرجة الجديدة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
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
                        </div>

                        <div className='col-span-4'>
                        <FormField
                                    control={form.control}
                                    name='jobTitleToId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>العنوان الوظيفي الجديد</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='العنوان الوظيفي الجديد' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
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
                        </div>
                       
                        <div className='col-span-4'>
                        <FormField
                                    control={form.control}
                                    name='jobCategoryToId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الفئة الجديدة</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الفئة الجديدة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {categoryList.map((option, index) => (
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
                        </div>
                  </div>
                     <div className='grid grid-cols-12 gap-4'>
                     <div className='col-span-4'>
                     <FormField
                                    control={form.control}
                                    name='jobDescriptionToId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الوصف الوظيفي الجديد</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الوصف الوظيفي الجديد' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
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
                        </div>

                       
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='dueDateDegree'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ تسكين الدرجة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-4'>
                        <FormField
                              control={form.control}
                              name='dueDateCategory'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ تسكين الفئة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                  </div>

                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-4'>
                        <FormField
                                    control={form.control}
                                    name='academicAchievementId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>التحصيل الدراسي الجديد</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='التحصيل الدراسي الجديد' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {academicCertificateOptions?.map((option, index) => (
                                                    <SelectItem key={index} value={option.value?.toString() || ''}>
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
                              name='bookNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>


                     </div>

                     <FormField
                        control={form.control}
                        name='note'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الملاحظة </FormLabel>
                              <FormControl>
                                 <Textarea placeholder='' className='resize-none' {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     {/* end form */}
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

export default AcademicAchievementForm;