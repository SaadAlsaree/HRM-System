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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IAdministrativeOrder } from '.';
import { DatetimePicker } from '@/components/ui/datetime-picker';
import { formatDate } from '@/utils/format-date';
import { administrativeOrderService } from '@/services/administrative-order.service';

const administrativeOrderTypeOptions = [
   { label: 'الأمر الوزاري بالتعيين', value: 1 },
   { label: 'الأمر الأداري بالتعيين', value: 2 },
   { label: 'الأمر الأداري بالمباشرة', value: 3 },
   { label: 'الأمر الأداري بتثبيت العمر', value: 4 }
];

const formSchema = z.object({
   administrativeOrderType: z.coerce.number(),
   bookTitle: z.string().min(3).max(250),
   orderNo: z.string().min(3).max(300),
   orderDate: z.coerce.string(),
   CreateBy: z.string().optional(),
   lastUpdateBy: z.string().optional(),
   employeeId: z.string().optional()
});

type Props = {
   data?: IAdministrativeOrder;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};
const AdministrativeOrderForm = ({ data, icon, title, variant, employeeId }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);

   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         employeeId: data?.employeeId,
         administrativeOrderType: data?.administrativeOrderType,
         bookTitle: data?.bookTitle ?? '',
         orderNo: data?.orderNo ?? '',
         orderDate: data?.orderDate,
         CreateBy: data?.CreateBy ?? '',
         lastUpdateBy: data?.lastUpdateBy ?? ''
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            // values.orderDate = formatDate(new Date(values.orderDate));
            // values.lastUpdateBy = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
            // values.CreateBy = undefined;
            // values.employeeId = undefined;
            // console.log(values);
            const dataToUpdate = {
               orderNo: values.orderNo,
               bookTitle: values.bookTitle,
               orderDate: values.orderDate,
               administrativeOrderType: values.administrativeOrderType,
               lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
            };
            await administrativeOrderService.updateAdministrativeOrder(data.id as string, dataToUpdate);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            setOpen(false);
            router.refresh();
         } else {
            values.employeeId = employeeId;
            values.orderDate = formatDate(new Date(values.orderDate));
            values.lastUpdateBy = undefined;
            values.CreateBy = employeeId;
            await administrativeOrderService.createAdministrativeOrder(values);

            console.log(values);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            setOpen(false);
            router.refresh();
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
            <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-3xl mx-auto py-10'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='administrativeOrderType'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع الأمر</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field?.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {administrativeOrderTypeOptions?.map((option) => (
                                             <SelectItem key={option.value} value={option.value?.toString()}>
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

                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookTitle'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>العنوان</FormLabel>
                                    <FormControl>
                                       <Input placeholder='العنوان' type='text' {...field} />
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
                              name='orderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الأمر</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم الأمر' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-6 mt-2.5'>
                           <FormField
                              control={form.control}
                              name='orderDate'
                              render={({ field }) => (
                                 <FormItem className='flex flex-col'>
                                    <FormLabel>تاريخ التعين</FormLabel>
                                    <DatetimePicker {...field} value={new Date(field.value)} format={[['days', 'months', 'years']]} />

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>
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

export default AdministrativeOrderForm;
