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
import { ILogLeavesBalances } from './leaves-balances-table';
import { logLeavesBalancesService } from '@/services/Leaves/log-leaves-balances.service';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   nameOfIssuing: z.string().min(2).max(35),
   countOfDay: z.coerce.number().min(1).max(500),
   bookNo: z.string().min(3).max(55),
   bookDate: z.coerce.string(),
   note: z.string().optional()
});

type Props = {
   data?: ILogLeavesBalances;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};
const LeavesBalancesForm = ({ title, data, employeeId, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);

   const router = useRouter();
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         bookDate: data?.bookDate,
         nameOfIssuing: data?.nameOfIssuing,
         countOfDay: data?.countOfDay,
         bookNo: data?.bookNo,
         note: data?.note
      }
   });

   // Handel Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = {
               employeeId: employeeId ?? '',
               lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
               ...values
            };
            console.log(dataToUpdate);
            await logLeavesBalancesService.updateLogLeavesBalances(data.id as string, dataToUpdate);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            router.refresh();
            setOpen(false);
         } else {
            const dataToCreate = {
               employeeId: employeeId ?? '',
               createBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
               ...values
            };
            await logLeavesBalancesService.createLogLeavesBalances(dataToCreate);
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
            <DialogContent className='w-[580px] '>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                     {/* <Button variant='ghost' size='icon' className='rounded-full' onClick={() => setOpen(false)}>
                   <X className='h-4 w-4' />
                </Button> */}
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='nameOfIssuing'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الجهة المانحة</FormLabel>
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
                              name='countOfDay'
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
                        <div className='col-span-6'>
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

                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem className='flex flex-col'>
                                    <FormLabel>تاريخ الكتاب</FormLabel>
                                    <Input placeholder='' type='date' {...field} className='mt-4' />

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
                              <FormLabel>الملاحظات </FormLabel>
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
                        أغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default LeavesBalancesForm;
