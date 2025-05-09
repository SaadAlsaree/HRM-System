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
import { leavesService } from '@/services/Leaves/leaves.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMedicalLeave } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   countryId: z.coerce.number(),
   dateOfAssignment: z.string(),
   fromDate: z.string(),
   toDate: z.string(),
   isInside: z.boolean(),
   countOfDays: z.number(),
   noOfAssignment: z.string(),
   orderDate: z.string(),
   orderNo: z.string(),
   salaryStatusId: z.number(),
   sicknessTypeId: z.number(),
   note: z.string().optional()
});

const salaryStatusOptions = [
   { label: 'مع راتب', value: 1 },
   { label: 'بدون راتب', value: 2 },
   { label: 'راتب اسمي', value: 3 },
   { label: 'نصف راتب اسمي', value: 3 }
];

type Props = {
   data?: IMedicalLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   siknesTypesData: any[];
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   countryData: any[];
};

const MedicalLeaveForm = ({ data, icon, title, variant, countryData, siknesTypesData }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const countryOptions = countryData?.map((country) => ({
      label: country.name,
      value: country.id
   }));

   const sicknessTypeOptions = siknesTypesData?.map((sicknessType) => ({
      label: sicknessType.name,
      value: sicknessType.id
   }));
   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         countryId: data?.countryId ?? 0,
         dateOfAssignment: data && data.dateOfAssignment ? new Date(data.dateOfAssignment).toISOString().split('T')[0] : '',
         fromDate: data && data.fromDate ? new Date(data.fromDate).toISOString().split('T')[0] : '',
         toDate: data && data.toDate ? new Date(data.toDate).toISOString().split('T')[0] : '',
         countOfDays: data?.countOfDays ?? 0,
         isInside: data?.isInside ?? true,
         noOfAssignment: data?.noOfAssignment ?? '',
         orderDate: data && data.orderDate ? new Date(data.orderDate).toISOString().split('T')[0] : '',
         orderNo: data?.orderNo ?? '',
         salaryStatusId: data?.salaryStatusId ?? 0,
         sicknessTypeId: data?.sicknessTypeId ?? 0,
         note: data?.note ?? ''
      }
   });

   // useEffect to calculate countOfDays when startDate or endDate changes
   useEffect(() => {
      const { fromDate, toDate } = form.getValues();

      if (fromDate && toDate) {
         const start = new Date(fromDate);
         const end = new Date(toDate);
         if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
            const timeDiff = end.getTime() - start.getTime();
            const dayDiff = timeDiff / (1000 * 3600 * 24) + 1; // Add 1 day since both start and end dates are inclusive

            // Update countOfDays value
            form.setValue('countOfDays', dayDiff);
         }
      }
   }, [form.watch('fromDate'), form.watch('toDate')]);

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      if (values.countOfDays > (selectedUser?.medicalBalance ?? 0)) {
         toast.error('لا يوجد رصيد كافي للاجازة');
         return;
      }

      if (values.countOfDays < 0) {
         toast.error('عدد الايام يجب ان يكون اكبر من 0');
         return;
      }

      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = { ...values, employeeId: data.employeeId, typeOfLeaveId: 3 };
            await leavesService.updateLeave(data.id, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح.');
         } else {
            const dataToCreate = { ...values, employeeId: selectedUser?.employeeId, createBy: 'user-id', typeOfLeaveId: 3 };
            await leavesService.createLeave(dataToCreate);
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
            <DialogContent className='w-[600px] bg-gray-100 dark:bg-gray-800'>
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

                     <div className='flex items-center gap-4 mt-3'>
                        <div className='xl:col-span-4'>
                           <div className='w-full flex flex-col gap-2'>
                              <h1>رصيد الاجازات</h1>
                              <Input value={selectedUser?.medicalBalance} disabled />
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2  py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='sicknessTypeId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع الاجازة المرضية</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {sicknessTypeOptions.map((type) => (
                                             <SelectItem key={type.value} value={type.value.toString()}>
                                                {type.label}
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
                              name='orderNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الامر الاداري</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='orderDate'
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
                     </div>

                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='noOfAssignment'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم كتاب الاحالة</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='dateOfAssignment'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ كتاب الاحالة </FormLabel>
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
                              name='fromDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تبدأ بتاريخ</FormLabel>
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
                              name='toDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تنتهي بتاريخ</FormLabel>
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
                              name='countOfDays'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الايام</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' disabled type='number' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='countryId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الدولة</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {countryOptions.map((country) => (
                                             <SelectItem key={country.value} value={country.value.toString()}>
                                                {country.label}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>

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
                              name='salaryStatusId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الراتب</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {salaryStatusOptions.map((option) => (
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

                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='isInside'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 mt-7'>
                                    <FormControl>
                                       <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                       <FormLabel>داخلية</FormLabel>

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

export default MedicalLeaveForm;
