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
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { IInterruptions } from '../page';
import { interruptionService } from '@/services/system-settings/interruption.service';

const formSchema = z.object({
   notificationDate: z.string(),
   reason: z.string(),
   note: z.string().optional()
});

type Props = {
   data?: IInterruptions;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const InterruptionsForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         notificationDate: data && data.notificationDate ? new Date(data.notificationDate).toISOString().split('T')[0] : '',
         reason: data ? data.reason : '',
         note: data ? data.note : ''
      }
   });

   const router = useRouter();

   // Handel Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
               createBy: data.createBy ?? '3fa85f64-5717-4562-b3fc-2c963f66afa6'
            };
            await interruptionService.updateInterruption(data.id as string, payload);

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
               lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
            };
            if (selectedUser === null) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            await interruptionService.createInterruption(payload);
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
                  </div>
               )}

               {!data && <Separator />}
               {/* Form Start */}
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='col-span-4'>
                        <FormField
                           control={form.control}
                           name='notificationDate'
                           render={({ field }) => (
                              <FormItem className='flex flex-col'>
                                 <FormLabel>تاريخ الطلب</FormLabel>
                                 <Input type='date' {...field} className='mt-4' />

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <FormField
                        control={form.control}
                        name='reason'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>سبب الانقطاع</FormLabel>
                              <FormControl>
                                 <Textarea placeholder='' className='resize-none' {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

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

               {/* Form End */}
               <Separator />
               <DialogFooter>
                  <DialogClose asChild>
                     <Button
                        variant='destructive'
                        onClick={() => {
                           form.reset();
                           setSelectedUser(null);
                        }}
                     >
                        أغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default InterruptionsForm;
