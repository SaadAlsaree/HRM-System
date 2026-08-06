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

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IServiceCalculation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { serviceCalculationService } from '@/services/service-calculation.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { typeOfServiceService } from '@/services/system-settings/type-of-service.service';
import { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
import { IJobTitle } from '@/app/(routes)/system-settings/job-title/page';

const formSchema = z.object({
   employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
   fullName: z.string().optional(),
   orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
   orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
   typeOfServiceId: z.coerce.number().min(1, 'نوع الخدمة مطلوبة'),
   countOfMonth: z.coerce.number().min(1, 'عدد الأشهر مطلوبة'),
   status: z.string().optional(),
   notes: z.string().optional(),
   jobDegreeId: z.coerce.number().optional(),
   jobTitleId: z.coerce.number().optional(),
});

interface ITypeOfService {
   value: number;
   label: string;
}

type Props = {
   data?: IServiceCalculation;
   icon?: React.ReactNode;
   title?: string;
   jobDegreesList?: IJobDegree[];
   jobTitlesList?: IJobTitle[];
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const formatDateForInput = (dateString?: string | null) => {
   if (!dateString) return '';
   const date = new Date(dateString);
   if (Number.isNaN(date.getTime())) return dateString.split('T')[0] || dateString;
   return date.toISOString().split('T')[0];
};

const ServiceCalculationForm = ({ data, icon, title, jobDegreesList = [], jobTitlesList = [], variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const [typeOfServiceList, setTypeOfServiceList] = useState<ITypeOfService[]>([]);
   const router = useRouter();

   const getTypeOfService = async () => {
      try {
         const typeOfService = await typeOfServiceService.getTypeOfService({ Page: 1, PageSize: 100 });
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         const items = typeOfService?.data?.items || typeOfService?.items || [];
         const newTypeList: ITypeOfService[] = items.map((item: any) => ({
            value: item.id,
            label: item.name
         }));
         setTypeOfServiceList(newTypeList);
      } catch (e) {
         console.error('Failed to load type of service list', e);
      }
   };

   useEffect(() => {
      getTypeOfService();
   }, []);

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         employeeId: '',
         fullName: '',
         orderNo: '',
         orderDate: '',
         countOfMonth: 0,
         status: '',
         notes: '',
         typeOfServiceId: undefined,
         jobDegreeId: undefined,
         jobTitleId: undefined
      }
   });

   useEffect(() => {
      if (open && data) {
         form.reset({
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            orderNo: data?.orderNo ?? '',
            orderDate: formatDateForInput(data?.orderDate),
            typeOfServiceId: data?.typeOfServiceId ?? undefined,
            countOfMonth: data?.countOfMonth ?? 0,
            status: data?.statusName ?? '',
            notes: data?.notes ?? '',
            jobDegreeId: data?.jobDegreeId ?? undefined,
            jobTitleId: (data as any)?.jobTitleId ?? undefined
         });
         setSelectedUser({
            employeeId: data?.employeeId,
            fullName: data?.fullName,
            jobCode: data?.jobCode,
            lotNumber: data?.lotNumber,
         } as any);
      } else if (open && !data) {
         form.reset({
            employeeId: '',
            fullName: '',
            orderNo: '',
            orderDate: '',
            countOfMonth: 0,
            status: '',
            notes: '',
            typeOfServiceId: undefined,
            jobDegreeId: undefined,
            jobTitleId: undefined
         });
         setSelectedUser(null);
      }
   }, [open, data, form]);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
      form.setValue('employeeId', user?.employeeId ?? '');
      form.setValue('fullName', user?.fullName ?? '');
   };

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegreesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jobTitleOptions = jobTitlesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const payload: any = {
               ...values,
               employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
               notes: values.notes ?? ''
            };
            await serviceCalculationService.updateServiceCalculation(data.id as string, payload);
            toast.success('تم تعديل البيانات بنجاح .');
            form.reset();
            setSubmitting(false);
            setSelectedUser(null);
            router.refresh();
            setOpen(false);
         } else {
            const payload: any = {
               ...values,
               employeeId: selectedUser?.employeeId ?? '',
               notes: values.notes ?? ''
            };
            if (!payload.employeeId) {
               toast.error('يجب اختيار موظف');
               setSubmitting(false);
               return;
            }
            await serviceCalculationService.createServiceCalculation(payload);
            toast.success('تم حفظ البيانات بنجاح .');
            form.reset();
            setSubmitting(false);
            router.refresh();
            setOpen(false);
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('حدث خطأ أثناء حفظ البيانات. يرجى المحاولة مرة أخرى.');
         setSubmitting(false);
      }
   }

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant}>
                  {title && <p>{title}</p>}
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[680px] max-w-[95vw]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{data ? 'تعديل احتساب الخدمة' : (title ? title : 'إضافة احتساب خدمة')}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />

               {!data && (
                  <div className='flex flex-col items-center justify-between w-full p-2'>
                     <EmployeeSearch onSelectUser={handleUserSelect} />
                     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 w-full'>
                        <div className='w-full flex flex-col gap-2'>
                           <h1 className='text-sm font-medium'>الاسم الرباعي واللقب</h1>
                           <Input value={selectedUser?.fullName || ''} disabled />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                           <h1 className='text-sm font-medium'>رقم الاضبارة</h1>
                           <Input value={selectedUser?.lotNumber || ''} disabled />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                           <h1 className='text-sm font-medium'>الرقم الوظيفي</h1>
                           <Input value={selectedUser?.jobCode || ''} disabled />
                        </div>
                     </div>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 w-full'>
                        <div className='w-full flex flex-col gap-2'>
                           <h1 className='text-sm font-medium'>العنوان الوظيفي</h1>
                           <Input value={selectedUser?.jobTitleName || ''} disabled />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                           <h1 className='text-sm font-medium'>الدرجة الوظيفية</h1>
                           <Input value={selectedUser?.jobDegreeName || ''} disabled />
                        </div>
                     </div>
                  </div>
               )}

               {!data && <Separator />}
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <FormField
                           control={form.control}
                           name='orderNo'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>رقم الأمر الإداري</FormLabel>
                                 <FormControl>
                                    <Input placeholder='رقم الأمر الإداري' type='text' {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='orderDate'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>تاريخ الأمر الإداري</FormLabel>
                                 <FormControl>
                                    <Input placeholder='تاريخ الأمر الإداري' type='date' {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <FormField
                           control={form.control}
                           name='typeOfServiceId'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>نوع الخدمة</FormLabel>
                                 <Select
                                    value={field.value ? String(field.value) : ''}
                                    onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                 >
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='اختر نوع الخدمة' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {typeOfServiceList.map((option, index) => (
                                          <SelectItem key={index} value={option.value.toString()}>
                                             {option.label}
                                          </SelectItem>
                                       ))}
                                    </SelectContent>
                                 </Select>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='countOfMonth'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>عدد الأشهر المضافة</FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder='عدد الأشهر'
                                       type='number'
                                       value={field.value || ''}
                                       onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     {jobDegreesList.length > 0 && (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           <FormField
                              control={form.control}
                              name='jobDegreeId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الدرجة الوظيفية</FormLabel>
                                    <Select
                                       value={field.value ? String(field.value) : ''}
                                       onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                    >
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='الدرجة الوظيفية' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {jopDegreeOptions.map((option, index) => (
                                             <SelectItem key={index} value={option.value.toString()}>
                                                {option.label}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                           <FormField
                              control={form.control}
                              name='jobTitleId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>العنوان الوظيفي</FormLabel>
                                    <Select
                                       value={field.value ? String(field.value) : ''}
                                       onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                                    >
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='العنوان الوظيفي' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {jobTitleOptions.map((option, index) => (
                                             <SelectItem key={index} value={option.value.toString()}>
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
                     )}

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

                     <div className='pt-2'>
                        <Button disabled={isSubmitting} className='w-full'>
                           {isSubmitting ? (
                              <>
                                 <p className='ml-2'>جاري الحفظ...</p> <Spinner />
                              </>
                           ) : (
                              'حفظ البيانات'
                           )}
                        </Button>
                     </div>
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

export default ServiceCalculationForm;
