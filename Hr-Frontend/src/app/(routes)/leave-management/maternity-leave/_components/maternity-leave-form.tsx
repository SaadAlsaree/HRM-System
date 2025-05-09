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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMaternityLeave } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { leavesService } from '@/services/Leaves/leaves.service';

// import { maternityLeaveService } from '@/services/MaternityLeave/maternity-leave.service';

const formSchema = z.object({
   orderNo: z.string().min(3).max(55),
   orderDate: z.string(),
   noOfBirthCertificate: z.string().min(3).max(55),
   dateOfBirthCertificate: z.string(),
   fromDate: z.string(),
   toDate: z.string(),
   countOfDays: z.number(),
   salaryStatusId: z.coerce.number(),
   isInside: z.boolean(),
   note: z.string()
});

const salaryStatusOptions = [
   { label: 'مع راتب', value: 1 },
   { label: 'بدون راتب', value: 2 },
   { label: 'راتب اسمي', value: 3 },
   { label: 'نصف راتب اسمي', value: 4 },
   { label: 'نصف راتب اسمي + راتب اسمي', value: 5 }
];

type Props = {
   data?: IMaternityLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const MaternityLeaveForm = ({ data, icon, title, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const router = useRouter();

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         // dateOfAssignment: data ? data.dateOfAssignment : new Date().toISOString().split('T')[0],
         orderNo: data ? data.orderNo : '',
         orderDate: data && data.orderDate ? new Date(data.orderDate).toISOString().split('T')[0] : '',
         noOfBirthCertificate: data ? data.noOfBirthCertificate : '',
         dateOfBirthCertificate:
            data && data.dateOfBirthCertificate ? new Date(data.dateOfBirthCertificate).toISOString().split('T')[0] : '',
         fromDate: data && data.fromDate ? new Date(data.fromDate).toISOString().split('T')[0] : '',
         toDate: data && data.toDate ? new Date(data.toDate).toISOString().split('T')[0] : '',
         countOfDays: data ? data.countOfDays : 0,
         salaryStatusId: data ? data.salaryStatusId : 1,
         isInside: data ? data.isInside : true,
         note: data ? data.note : ''
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
            const dataToUpdate = {
               ...values,
               typeOfLeaveId: 4,
               employeeId: data.employeeId
            };
            await leavesService.updateLeave(data.id, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToCreate = {
               ...values,
               typeOfLeaveId: 4,
               employeeId: selectedUser?.id
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
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
                              name='noOfBirthCertificate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم بيان الولادة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='text' {...field} />
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
                              name='dateOfBirthCertificate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ بيان الولادة</FormLabel>
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
                              name='fromDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تبدأ بتاريخ</FormLabel>
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
                                    <FormLabel>تنتهي بتاريخ</FormLabel>
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
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='countOfDays'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الايام</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' disabled type='number' {...field} />
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
                                          {salaryStatusOptions.map((item) => (
                                             <SelectItem key={item.value} value={item.value.toString()}>
                                                {item.label}
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
                              name='isInside'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 mt-6'>
                                    <FormControl>
                                       <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                       <FormLabel>داخلية</FormLabel>

                                       <FormMessage />
                                    </div>
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
                              <FormLabel>الملاحظات</FormLabel>
                              <FormControl>
                                 <Textarea placeholder='' className='resize-none' {...field} />
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

export default MaternityLeaveForm;
