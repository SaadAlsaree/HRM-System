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
import { IEditJobTitle } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { IselectType } from '@/types';
import { jobDescriptionService } from '@/services/system-settings/job-description.service';
import { jobTitleService } from '@/services/system-settings/job-title.service';
import { changeJobTitlesService } from '@/services/change-job-titles.service';
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from '@/components/ui/select';


const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
    newJobTitleId: z.coerce.number().min(1, 'الحقل مطلوب'),
    newJobDescriptionId: z.coerce.number().min(1, 'الحقل مطلوب'),
    note: z.string().optional(),
});

type Props = {
    data?: IEditJobTitle;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const EditJobTitleForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const [jobTitleList, setJobTitleList] = useState<IselectType[]>([]);
    const [jobDescriptionList, setJobDescriptionList] = useState<IselectType[]>([]);

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

       };
    const router = useRouter();

    useEffect(() => {
            getJobTitleList();
            getJobDescriptionList();
        }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            newJobTitleId: data?.newJobTitleId ,
            newJobDescriptionId: data?.newJobDescriptionId,
            orderNo: data?.orderNo ?? '',
            orderDate: data?.orderDate ?? '',
            note: data?.note ?? '',
           
        },
    });



   async function onSubmit(values: z.infer<typeof formSchema>) {
             setSubmitting(true);
             try {
                if (data) {
                   const payload = {
                      ...values,
                      employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
                      oldJobTitleId: selectedUser?.jobTitleId,
                      oldJobDescriptionId: selectedUser?.jobDescriptionId,
                      newJobTitleId: values.newJobTitleId,
                      newJobDescriptionId: values.newJobDescriptionId,
                      orderNo: values.orderNo,
                      orderDate: values.orderDate,
                      note: values.note
                   };
                   await changeJobTitlesService.updateChangeJobTitles(data.id as string, payload);
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
                     oldJobTitleId: selectedUser?.jobTitleId,
                     oldJobDescriptionId: selectedUser?.jobDescriptionId,
                     newJobTitleId: values.newJobTitleId,
                     newJobDescriptionId: values.newJobDescriptionId,
                     orderNo: values.orderNo,
                     orderDate: values.orderDate,
                     note: values.note
                  };
                   if (selectedUser === null) {
                      toast.error('يجب اختيار موظف');
                      setSubmitting(false);
                      return;
                   }
                   await changeJobTitlesService.createChangeJobTitles(payload);
                   
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
              <div className='flex items-center gap-4 mt-3'>
              <div className='xl:col-span-4'>
                    <div className='w-full flex flex-col gap-2'>
                       <h1>العنوان الوظيفي السابق</h1>
                       <Input value={selectedUser?.jobTitleName} disabled />
                    </div>
                 </div>
                 <div className='xl:col-span-4'>
                    <div className='w-full flex flex-col gap-2'>
                       <h1>الوصف الوظيفي السابق</h1>
                       <Input value={selectedUser?.jobDescriptionName} disabled />
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
                     <div className='col-span-6'>
                     <FormField
                                    control={form.control}
                                    name='newJobTitleId'
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

                        <div className='col-span-6'>
                        <FormField
                                    control={form.control}
                                    name='newJobDescriptionId'
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
                       
                  </div>
                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='orderNo'
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

                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='orderDate'
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

export default EditJobTitleForm;