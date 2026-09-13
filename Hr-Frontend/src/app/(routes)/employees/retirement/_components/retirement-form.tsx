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
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { IRetirement } from '../page';
import { retirementService } from '@/services/retirement.service';

const formSchema = z.object({
   employeeId: z.string().optional(),
   directorateId: z.number().optional(),
   subDirectorateId: z.number().optional(),
   startDate: z.string().optional(),
   academicAchievementId: z.number().optional(),
   jobDegreeId: z.number().optional(),
   jobCategoryId: z.number().optional(),
   jobTitleId: z.number().optional(),
   decisionToFixAge: z.string().optional(),
   employeePositionId: z.string().optional(),
   endDateOfService: z.string().optional(),
   birthdate: z.string().optional(),
   retirementDate: z.coerce.number().optional(),
   administrativeOrderNo: z.string().optional(),
   administrativeOrderDate: z.string().optional(),
   isPoliticallyDismissed: z.boolean().optional(),
   note: z.string().optional()
});

type Props = {
   data?: IRetirement;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const RetirementForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         endDateOfService: data?.endDateOfService ? data.endDateOfService.split('T')[0] : '',
         decisionToFixAge: data?.decisionToFixAge ?? '',
         retirementDate: data?.retirementDate ?? 60,
         administrativeOrderNo: data?.administrativeOrderNo ?? '',
         administrativeOrderDate: data?.administrativeOrderDate ? data.administrativeOrderDate.split('T')[0] : '',
         isPoliticallyDismissed: data?.isPoliticallyDismissed ?? false,
         note: data?.note ?? ''
      }
   });

   useEffect(() => {
      if (open) {
         form.reset({
            endDateOfService: data?.endDateOfService ? data.endDateOfService.split('T')[0] : '',
            decisionToFixAge: data?.decisionToFixAge ?? '',
            retirementDate: data?.retirementDate ?? 60,
            administrativeOrderNo: data?.administrativeOrderNo ?? '',
            administrativeOrderDate: data?.administrativeOrderDate ? data.administrativeOrderDate.split('T')[0] : '',
            isPoliticallyDismissed: data?.isPoliticallyDismissed ?? false,
            note: data?.note ?? ''
         });
         setSelectedUser(null);
      }
   }, [open, data, form]);

   const router = useRouter();

   // Handle Submit
   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
               endDateOfService: values.endDateOfService ? values.endDateOfService : undefined,
               administrativeOrderDate: values.administrativeOrderDate ? values.administrativeOrderDate : undefined,
               retirementDate: values.retirementDate ? Number(values.retirementDate) : 60
            };
            const response = await retirementService.updateRetirement(data.id as string, payload);
            if (response && response.succeeded === false) {
               toast.error(response.message || 'تعذر تعديل البيانات.');
               setSubmitting(false);
               return;
            }

            toast.success('تم تعديل البيانات بنجاح.');
            form.reset();
            setSubmitting(false);
            setSelectedUser(null);
            router.refresh();
            setOpen(false);
         } else {
            if (!selectedUser?.employeeId) {
               toast.error('يجب اختيار موظف أولاً');
               setSubmitting(false);
               return;
            }
            const payload = {
               ...values,
               employeeId: selectedUser.employeeId,
               directorateId: selectedUser.directorateId,
               subDirectorateId: selectedUser.subDirectorateId,
               jobDegreeId: selectedUser.jobDegreeId,
               jobCategoryId: selectedUser.jobCategoryId,
               jobTitleId: selectedUser.jobTitleId,
               endDateOfService: values.endDateOfService ? values.endDateOfService : undefined,
               administrativeOrderDate: values.administrativeOrderDate ? values.administrativeOrderDate : undefined,
               retirementDate: values.retirementDate ? Number(values.retirementDate) : 60,
               lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
            };

            const response = await retirementService.createRetirement(payload);
            if (response && response.succeeded === false) {
               toast.error(response.message || 'تعذر حفظ البيانات.');
               setSubmitting(false);
               return;
            }

            toast.success('تم حفظ البيانات بنجاح.');
            form.reset();
            setSubmitting(false);
            setSelectedUser(null);
            router.refresh();
            setOpen(false);
         }
      } catch (error: any) {
         console.error('Form submission error', error);
         toast.error(error?.response?.data?.message || 'حدث خطأ أثناء حفظ البيانات، يرجى المحاولة لاحقاً.');
         setSubmitting(false);
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
            <DialogContent className='max-w-[750px] max-h-[90vh] overflow-y-auto'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : (data ? 'تعديل بيانات التقاعد' : 'إضافة إلى التقاعد')}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />

               {!data && (
                  <div className='flex flex-col w-full p-2 gap-3'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     {selectedUser && (
                        <div className='bg-primary/5 p-4 rounded-lg space-y-3 border'>
                           {/* 1 */}
                           <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الاسم الرباعي واللقب</span>
                                 <Input value={selectedUser?.fullName ?? ''} disabled className='bg-muted font-medium' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>رقم الاضبارة</span>
                                 <Input value={selectedUser?.lotNumber ?? ''} disabled className='bg-muted' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الرقم الوظيفي</span>
                                 <Input value={selectedUser?.jobCode ?? ''} disabled className='bg-muted' />
                              </div>
                           </div>

                           {/* 2 */}
                           <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>العنوان الوظيفي</span>
                                 <Input value={selectedUser?.jobTitleName ?? '----'} disabled className='bg-muted' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الوصف الوظيفي</span>
                                 <Input value={selectedUser?.jobDescriptionName ?? '----'} disabled className='bg-muted' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الدرجة الوظيفية</span>
                                 <Input value={selectedUser?.jobDegreeName ?? '----'} disabled className='bg-muted' />
                              </div>
                           </div>

                           {/* 3 */}
                           <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الفئة الوظيفية</span>
                                 <Input value={selectedUser?.jobCategoryName ?? '----'} disabled className='bg-muted' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>الدائرة</span>
                                 <Input value={selectedUser?.directorateName ?? '----'} disabled className='bg-muted' />
                              </div>
                              <div className='flex flex-col gap-1'>
                                 <span className='text-xs text-muted-foreground'>القسم</span>
                                 <Input value={selectedUser?.departmentName ?? '----'} disabled className='bg-muted' />
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               )}

               {!data && <Separator />}

               {/* Form Start */}
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='endDateOfService'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ نهاية الخدمة</FormLabel>
                                    <FormControl>
                                       <Input type='date' {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='decisionToFixAge'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>قرار تثبيت العمر</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم أو نص القرار' type='text' {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='retirementDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>سن التقاعد</FormLabel>
                                    <FormControl>
                                       <Input placeholder='60' type='number' min='1' max='120' {...field} value={field.value ?? 60} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='administrativeOrderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم الأمر' type='text' {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='administrativeOrderDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input type='date' {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4 mt-4'>
                           <FormField
                              control={form.control}
                              name='isPoliticallyDismissed'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-center space-x-2 space-y-0 p-3 border rounded-md'>
                                    <FormControl>
                                       <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <FormLabel className='cursor-pointer mr-2'>هل مفصول سياسياً؟</FormLabel>
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
                                 <Textarea placeholder='أي ملاحظات إضافية...' className='resize-none' {...field} value={field.value ?? ''} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button type='submit' disabled={isSubmitting} className='w-full'>
                        {isSubmitting ? (
                           <>
                              <span className='ml-2'>جاري حفظ البيانات...</span> <Spinner />
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
                     <Button
                        type='button'
                        variant='destructive'
                        onClick={() => {
                           form.reset();
                           setSelectedUser(null);
                        }}
                     >
                        إغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default RetirementForm;
