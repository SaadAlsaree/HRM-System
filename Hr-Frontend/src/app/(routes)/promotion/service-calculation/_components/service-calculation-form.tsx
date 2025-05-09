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
import { IServiceCalculation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { serviceCalculationService } from '@/services/service-calculation.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { typeOfServiceService } from '@/services/system-settings/type-of-service.service';
import { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
import { IJobTitle } from '@/app/(routes)/system-settings/job-title/page';

const formSchema = z.object({
   employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
   fullName: z.string().optional(),
   orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
   orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
   typeOfServiceId: z.coerce.number().min(1, 'نوع الخدمة مطلوبة'),
   countOfMonth: z.number().min(1, 'مدة التنسيب مطلوبة'),
   status: z.string().optional(),
   notes: z.string().optional(),
   jobDegreeId: z.coerce.number().min(1, 'الدرجة الوظيفية مطلوبة'),
   jobTitleId: z.coerce.number().min(1, 'العنوان الوظيفي مطلوب'),
});

interface ITypeOfService {
   value: number;
   label: string;
}

type Props = {
   data?: IServiceCalculation;
   icon?: React.ReactNode;
   title: string;
   jobDegreesList: IJobDegree[];
   jobTitlesList: IJobTitle[];
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const ServiceCalculationForm = ({ data, icon, title, jobDegreesList, jobTitlesList, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const [typeOfServiceList, setTypeOfServiceList] = useState<ITypeOfService[]>([]);

   const getTypeOfService = async () => {
      const typeOfService = await typeOfServiceService.getTypeOfService({ Page: 1, PageSize: 100 });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newTypeList: ITypeOfService[] = typeOfService.data.items?.map((item: any) => ({
         value: item.id,
         label: item.name
      }));
      setTypeOfServiceList(newTypeList);
   };

   useEffect(() => {
      getTypeOfService();
   }, []);
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         employeeId: data?.employeeId ?? '',
         fullName: data?.fullName ?? '',
         orderNo: data?.orderNo ?? '',
         orderDate: data?.orderDate ?? '',
         countOfMonth: data?.countOfMonth ?? 0,
         status: data?.statusName ?? '',
         notes: data?.notes ?? '',
         jobDegreeId: data?.jobDegreeId ?? undefined
      }
   });
   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
      form.setValue('employeeId', user?.employeeId ?? '');
      form.setValue('fullName', user?.fullName ?? '');
   };

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegreesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobTitleOptions = jobTitlesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
               notes: values.notes ?? ''
            };
            await serviceCalculationService.updateServiceCalculation(data.id as string, payload);
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
               notes: values.notes ?? ''
            };
            if (selectedUser === null) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            await serviceCalculationService.createServiceCalculation(payload);
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-3'>
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
                        </div>
                        <div className='col-span-3'>
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
                        </div>
                        <div className='col-span-3'>
                           <FormField
                              control={form.control}
                              name='typeOfServiceId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع الخدمة</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='نوع الخدمة' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {typeOfServiceList.map((option, index) => (
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
                        <div className='col-span-3 '>
                           <FormField
                              control={form.control}
                              name='jobDegreeId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الدرجة الوظيفية الجديدة</FormLabel>
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
                     </div>

                     <div className='grid grid-cols-12 gap-4 w-full'>
                     <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='jobTitleId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>العنوان الوظيفي الجديد</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='العنوان الوظيفي' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent defaultValue={data?.id?.toString()}>
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
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='countOfMonth'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الاشهر</FormLabel>
                                    <FormControl>
                                       <Input
                                          placeholder='مدة التنسيب بالاشهر'
                                          type='number'
                                          {...field}
                                          onChange={(e) => field.onChange(Number(e.target.value))}
                                       />
                                    </FormControl>
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

export default ServiceCalculationForm;
