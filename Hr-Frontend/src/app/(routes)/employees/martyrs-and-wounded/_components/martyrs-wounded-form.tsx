'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { IMartyrsAndWounded } from '../page';

const formSchema = z.object({
   employeeId: z.string().optional(),
   healthStatus: z.number().optional(),
   endDateOfService: z.string().optional(),
   retirementDate: z.string().optional(),
   dateOfDeath: z.string().optional(),
   administrativeOrderNo: z.string().optional(),
   administrativeOrderDate: z.string().optional(),
   isPoliticallyDismissed: z.boolean().optional(),
   dateOfMartyrdom: z.string().optional(),
   note: z.string().optional()
});

const healthStatusOptions = [
   { value: 1, label: 'شهيد' },
   { value: 2, label: 'جريح' }
];

type Props = {
   data?: IMartyrsAndWounded;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};
const MartyrsWoundedForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {}
   });

   const router = useRouter();

   // Handel Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? ''
            };
            // await employeeCourseService.putEmployeeCourseById(data.id as string, payload);

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
            // await employeeCourseService.createEmployeeCourse(payload);
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
            <DialogContent className='w-[700px] '>
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
                  <div className='flex flex-col justify-between w-full p-2'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     <div className='flex  gap-4 mt-3'>
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

                     {/* 2 */}

                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>العنوان الوظيفي</h1>
                              <Input value={selectedUser?.fullName} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الوصف الوظيفي</h1>
                              <Input value={selectedUser?.lotNumber} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الدرجة الوظيفية</h1>
                              <Input value={selectedUser?.jobCode} disabled />
                           </div>
                        </div>
                     </div>

                     {/* 3 */}
                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الفئة الوظيفية</h1>
                              <Input value={selectedUser?.fullName} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>الدائرة</h1>
                              <Input value={selectedUser?.lotNumber} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>القسم</h1>
                              <Input value={selectedUser?.jobCode} disabled />
                           </div>
                        </div>
                     </div>

                     {/* 4 */}
                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>تاريخ تسكين الدرجة</h1>
                              <Input value={selectedUser?.fullName} disabled />
                           </div>
                        </div>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>تاريخ تسكين الفئة</h1>
                              <Input value={selectedUser?.lotNumber} disabled />
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               {!data && <Separator />}
               {/* Form Start */}
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     {/* start form */}
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='healthStatus'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>النوع</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {healthStatusOptions.map((option) => (
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

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='endDateOfService'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الخروج من الخدمة</FormLabel>
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
                              name='retirementDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ التقاعد</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='administrativeOrderNo'
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
                              name='administrativeOrderDate'
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

                        <div className='col-span-4 mt-5'>
                           <FormField
                              control={form.control}
                              name='isPoliticallyDismissed'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-start space-x-3 space-y-0   p-3 gap-2'>
                                    <FormControl>
                                       <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                       <FormLabel>هل مرفوض سياسيا؟</FormLabel>

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

export default MartyrsWoundedForm;
