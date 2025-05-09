'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useState } from 'react';
import { IStudyLeaveExtension } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { Plus } from 'lucide-react';
//services
import { studyLeaveExtensionService } from '@/services/study-leave-extension.service';
import { studyFileService } from '@/services/study-file.service';

const formSchema = z.object({
   studyExtensionOrderTypeId: z.number().min(1, 'نوع الأمر الإداري مطلوب'),
   studyFileId: z.string().min(1, 'رقم الملف الدراسي مطلوب'),
   orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
   countOfDay: z.number().min(1, 'عدد الأيام مطلوب'),
   orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
   fromDate: z.string().min(1, 'تاريخ البدء مطلوب'),
   toDate: z.string().min(1, 'تاريخ الانتهاء مطلوب'),
   notes: z.string().optional()
});

type Props = {
   data?: IStudyLeaveExtension;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

function ExtendStudyLeaveForm({ title, data, icon, variant }: Props) {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {}
   });

   // Handel Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? ''
            };
            await studyLeaveExtensionService.updateStudyLeaveExtension(data.id as string, payload);

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
               employeeId: selectedUser?.employeeId ?? ''
            };
            if (selectedUser === null) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            await studyLeaveExtensionService.createStudyLeaveExtension(payload);

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
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                     {/* رقم الملف الدراسي */}
                     <FormField
                        control={form.control}
                        name='studyFileId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>رقم الملف الدراسي</FormLabel>
                              <FormControl>
                                 <Input placeholder='رقم الملف الدراسي' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* أمر إداري بالتمديد */}
                     <FormField
                        control={form.control}
                        name='orderNo'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>أمر إداري بالتمديد</FormLabel>
                              <FormControl>
                                 <Input placeholder='أمر إداري بالتمديد' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* تاريخ الأمر الإداري */}
                     <FormField
                        control={form.control}
                        name='orderDate'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ الأمر الإداري</FormLabel>
                              <FormControl>
                                 <Input type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* تاريخ البدء */}
                     <FormField
                        control={form.control}
                        name='fromDate'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ البدء</FormLabel>
                              <FormControl>
                                 <Input type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* تاريخ الانتهاء */}
                     <FormField
                        control={form.control}
                        name='toDate'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>تاريخ الانتهاء</FormLabel>
                              <FormControl>
                                 <Input type='date' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* عدد الأيام */}
                     <FormField
                        control={form.control}
                        name='countOfDay'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>عدد الأيام</FormLabel>
                              <FormControl>
                                 <Input type='number' {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {/* الملاحظات */}
                     <FormField
                        control={form.control}
                        name='notes'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الملاحظات</FormLabel>
                              <FormControl>
                                 <Input placeholder='الملاحظات' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
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
            <DialogFooter>
               <Button
                  variant='destructive'
                  onClick={() => {
                     form.reset();
                     setSelectedUser(null);
                  }}
               >
                  إغلاق
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}

export default ExtendStudyLeaveForm;
