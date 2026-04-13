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
import { IDisciplinaryDetails } from '../page';
import { typeOfDisciplinaryService } from '@/services/system-settings/type-of-disciplinary.service';
import { Checkbox } from '@/components/ui/checkbox';
import { employeeDisciplinary } from '@/services/Employee/employee-disciplinary.service';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';

const formSchema = z.object({
   typeOfDisciplinaryId: z.number(),
   countOfDayDelay: z.number().min(1),
   titleOfBook: z.string().min(2).max(75),
   bookNo: z.string().min(2).max(75),
   bookDate: z.coerce.string(),
   stopPromotion: z.boolean(),
   disciplinaryLaw: z.string().min(3).max(250),
   reason: z.string().min(3).max(500),
   note: z.string().min(0).optional(),
   employeeId: z.string().optional()
});

interface IPenaltyType {
   id: string | number;
   name: string;
   countOfDayDelay: number;
}
type Props = {
   data?: IDisciplinaryDetails;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const PenaltiesForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [penaltiesType, setPenaltiesType] = useState<IPenaltyType[]>([]);
   const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
   };

   useEffect(() => {
      const fetchPenaltiesType = async () => {
         try {
            const response = await typeOfDisciplinaryService.getTypeOfDisciplinary({ Page: 1, PageSize: 100 });
            setPenaltiesType(response?.data?.items);
         } catch (error) {
            console.error('Error fetching penalties type:', error);
         }
      };

      fetchPenaltiesType();
   }, []);

   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const penaltiesTypeOptions = penaltiesType?.map((item: any) => ({
      value: item.id.toString(),
      label: item.name
   }));

   //handel on change penaltiesType countOfDayDelay field
   const handelChangePenaltiesType = (id: string) => {
      const selectedPenaltiesType = penaltiesType.find((item: IPenaltyType) => item.id?.toString() === id);
      if (selectedPenaltiesType) {
         form.setValue('countOfDayDelay', selectedPenaltiesType.countOfDayDelay);
      }
   };

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         typeOfDisciplinaryId: data?.typeOfDisciplinaryId ? Number(data.typeOfDisciplinaryId) : undefined,
         titleOfBook: data?.titleOfBook ?? '',
         bookNo: data?.bookNo ?? '',
         bookDate: data?.bookDate?.toString() ?? '',
         countOfDayDelay: data?.countOfDayDelay,
         stopPromotion: data?.stopPromotion,
         disciplinaryLaw: data?.disciplinaryLaw ?? '',
         reason: data?.reason ?? '',
         note: data?.note ?? '',
         employeeId: data?.employeeId ?? selectedUser?.employeeId
      }
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
            await employeeDisciplinary.putEmployeeDisciplinaryById(data.id as string, payload);

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
            await employeeDisciplinary.createEmployeeDisciplinary(payload);

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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='typeOfDisciplinaryId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع العقوبة</FormLabel>
                                    <Select
                                       onValueChange={(value) => {
                                          // Convert the value to a number before setting it in the form
                                          const numericValue = parseInt(value, 10);
                                          field.onChange(numericValue);
                                          handelChangePenaltiesType(value);
                                       }}
                                       defaultValue={field.value?.toString()}
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

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='countOfDayDelay'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>ايام التاخير</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' disabled type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='titleOfBook'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عنوان الكتاب </FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='text' {...field} />
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
                              name='bookNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الكتاب</FormLabel>
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
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem className='flex flex-col'>
                                    <FormLabel>تاريخ الكتاب</FormLabel>
                                    <Input placeholder='' type='date' {...field} className='mt-4' />

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='stopPromotion'
                              render={({ field }) => (
                                 <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 mt-4 gap-2'>
                                    <FormControl>
                                       <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className='space-y-1 leading-none'>
                                       <FormLabel>ايقاف العلاوة </FormLabel>

                                       <FormMessage />
                                    </div>
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <FormField
                        control={form.control}
                        name='disciplinaryLaw'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>المادة القانونية </FormLabel>
                              <FormControl>
                                 <Input placeholder='' type='text' {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='reason'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>سبب العقوبة</FormLabel>
                              <FormControl>
                                 <Input placeholder='' type='text' {...field} />
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
                              <FormLabel>ملاحظة</FormLabel>
                              <FormControl>
                                 <Input placeholder='' type='text' {...field} />
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

export default PenaltiesForm;
