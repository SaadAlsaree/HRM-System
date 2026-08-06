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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IPenalties } from './administrative-penalties-table';
import { Checkbox } from '@/components/ui/checkbox';
import { typeOfDisciplinaryService } from '@/services/system-settings/type-of-disciplinary.service';
import { employeeDisciplinary } from '@/services/Employee/employee-disciplinary.service';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const formSchema = z.object({
   typeOfDisciplinaryId: z.coerce.number().min(1, 'نوع العقوبة مطلوبة'),
   countOfDayDelay: z.coerce.number().min(0, 'عدد أيام التأخير مطلوبة'),
   titleOfBook: z.string().min(1, 'عنوان الكتاب مطلوب'),
   bookNo: z.string().min(1, 'رقم الكتاب مطلوب'),
   bookDate: z.string().min(1, 'تاريخ الكتاب مطلوب'),
   stopPromotion: z.boolean().optional(),
   disciplinaryLaw: z.string().optional(),
   reason: z.string().optional(),
   note: z.string().optional()
});

interface IPenaltyType {
   id: string | number;
   name: string;
   countOfDayDelay: number;
}

type Props = {
   data?: IPenalties;
   icon?: React.ReactNode;
   title?: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const formatDateForInput = (dateString?: string | null) => {
   if (!dateString) return '';
   const date = new Date(dateString);
   if (Number.isNaN(date.getTime())) return dateString.split('T')[0] || dateString;
   return date.toISOString().split('T')[0];
};

const AdministrativePenaltiesForm = ({ title, data, variant, employeeId, icon }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [penaltiesType, setPenaltiesType] = useState<IPenaltyType[]>([]);
   const { triggerRefresh } = useEmployeeProfileRefresh();
   const router = useRouter();

   useEffect(() => {
      const fetchPenaltiesType = async () => {
         try {
            const response = await typeOfDisciplinaryService.getTypeOfDisciplinary({ Page: 1, PageSize: 100 });
            setPenaltiesType(response?.data?.items || response?.items || []);
         } catch (error) {
            console.error('Error fetching penalties type:', error);
         }
      };

      fetchPenaltiesType();
   }, []);

   const penaltiesTypeOptions = (penaltiesType || []).map((item: any) => ({
      value: item.id.toString(),
      label: item.name
   }));

   const handelChangePenaltiesType = (id: string) => {
      const selectedPenaltiesType = penaltiesType.find((item: IPenaltyType) => item.id?.toString() === id);
      if (selectedPenaltiesType) {
         form.setValue('countOfDayDelay', selectedPenaltiesType.countOfDayDelay || 0);
      }
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         typeOfDisciplinaryId: undefined,
         titleOfBook: '',
         bookNo: '',
         bookDate: '',
         countOfDayDelay: 0,
         stopPromotion: false,
         disciplinaryLaw: '',
         reason: '',
         note: ''
      }
   });

   useEffect(() => {
      if (open && data) {
         form.reset({
            typeOfDisciplinaryId: data?.typeOfDisciplinaryId ? Number(data.typeOfDisciplinaryId) : undefined,
            titleOfBook: data?.titleOfBook ?? '',
            bookNo: data?.bookNo ?? '',
            bookDate: formatDateForInput(data?.bookDate),
            countOfDayDelay: data?.countOfDayDelay ?? 0,
            stopPromotion: data?.stopPromotion ?? false,
            disciplinaryLaw: data?.disciplinaryLaw ?? '',
            reason: data?.reason ?? '',
            note: data?.note ?? ''
         });
      } else if (open && !data) {
         form.reset({
            typeOfDisciplinaryId: undefined,
            titleOfBook: '',
            bookNo: '',
            bookDate: '',
            countOfDayDelay: 0,
            stopPromotion: false,
            disciplinaryLaw: '',
            reason: '',
            note: ''
         });
      }
   }, [open, data, form]);

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const empId = employeeId || data?.employeeId || '';
         if (data) {
            const dataToUpdate = {
               employeeId: empId,
               ...values
            };
            await employeeDisciplinary.putEmployeeDisciplinaryById(data.id as string, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح .');
         } else {
            const dataToCreate = {
               employeeId: empId,
               ...values
            };
            await employeeDisciplinary.createEmployeeDisciplinary(dataToCreate);
            toast.success('تم حفظ البيانات بنجاح .');
         }
         form.reset();
         setSubmitting(false);
         setOpen(false);
         triggerRefresh();
         router.refresh();
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
            <DialogContent className='w-[600px] max-w-[95vw]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{data ? 'تعديل العقوبة الإدارية' : (title ? title : 'إضافة عقوبة إدارية')}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='typeOfDisciplinaryId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع العقوبة</FormLabel>
                                    <Select
                                       value={field.value ? String(field.value) : ''}
                                       onValueChange={(value) => {
                                          const numericValue = parseInt(value, 10);
                                          field.onChange(numericValue);
                                          handelChangePenaltiesType(value);
                                       }}
                                    >
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='حدد نوع العقوبة' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {penaltiesTypeOptions.map((option) => (
                                             <SelectItem key={option.value} value={option.value}>
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

                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='countOfDayDelay'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>أيام التأخير</FormLabel>
                                    <FormControl>
                                       <Input
                                          placeholder='أيام التأخير'
                                          type='number'
                                          value={field.value ?? 0}
                                          onChange={(e) => field.onChange(Number(e.target.value))}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='titleOfBook'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عنوان الكتاب</FormLabel>
                                    <FormControl>
                                       <Input placeholder='عنوان الكتاب' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
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

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الكتاب</FormLabel>
                                    <FormControl>
                                       <Input type='date' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='disciplinaryLaw'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>المادة القانونية</FormLabel>
                                    <FormControl>
                                       <Input placeholder='المادة القانونية' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                           <FormField
                              control={form.control}
                              name='stopPromotion'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-center space-x-3 space-y-0 rounded-md border p-3 mt-7 gap-2'>
                                    <FormControl>
                                       <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                       <FormLabel>إيقاف العلاوة</FormLabel>
                                    </div>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <FormField
                        control={form.control}
                        name='reason'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>سبب العقوبة</FormLabel>
                              <FormControl>
                                 <Input placeholder='سبب العقوبة' type='text' {...field} />
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
                              <FormLabel>ملاحظات</FormLabel>
                              <FormControl>
                                 <Input placeholder='ملاحظات' type='text' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button disabled={isSubmitting} className='w-full'>
                        {isSubmitting ? (
                           <>
                              <p className='ml-2'>جاري الحفظ...</p> <Spinner />
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

export default AdministrativePenaltiesForm;
