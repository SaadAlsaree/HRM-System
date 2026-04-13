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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';

import { IStudyLeave } from '../page';

// services
import { studyFileService } from '@/services/study-file.service';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IStudyFile } from '../../study-files/page';
import { studyLeaveService } from '@/services/study-leave.service';

export const studyLeaveSchema = z.object({
   employeeId: z.string().optional(),
   studyFileId: z.coerce.string(),
   academicCertificateTypeId: z.coerce.number(),
   academicAchievementId: z.coerce.number(),
   academicFieldId: z.coerce.number(),
   acceptanceYear: z.string(),
   nameOfIssuingCertificate: z.string(),
   financialInsuranceNo: z.string(),
   financialInsuranceDate: z.string(),
   releaseOrderDate: z.string(),
   releaseOrderNo: z.string(),
   countOfDays: z.number(),
   releaseDate: z.string(),
   hireOrderNo: z.string(),
   hireOrderDate: z.string(),
   hireDate: z.string(),
   countryId: z.coerce.number(),
   studyStatusId: z.coerce.number(),
   studyResultId: z.coerce.number(),
   notes: z.string().optional(),
   fromDate: z.string(),
   toDate: z.string()
});

export type StudyLeaveSchemaType = z.infer<typeof studyLeaveSchema>;

type Props = {
   data?: IStudyLeave;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
   academicAchievement: [];
   academicField: [];
   country: [];
   studyResult: [];
   studyStatus: [];
   academicCertificateType: [];
};

const StudyLeaveForm = ({
   title,
   data,
   icon,
   variant,
   academicAchievement,
   academicField,
   country,
   studyResult,
   studyStatus,
   academicCertificateType
}: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const [studyFileOption, setStudyFileOption] = useState<IStudyFile[]>([]);

   const academicAchievementOptions = academicAchievement?.map((achievement: { name: string; id: number }) => ({
      label: achievement.name,
      value: achievement.id
   }));

   const academicFieldOptions = academicField?.map((field: { name: string; id: number }) => ({
      label: field.name,
      value: field.id
   }));

   const studyStatusOptions = studyStatus?.map((status: { name: string; id: number }) => ({
      label: status.name,
      value: status.id
   }));

   const studyResultOptions = studyResult?.map((result: { name: string; id: number }) => ({
      label: result.name,
      value: result.id
   }));

   const countryOptions = country?.map((country: { name: string; id: number }) => ({
      label: country.name,
      value: country.id
   }));

   const academicCertificateTypeOptions = academicCertificateType?.map((type: { name: string; id: number }) => ({
      label: type.name,
      value: type.id
   }));

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   const router = useRouter();
   const form = useForm<z.infer<typeof studyLeaveSchema>>({
      resolver: zodResolver(studyLeaveSchema),
      defaultValues: {
         employeeId: data ? data.employeeId : selectedUser?.employeeId ?? '',
         studyFileId: data ? data.studyFileId : '',
         academicCertificateTypeId: data ? data.academicCertificateTypeId : 0,
         academicAchievementId: data ? data.academicAchievementId : 0,
         academicFieldId: data ? data.academicFieldId : 0,
         acceptanceYear: data && data.acceptanceYear ? new Date(data.acceptanceYear).toISOString().split('T')[0] : '',
         nameOfIssuingCertificate: data ? data.nameOfIssuingCertificate : '',
         financialInsuranceNo: data ? data.financialInsuranceNo : '',
         financialInsuranceDate:
            data && data.financialInsuranceDate ? new Date(data.financialInsuranceDate).toISOString().split('T')[0] : '',
         releaseOrderDate: data && data.releaseOrderDate ? new Date(data.releaseOrderDate).toISOString().split('T')[0] : '',
         releaseOrderNo: data ? data.releaseOrderNo : '',
         releaseDate: data && data.releaseDate ? new Date(data.releaseDate).toISOString().split('T')[0] : '',
         hireOrderNo: data ? data.hireOrderNo : '',
         hireOrderDate: data && data.hireOrderDate ? new Date(data.hireOrderDate).toISOString().split('T')[0] : '',
         hireDate: data && data.hireDate ? new Date(data.hireDate).toISOString().split('T')[0] : '',
         countryId: data ? data.countryId : 0,
         studyStatusId: data ? data.studyStatusId : 0,
         studyResultId: data ? data.studyResultId : 0,
         fromDate: data && data.fromDate ? new Date(data.fromDate).toISOString().split('T')[0] : '',
         toDate: data && data.toDate ? new Date(data.toDate).toISOString().split('T')[0] : '',
         notes: data ? data.notes : ''
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

   // get study file data by employee id useEffect
   useEffect(() => {
      if (selectedUser?.employeeId) {
         studyFileService
            .getStudyFiles({ employeeId: selectedUser.employeeId })
            .then((studyFiles) => {
               setStudyFileOption(studyFiles.data.items);
            })
            .catch((error) => {
               console.error('Error fetching study files:', error);
            });
      }
   }, [selectedUser, studyFileService]);
   const onSubmit = async (values: z.infer<typeof studyLeaveSchema>) => {
      setSubmitting(true);
      try {
         if (data) {
            console.log(values);
            const dataToUpdate = {
               ...values,
               employeeId: data ? data.employeeId : selectedUser?.employeeId ?? ''
            };
            await studyLeaveService.updateStudyLeave(data.id as string, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح.');
            setSubmitting(false);
            form.reset();
            router.refresh();
            setOpen(false);
         } else {
            console.log(values);
            const dataToCreate = {
               ...values,
               employeeId: selectedUser?.employeeId
            };
            await studyLeaveService.createStudyLeave(dataToCreate);
            toast.success('تم حفظ البيانات بنجاح.');
            setSubmitting(false);
            form.reset();
            router.refresh();
            setOpen(false);
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
            <DialogContent className='w-[700px] '>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     <ScrollArea className='h-[450px] rounded-md border p-4'>
                        <div className='grid grid-cols-12 gap-4'>
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='academicFieldId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الملف الدراسي</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {studyFileOption?.map((item) => (
                                                <SelectItem key={item.id?.toString()} value={item.id?.toString() ?? ''}>
                                                   {item.documentNo},{item.documentDate}
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
                                 name='academicFieldId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>نوع الشهادة </FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {academicFieldOptions?.map((item) => (
                                                <SelectItem key={item.value} value={item.value.toString()}>
                                                   {item.label}
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
                                 name='academicAchievementId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>التحصيل الدراسي</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {academicAchievementOptions?.map((item) => (
                                                <SelectItem key={item.value} value={item.value.toString()}>
                                                   {item.label}
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
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='academicCertificateTypeId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الاختصاص</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {academicCertificateTypeOptions?.map((item) => (
                                                <SelectItem key={item.value?.toString()} value={item.value?.toString() ?? ''}>
                                                   {item.label}
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
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='toDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تنتهي بتاريخ </FormLabel>
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
                                 name='countOfDays'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>عدد الايام</FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='number' {...field} disabled />
                                       </FormControl>

                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>

                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='acceptanceYear'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>سنة القبول</FormLabel>
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
                                 name='nameOfIssuingCertificate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>جهة اصدار الشهادة</FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='' {...field} />
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
                                 name='financialInsuranceNo'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>رقم كتاب الكفالة</FormLabel>
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
                                 name='financialInsuranceDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تاريخ كتاب الكفالة</FormLabel>
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
                                 name='releaseOrderNo'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>رقم كتاب الانفكاك </FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='' {...field} />
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
                                 name='releaseOrderDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تاريخ كتاب الانفكاك</FormLabel>
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
                                 name='releaseDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تاريخ الانفكاك</FormLabel>
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
                                 name='countryId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الدولة </FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {countryOptions?.map((item) => (
                                                <SelectItem key={item.value} value={item.value.toString()}>
                                                   {item.label}
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
                           <div className='col-span-4'>
                              <FormField
                                 control={form.control}
                                 name='studyResultId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>النتيجة</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {studyResultOptions?.map((item) => (
                                                <SelectItem key={item.value} value={item.value.toString()}>
                                                   {item.label}
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
                                 name='studyStatusId'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>الحالة الدراسية</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                          <FormControl>
                                             <SelectTrigger>
                                                <SelectValue placeholder='' />
                                             </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                             {studyStatusOptions?.map((item) => (
                                                <SelectItem key={item.value} value={item.value.toString()}>
                                                   {item.label}
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
                                 name='hireOrderNo'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>رقم كتاب المباشرة </FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='' {...field} />
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
                                 name='hireOrderDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تاريخ كتاب المباشرة</FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='date' {...field} />
                                       </FormControl>

                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                           </div>

                           <div className='col-span-6'>
                              <FormField
                                 control={form.control}
                                 name='hireDate'
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>تاريخ المباشرة </FormLabel>
                                       <FormControl>
                                          <Input placeholder='' type='date' {...field} />
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
                                 <FormLabel>الملاحظات</FormLabel>
                                 <FormControl>
                                    <Textarea placeholder='' className='resize-none' {...field} />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </ScrollArea>
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

export default StudyLeaveForm;
