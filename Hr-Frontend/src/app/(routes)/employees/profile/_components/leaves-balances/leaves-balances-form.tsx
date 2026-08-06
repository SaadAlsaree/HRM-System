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
import { ILogLeavesBalances } from './leaves-balances-table';
import { logLeavesBalancesService } from '@/services/Leaves/log-leaves-balances.service';
import { Textarea } from '@/components/ui/textarea';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const formSchema = z.object({
   nameOfIssuing: z.string().min(1, 'الجهة المانحة مطلوبة'),
   countOfDay: z.coerce.number().min(1, 'عدد الأيام مطلوب'),
   bookNo: z.string().min(1, 'رقم الكتاب مطلوب'),
   bookDate: z.string().min(1, 'تاريخ الكتاب مطلوب'),
   note: z.string().optional()
});

type Props = {
   data?: ILogLeavesBalances;
   icon?: React.ReactNode;
   title?: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const formatDateForInput = (dateString?: string | null) => {
   if (!dateString) return '';
   const date = new Date(dateString);
   if (Number.isNaN(date.getTime())) return dateString.split('T')[0] || dateString;
   return date.toISOString().split('T')[0];
};

const LeavesBalancesForm = ({ title, data, employeeId, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const { triggerRefresh } = useEmployeeProfileRefresh();
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         bookDate: '',
         nameOfIssuing: '',
         countOfDay: 0,
         bookNo: '',
         note: ''
      }
   });

   useEffect(() => {
      if (open && data) {
         form.reset({
            bookDate: formatDateForInput(data.bookDate),
            nameOfIssuing: data.nameOfIssuing ?? '',
            countOfDay: data.countOfDay ?? 0,
            bookNo: data.bookNo ?? '',
            note: data.note ?? ''
         });
      } else if (open && !data) {
         form.reset({
            bookDate: '',
            nameOfIssuing: '',
            countOfDay: 0,
            bookNo: '',
            note: ''
         });
      }
   }, [open, data, form]);

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const empId = employeeId || data?.employeeId || '';
         if (data) {
            const dataToUpdate = {
               employeeId: empId,
               ...values
            };
            await logLeavesBalancesService.updateLogLeavesBalances(data.id as string, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح .');
         } else {
            const dataToCreate = {
               employeeId: empId,
               ...values
            };
            await logLeavesBalancesService.createLogLeavesBalances(dataToCreate);
            toast.success('تم حفظ البيانات بنجاح .');
         }
         form.reset();
         setSubmitting(false);
         setOpen(false);
         triggerRefresh();
         router.refresh();
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('حدث خطأ أثناء حفظ البيانات. يرجى المحاولة مرة أخرى.');
         setSubmitting(false);
      }
   }

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant}>
                  {title && <p>{title}</p>}
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[580px] max-w-[95vw]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{data ? 'تعديل رصيد الإجازة' : (title ? title : 'إضافة رصيد إجازة')}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='nameOfIssuing'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الجهة المانحة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الجهة المانحة' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='countOfDay'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الأيام</FormLabel>
                                    <FormControl>
                                       <Input
                                          placeholder='عدد الأيام'
                                          type='number'
                                          value={field.value || ''}
                                          onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الكتاب</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم الكتاب' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem className='flex flex-col'>
                                    <FormLabel>تاريخ الكتاب</FormLabel>
                                    <FormControl>
                                       <Input type='date' {...field} />
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
                              <FormLabel>الملاحظات</FormLabel>
                              <FormControl>
                                 <Textarea placeholder='ملاحظات' className='resize-none' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <Button disabled={isSubmitting} className='w-full'>
                        {isSubmitting ? (
                           <>
                              <p className='ml-2'>جاري الحفظ...</p> <Spinner />
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

export default LeavesBalancesForm;
