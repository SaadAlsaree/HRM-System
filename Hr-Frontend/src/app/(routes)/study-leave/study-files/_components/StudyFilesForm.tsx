'use client'; // أضف هذا السطر لأننا نستخدم useState و react-hook-form
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
import { studyFileService } from '@/services/study-file.service';
import { IStudyFile } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';

const formSchema = z.object({
   documentNo: z.string().min(1, 'رقم الكتاب مطلوب'),
   documentDate: z.string().min(1, 'تاريخ الكتاب مطلوب'),
   notes: z.string().optional()
});

type Props = {
   data?: IStudyFile;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const StudyFilesForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const router = useRouter();

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         documentNo: data?.documentNo ?? '',
         documentDate: data && data.documentDate ? new Date(data.documentDate).toISOString().split('T')[0] : '',
         notes: data?.notes ?? ''
      }
   });

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = { ...values, employeeId: data.employeeId };
            await studyFileService.updateStudyFile(data.id?.toString() || '', dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToCreate = { ...values, employeeId: selectedUser?.employeeId, createBy: 'user-id' };
            await studyFileService.createStudyFile(dataToCreate);
            toast.success('تم حفظ البيانات بنجاح.');
         }
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
               <Button variant={variant}>
                  <p>{title}</p>
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />
               {!data && (
                  <div className='flex flex-col justify-between w-full p-2'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     <div className='flex gap-4 mt-3'>
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

               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2' autoComplete='off'>
                     <div className='grid grid-cols-1 gap-4 xl:grid-cols-12'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='documentNo'
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
                              name='documentDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الكتاب</FormLabel>
                                    <FormControl>
                                       <Input placeholder='تاريخ الكتاب' type='date' {...field} />
                                    </FormControl>
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
                              <FormLabel>ملاحظات</FormLabel>
                              <FormControl>
                                 <Input placeholder='ملاحظات' type='text' {...field} />
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

export default StudyFilesForm;
