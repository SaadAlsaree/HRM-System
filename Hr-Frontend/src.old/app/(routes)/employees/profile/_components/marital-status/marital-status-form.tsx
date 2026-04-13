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
import { marriageInformationService } from '@/services/marriage-information.service';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   firstName: z.string().min(2).max(100),
   secondName: z.string().min(2).max(100),
   thirdName: z.string().min(2).max(100),
   surName: z.string().min(2).max(100),
   childrenCount: z.coerce.number().min(0).max(100),
   marriageDate: z.coerce.string(),
   notes: z.coerce.string().optional()
});

export interface IMarriageInformation {
   id?: string;
   employeeId?: string;
   firstName?: string;
   secondName?: string;
   thirdName?: string;
   surName?: string;
   fullName?: string;
   marriageDate?: string; // Or Date if you want to handle it as a Date object
   childrenCount?: number;
   notes?: string;
}

type Props = {
   data?: IMarriageInformation;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const MaritalStatusForm = ({ title, data, employeeId, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);

   const router = useRouter();
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: data?.firstName,
         secondName: data?.secondName,
         thirdName: data?.thirdName,
         surName: data?.surName,
         childrenCount: data?.childrenCount,
         marriageDate: data?.marriageDate,
         notes: data?.notes || ''
      }
   });

   // Handle Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);

      try {
         if (data) {
            const dataToUpdate = {
               employeeId: employeeId ?? '',
               lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
               ...values
            };
            await marriageInformationService.updateMarriageInformation(data.id as string, dataToUpdate);
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
            await marriageInformationService.createMarriageInformation(dataToCreate);
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
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='firstName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الاسم الأول</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الاسم الأول' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='secondName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الاسم الثاني</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الاسم الثاني' type='text' {...field} />
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
                              name='thirdName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الاسم الثالث</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الاسم الثالث' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='surName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>اللقب</FormLabel>
                                    <FormControl>
                                       <Input placeholder='اللقب' type='text' {...field} />
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
                              name='childrenCount'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الابناء</FormLabel>
                                    <FormControl>
                                       <Input placeholder='عدد الابناء' type='number' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-6 mt-3'>
                           <FormField
                              control={form.control}
                              name='marriageDate'
                              render={({ field }) => (
                                 <FormItem className='flex flex-col'>
                                    <FormLabel>تاريخ الزواج</FormLabel>
                                    <Input placeholder='' type='date' {...field} className='mt-4' />
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

export default MaritalStatusForm;
