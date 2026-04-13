'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Scissors } from 'lucide-react';
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
import { ILeave } from '../page';
import { leavesService } from '@/services/Leaves/leaves.service';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   employeeId: z.string(),
   orderNo: z.string(),
   orderDate: z.string(),
   daysToCut: z.number(),
   adjustBalance: z.boolean(),
   cutReason: z.string()
});

type Props = {
   data?: ILeave;
};

const LeavesCatForm = ({ data }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [fromDate, setFromDate] = useState(data?.fromDate ?? '');
   const [toDate, setToDate] = useState(data?.toDate ?? '');

   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         orderNo: data?.orderNo ?? '',
         orderDate: data && data.orderDate ? new Date(data.orderDate).toISOString().split('T')[0] : '',
         daysToCut: data?.daysToCut ?? 0,
         adjustBalance: data?.adjustBalance ?? true,
         cutReason: data?.cutReason ?? ''
      }
   });

   form.setValue('employeeId', data?.employeeId as string);
   form.setValue('adjustBalance', true);

   useEffect(() => {
      if (fromDate && toDate) {
         const start = new Date(fromDate);
         const end = new Date(toDate);
         const timeDiff = end.getTime() - start.getTime();
         const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
         form.setValue('daysToCut', dayDiff >= 0 ? dayDiff : 0);
      }
   }, [fromDate, toDate, form]);

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setSubmitting(true);
      try {
         console.log(values);
         await leavesService.updateLeaveCut(data?.id as string, values);
         toast.success('تم تعديل البيانات بنجاح.');

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
               <Button variant='ghost'>
                  <Scissors />
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[600px] bg-gray-100 dark:bg-gray-800'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>
                        {' '}
                        <p>قطع الأجازة</p>
                     </DialogTitle>
                  </div>
               </DialogHeader>

               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
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

                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='orderDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الامر الاداري </FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-6'>
                           <FormItem>
                              <FormLabel>تبدأ بتاريخ</FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder=''
                                    type='date'
                                    value={data?.fromDate}
                                    disabled
                                    onChange={(e) => setFromDate(e.target.value)}
                                 />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        </div>

                        <div className='col-span-6'>
                           <FormItem>
                              <FormLabel>تنتهي بتاريخ</FormLabel>
                              <FormControl>
                                 <Input placeholder='' type='date' value={data?.toDate} onChange={(e) => setToDate(e.target.value)} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        </div>
                     </div>

                     <div className='col-span-4'>
                        <FormField
                           control={form.control}
                           name='daysToCut'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>عدد الايام</FormLabel>
                                 <FormControl>
                                    <Input placeholder='' type='' {...field} disabled />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <FormField
                        control={form.control}
                        name='cutReason'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>السبب</FormLabel>
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

export default LeavesCatForm;
