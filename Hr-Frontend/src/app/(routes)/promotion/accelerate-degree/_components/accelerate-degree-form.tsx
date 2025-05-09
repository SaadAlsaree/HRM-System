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
import { IAccelerateAchievement } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { changeDegreeService } from '@/services/change-degree.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { jobTitleService } from '@/services/system-settings/job-title.service';
import { jobCategoryService } from '@/services/system-settings/job-category.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobDescriptionService } from '@/services/system-settings/job-description.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
    jobTitleFromId: z.number().min(0, "الحقل مطلوب"),
    jobDescriptionFromId: z.number().min(0, "الحقل مطلوب"),
    jobDegreeFromId: z.number().min(1, "الحقل مطلوب"),
    jobCategoryFromId: z.number().min(0, "الحقل مطلوب"),
    jobTitleToId: z.string().min(1, "الدرجة الجديدة مطلوب"),
    jobDescriptionToId: z.string().min(1, "الحقل مطلوب"),
    jobDegreeToId: z.string().min(1, "حقل الدرجة الجديدة مطلوب"),
    jobCategoryToId: z.string().min(1, "حقل الفئة الجديدة مطلوب"),
    newDegreeDueDate: z.string().min(1, "تاريخ تسكين الدرجة مطلوب"),
    newCategoryDueDate: z.string().min(1, "تاريخ تسكين الفئة مطلوب"),
    oldDegreeDueDate: z.string().min(1),
    oldCategoryDueDate: z.string().min(1),
    status: z.string().optional(),
    note: z.string().optional(),
    department: z.string().optional(),
    directorate: z.string().optional()

});

type Props = {
    data?: IAccelerateAchievement;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

type selectType = {
    label: string;
    value: string;
};

const AccelerateAchievementForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
     const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
     const [jobTitleList, setJobTitleList] = useState<selectType[]>([]);

       const [jobDescriptionList, setJobDescriptionList] = useState<selectType[]>([]);
         const [degreeList, setDegreeList] = useState<selectType[]>([]);
         const [categoryList, setCategoryList] = useState<selectType[]>([]);
     
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
          console.log('user', user);
          
          form.setValue('employeeId', user?.employeeId ?? '');
          form.setValue('fullName', user?.fullName ?? '');
            form.setValue('jobCategoryFromId', user?.jobCategoryId ?? 0);
            form.setValue('jobDegreeFromId', user?.jobDegreeId ?? 0);
            form.setValue('jobDescriptionFromId', user?.jobDescriptionId ?? 0);
            form.setValue('jobTitleFromId', user?.jobTitleId ?? 0);
            form.setValue('oldCategoryDueDate', user?.categoryDueDate ?? '');
            form.setValue('oldDegreeDueDate', user?.degreeDueDate ?? '');
       };
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            orderNo: data?.orderNo ?? '',
            orderDate: data?.orderDate ?? '',
            jobTitleFromId: data?.jobTitleFromId ?? 0,
            jobDescriptionFromId: data?.jobDescriptionFromId ?? 0,
            jobDegreeFromId: data?.jobDegreeFromId ?? 0,
            jobCategoryFromId: data?.jobCategoryFromId ?? 0,
            jobTitleToId: data?.jobTitleToId ?? '',
            jobDescriptionToId: data?.jobDescriptionToId ?? '',
            jobDegreeToId: data?.jobDegreeToId,
            jobCategoryToId: data?.jobCategoryToId ?? '',
            newDegreeDueDate: data?.newDegreeDueDate ?? '',
            newCategoryDueDate: data?.newCategoryDueDate ?? '',
            oldDegreeDueDate: data?.oldDegreeDueDate ?? '',
            oldCategoryDueDate: data?.oldCategoryDueDate ?? '',
            directorate: '',
            department: '',
            status: data?.statusName ?? '',
            note: data?.note ?? '',
           
        },
    });

    useEffect(() => {
            getJobTitleList();
            getJobDescriptionList();
            getDegreeList();
            getCategoryList();
        }, []);

     async function onSubmit(values: z.infer<typeof formSchema>) {
          setSubmitting(true);
          try {
             if (data) {
                const payload = {
                   ...values,
                   employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
                   id: data.id,
                   note: values.note ?? ""
                };
                await changeDegreeService.updateChangeDegree(data.id as string, payload);
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
                     note: values.note ?? ""
                };
                if (selectedUser === null) {
                   toast.error('يجب اختيار موظف');
                   setSubmitting(false);
                   return;
                }
                await changeDegreeService.createChangeDegree(payload);
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
                        <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4 py-4' autoComplete='off'>
                           
                            
                           
                           

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

                                    <FormField
                                    control={form.control}
                                    name='jobDegreeToId'
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

                            <FormField
                                control={form.control}
                                name='newDegreeDueDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ تسكين الدرجة الجديدة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ تسكين الدرجة' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='newCategoryDueDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ تسكين الفئة الجديدة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ تسكين الفئة' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='orderNo'
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
                                name='orderDate'
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
                                name='note'
                                render={({ field }) => (
                                    <FormItem className='col-span-3'>
                                        <FormLabel>ملاحظات</FormLabel>
                                        <FormControl>
                                            <Input placeholder='ملاحظات' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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

export default AccelerateAchievementForm;