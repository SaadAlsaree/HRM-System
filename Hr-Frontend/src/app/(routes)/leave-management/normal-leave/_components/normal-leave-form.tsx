'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
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
import { INormalLeave } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';

const formSchema = z.object({
   fromDate: z.string().min(1),
   orderNo: z.string().min(1),
   orderDate: z.string().min(1),
   salaryStatusId: z.coerce.number(),
   countOfDays: z.number().min(1, 'عدد الأيام يجب أن يكون على الأقل 1'),
   toDate: z.string().min(1, 'الحالة مطلوبة'),
   note: z.string().optional()
});

const salaryStatusOptions = [
   { label: 'مع راتب', value: 1 },
   { label: 'بدون راتب', value: 2 },
   { label: 'راتب اسمي', value: 3 },
   { label: 'نصف راتب اسمي', value: 3 }
];

type Props = {
   data?: INormalLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const NormalLeaveForm = ({ data, icon, title, variant }: Props) => {
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
         fromDate: data && data.fromDate ? new Date(data.fromDate).toISOString().split('T')[0] : '',
         orderNo: data?.orderNo ?? '',
         orderDate: data && data.orderDate ? new Date(data.orderDate).toISOString().split('T')[0] : '',
         toDate: data && data.toDate ? new Date(data.toDate).toISOString().split('T')[0] : '',
         countOfDays: data?.countOfDays ?? 0,
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
      if (values.countOfDays > (selectedUser?.medicalBalance ?? 0)) {
         toast.error('لا يوجد رصيد كافي للاجازة');
         return;
      }

      if (values.countOfDays < 0) {
         toast.error('عدد الايام يجب ان يكون اكبر من 0');
         return;
      }

      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = { ...values, employeeId: data.employeeId, typeOfLeaveId: 1, isInside: true };
            if (data.id) {
               await leavesService.updateLeave(data.id, dataToUpdate);
            } else {
               throw new Error('Data ID is undefined');
            }
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToSave = { ...values, employeeId: selectedUser?.employeeId, typeOfLeaveId: 1, isInside: true };
            await leavesService.createLeave(dataToSave);
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
            <DialogContent className='w-[580px] bg-gray-100 dark:bg-gray-800'>
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

                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>رصيد الاجازات</h1>
                              <Input value={selectedUser?.balance} disabled />
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 gap-2' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
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
                        <div className='col-span-4'>
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
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='fromDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تبدأ بتاريخ</FormLabel>
                                    <FormControl>
                                       <Input placeholder='تبدأ بتاريخ' type='date' {...field} />
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
                                    <FormLabel>تنتهي بتاريخ</FormLabel>
                                    <FormControl>
                                       <Input placeholder='تنتهي بتاريخ' type='date' {...field} />
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
                                    <FormLabel>عدد الأيام</FormLabel>
                                    <FormControl>
                                       <Input placeholder='عدد الأيام' type='number' {...field} disabled />
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
                                    <FormLabel>الراتب</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {salaryStatusOptions.map((option) => (
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
                     <div className='col-span-2'>
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

export default NormalLeaveForm;
