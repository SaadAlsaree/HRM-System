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
import { IEditDueDate } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { changeDueDateService } from '@/services/change-due-date.service';

const formSchema = z.object({
   employeeId: z.coerce.string().min(1, 'الرقم الوظيفي مطلوب'),
   orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
   orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
   newDegreeDueDate: z.coerce.string().min(1, 'تاريخ تسكين الدرجة مطلوب'),
   newCategoryDueDate: z.string().min(1, 'تاريخ تسكين الفئة مطلوب'),
   currentDegreeDueDate: z.string().optional(),
   currentCategoryDueDate: z.string().optional(),
   note: z.string().optional()
});

type Props = {
   data?: IEditDueDate;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const EditDueDateForm = ({ data, icon, title, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
      form.setValue('employeeId', selectedUser?.employeeId ?? '');
      form.setValue('currentCategoryDueDate', selectedUser?.categoryDueDate ?? '');
      form.setValue('currentDegreeDueDate', selectedUser?.degreeDueDate ?? '');
   };
   const router = useRouter();


   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         employeeId: data?.employeeId ?? '',
         newDegreeDueDate: data?.newDegreeDueDate,
         newCategoryDueDate: data?.newCategoryDueDate,
         orderNo: data?.orderNo ?? '',
         orderDate: data?.orderDate ?? '',
         note: data?.note ?? ''
      }
   });

   form.setValue('employeeId', selectedUser?.employeeId ?? data?.employeeId ?? '');
   form.setValue('currentCategoryDueDate', selectedUser?.categoryDueDate ?? data?.currentCategoryDueDate ?? '');
   form.setValue('currentDegreeDueDate', selectedUser?.degreeDueDate ?? data?.currentDegreeDueDate ?? '');

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: data.employeeId,
               orderNo: values.orderNo,
               orderDate: values.orderDate,
               newDegreeDueDate: values.newDegreeDueDate,
               newCategoryDueDate: values.newCategoryDueDate,
               currentDegreeDueDate: selectedUser?.degreeDueDate,
               currentCategoryDueDate: selectedUser?.categoryDueDate,
               note: values.note,
               createBy: selectedUser?.employeeId ?? '',
            };
            await changeDueDateService.updateChangeDueDate(data.id as string, payload);
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
               orderNo: values.orderNo,
               orderDate: values.orderDate,
               newDegreeDueDate: values.newDegreeDueDate,
               newCategoryDueDate: values.newCategoryDueDate,
               currentDegreeDueDate: selectedUser?.degreeDueDate ?? new Date().toISOString().split('T')[0],
               currentCategoryDueDate: selectedUser?.categoryDueDate ?? new Date().toISOString().split('T')[0],
               note: values.note,
               createBy: selectedUser?.employeeId ?? '',
            };
            if (selectedUser === null) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            await changeDueDateService.createChangeDueDate(payload);
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
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>تاريخ تسكين الدرجة القديمة</h1>
                              <Input value={selectedUser?.degreeDueDate} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>تاريخ تسكين الفئة القديمة</h1>
                              <Input value={selectedUser?.categoryDueDate} disabled />
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
                              name='newDegreeDueDate'
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
                        </div>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='newCategoryDueDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ تسكين الفئة الجديد </FormLabel>
                                    <FormControl>
                                       <Input placeholder='تاريخ تسكين الفئة' type='date' {...field} />
                                    </FormControl>

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
                                       <Input placeholder='تاريخ الامر الاداري' type='date' {...field} />
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

export default EditDueDateForm;
