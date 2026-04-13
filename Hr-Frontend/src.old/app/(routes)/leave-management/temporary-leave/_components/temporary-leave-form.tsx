'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { ITemporaryLeave } from '../page';
import { leavesService } from '@/services/Leaves/leaves.service';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   orderNo: z.string().min(1, 'رقم الزمنية مطلوب'),
   orderDate: z.string().min(1, 'تاريخ الزمنية مطلوب'),
   countOfMinutes: z.number().min(1, 'عدد الدقائق يجب أن يكون على الأقل 1'),
   note: z.string().optional()
});

type Props = {
   data?: ITemporaryLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const TemporaryLeaveForm = ({ data, icon, title, variant }: Props) => {
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
         countOfMinutes: data?.countOfMinutes,
         note: data?.note ?? ''
      }
   });

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = { ...values, employeeId: data.employeeId, typeOfLeaveId: 2, isInside: true };
            if (data.id) {
               await leavesService.updateLeave(data.id, dataToUpdate);
            }
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToCreate = { ...values, employeeId: selectedUser?.employeeId, typeOfLeaveId: 2, isInside: true };
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
            <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-4' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-2'>
                        <div className='xl:col-span-4'>
                           <FormField
                              control={form.control}
                              name='orderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الزمنية</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم الزمنية' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='xl:col-span-4'>
                           <FormField
                              control={form.control}
                              name='orderDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الزمنية</FormLabel>
                                    <FormControl>
                                       <Input placeholder='تاريخ الزمنية' type='date' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='xl:col-span-4'>
                           <FormField
                              control={form.control}
                              name='countOfMinutes'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الدقائق</FormLabel>
                                    <FormControl>
                                       <Input
                                          placeholder='عدد الدقائق'
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
                        name='note'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>ملاحظات</FormLabel>
                              <FormControl>
                                 <Textarea placeholder='ملاحظات' {...field} />
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

export default TemporaryLeaveForm;
