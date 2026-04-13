'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
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
import { leavesService } from '@/services/Leaves/leaves.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IAppointmentLeave } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   orderNo: z.string(),
   orderDate: z.string(),
   fromDate: z.string(),
   toDate: z.string(),
   countOfDays: z.number(),
   noOfRelease: z.string(),
   dateOfRelease: z.string(),
   releaseDate: z.string(),
   salaryStatusId: z.coerce.number(),
   note: z.string().optional()
});

const salaryStatusOptions = [
   { label: 'مع راتب', value: 1 },
   { label: 'بدون راتب', value: 2 },
   { label: 'راتب اسمي', value: 3 },
   { label: 'نصف راتب اسمي', value: 4 }
];

type Props = {
   data?: IAppointmentLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const AppointmentLeaveForm = ({ data, icon, title, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         orderNo: data?.orderNo ?? '',
         orderDate: data && data.orderDate ? new Date(data.orderDate).toISOString().split('T')[0] : '',
         fromDate: data && data.fromDate ? new Date(data.fromDate).toISOString().split('T')[0] : '',
         toDate: data && data.toDate ? new Date(data.toDate).toISOString().split('T')[0] : '',
         countOfDays: data?.countOfDays ?? 0,
         noOfRelease: data?.noOfRelease ?? '',
         dateOfRelease: data && data.dateOfRelease ? new Date(data.dateOfRelease).toISOString().split('T')[0] : '',
         releaseDate: data && data.releaseDate ? new Date(data.releaseDate).toISOString().split('T')[0] : '',
         salaryStatusId: data?.salaryStatusId ?? 0,
         note: data?.note ?? ''
      }
   });

   // useEffect to calculate countOfDays when startDate or endDate changes
   useEffect(() => {
      const { fromDate, toDate } = form.getValues();

      if (fromDate && toDate) {
         const start = new Date(fromDate);
         const end = new Date(toDate);
         if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
            const timeDiff = end.getTime() - start.getTime();
            const dayDiff = timeDiff / (1000 * 3600 * 24) + 1; // Add 1 day since both start and end dates are inclusive

            // Update countOfDays value
            form.setValue('countOfDays', dayDiff);
         }
      }
   }, [form.watch('fromDate'), form.watch('toDate')]);

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = { ...values, employeeId: data.employeeId, typeOfLeaveId: 8 };
            await leavesService.updateLeave(data.id, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToCreate = {
               ...values,
               employeeId: selectedUser?.employeeId,
               createBy: 'user-id',
               typeOfLeaveId: 8,
               isInside: true
            };
            await leavesService.createLeave(dataToCreate);
            toast.success('تم حفظ البيانات بنجاح.');
         }
         form.reset();
         setSubmitting(false);
         setOpen(false);
         router.refresh();
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('فشل في إرسال النموذج. يرجى المحاولة مرة أخرى.');
         setSubmitting(false);
      }
   };

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant}>
                  <p>{title}</p>
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[600px] bg-gray-100 dark:bg-gray-800'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />
               {!data && (
                  <div className='flex flex-col justify-between w-full p-2'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     <div className='flex gap-4 mt-3'>
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

               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='orderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-4'>
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
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='salaryStatusId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>حالة الراتب</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {salaryStatusOptions.map((type) => (
                                             <SelectItem key={type.value} value={type.value.toString()}>
                                                {type.label}
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
                              name='fromDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ البدء</FormLabel>
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
                              name='toDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الانتهاء</FormLabel>
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
                              name='countOfDays'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الايام</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='number' {...field} />
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
                              name='noOfRelease'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم كتاب الانفكاك</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='dateOfRelease'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ كتاب الانفكاك</FormLabel>
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
                              name='releaseDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الانفكاك</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12'>
                           <FormField
                              control={form.control}
                              name='note'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الملاحظات</FormLabel>
                                    <FormControl>
                                       <Textarea placeholder='' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='flex justify-end gap-2 mt-4'>
                        <Button type='submit' disabled={isSubmitting}>
                           {isSubmitting && <Spinner />}
                           حفظ
                        </Button>
                        <DialogClose asChild>
                           <Button type='button' variant='outline'>
                              إلغاء
                           </Button>
                        </DialogClose>
                     </div>
                  </form>
               </Form>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default AppointmentLeaveForm;
