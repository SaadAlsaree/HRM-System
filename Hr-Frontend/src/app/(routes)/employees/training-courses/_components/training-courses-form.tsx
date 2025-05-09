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
import { ICourse } from '../page';
import { employeeCourseService } from '@/services/Employee/employee-course.service';

const formSchema = z.object({
   title: z.string().min(2).max(45),
   place: z.string().min(3).max(45),
   startDate: z.string(),
   endDate: z.string(),
   residentEntity: z.string().min(3).max(46),
   courseOrderNo: z.string().min(3).max(46),
   courseOrderDate: z.string(),
   courseDurationInDays: z.coerce.number(),
   evaluation: z.string().min(3).max(44)
});

type Props = {
   data?: ICourse;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const TrainingCoursesForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         title: data ? data.title : '',
         place: data ? data.place : '',
         startDate: data && data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : '',
         endDate: data && data.endDate ? new Date(data.endDate).toISOString().split('T')[0] : '',
         residentEntity: data ? data.residentEntity : '',
         courseOrderNo: data ? data.courseOrderNo : '',
         courseOrderDate: data && data.courseOrderDate ? new Date(data.courseOrderDate).toISOString().split('T')[0] : '',
         courseDurationInDays: data ? data.courseDurationInDays : 0,
         evaluation: data ? data.evaluation : ''
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
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? ''
            };
            await employeeCourseService.putEmployeeCourseById(data.id as string, payload);

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
            await employeeCourseService.createEmployeeCourse(payload);
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
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='title'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>اسم الدورة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='اسم الدورة' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='place'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>مكان الدورة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='مكان الدورة' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='startDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ بدء</FormLabel>
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
                              name='endDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ انتهاء الدورة</FormLabel>
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
                              name='residentEntity'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الجهة المقيمة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الجهة المقيمة' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='courseOrderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم كتاب الدورة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم كتاب الدورة' type='text' {...field} />
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
                              name='courseOrderDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ كتاب الدورة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='تاريخ كتاب الدورة' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='courseDurationInDays'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>مدة الدورة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='مدة الدورة' type='number' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='evaluation'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>النتيجة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='النتيجة' type='text' {...field} />
                                    </FormControl>

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

export default TrainingCoursesForm;
