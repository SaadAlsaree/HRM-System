"use client";
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
import { IEmployeeEvaluation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import EvaluationSelect from './evaluation-select';
import { valuationsService } from '@/services/valuations.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    valuationDate: z.string().min(1, 'الحقل مطلوب'), 
    recommendation: z.string().min(1, 'الحقل مطلوب'),
    valuationType: z.string().min(1, 'الحقل مطلوب'),
    valuationPoints: z.string().min(1, 'الحقل مطلوب'),
    bookNo: z.string().min(1, 'الحقل مطلوب'),
    bookDate: z.string().min(1, 'الحقل مطلوب'), 
    efficiency: z.string().optional(),
    completionSpeed: z.string().optional(),
    responsibility: z.string().optional(),
    behaviorClients: z.string().optional(),
    behaviorManager: z.string().optional(),
    workingHours: z.string().optional(),
    status: z.string().optional(),
    note: z.string().optional(),
});

type Props = {
    data?: IEmployeeEvaluation;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const EmployeeEvaluationForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    
       const handleUserSelect = (user: IEmployeeSearch | null) => {
          setSelectedUser(user);
       };
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            valuationDate: data?.valuationDate??'', 
            recommendation: data?.recommendation??'',
            valuationType: data?.valuationType??'',
            valuationPoints: data?.valuationPoints??'',
            bookNo: data?.bookNo??'',
            bookDate: data?.bookDate??'', 
            status: data?.statusName ?? '',
            note: data?.note ?? '',
           
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
          setSubmitting(true);
          try {
             if (data) {
                const payload = {
                   ...values,
                   employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
                };
                await valuationsService.updateValuation(payload);
                console.log('payload', payload);
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
                };
                if (selectedUser === null) {
                   toast.error('يجب اختيار موظف');
                   setSubmitting(false);
                   return;
                }
                await valuationsService.createValuation(payload);
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
    //    console.log(form.formState.errors);
    return (
      <div>
      <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild>
        <Button variant={variant}>
           <p>{title}</p>
           {icon ? icon : <Plus />}
        </Button>
     </DialogTrigger>
     <DialogContent className='w-[980px] '>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     {/* start form */}
                     <div className='grid grid-cols-12 gap-4'>
                     <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='valuationDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ التقييم</FormLabel>
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
                              name='recommendation'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>التوصية</FormLabel>
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
                              name='valuationType'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>نوع التقييم </FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='text' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                  </div>
                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookNo'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الكتاب </FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                        <div className='col-span-6'>
                           <FormField
                              control={form.control}
                              name='bookDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الاستحقاق </FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='date' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>
                     <Separator/>
                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='efficiency'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>الكفاءة</FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
                              </FormItem>
                           )}
                           />
                        </div>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='completionSpeed'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>سرعة الانجاز </FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
                              </FormItem>
                           )}
                           />
                        </div>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='responsibility'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>الشعور بالمسؤولية</FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
                              </FormItem>
                           )}
                           />
                        </div>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='behaviorClients'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>سلوكه مع المراجعين</FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
                              </FormItem>
                           )}
                           />
                        </div>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='behaviorManager'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>سلوكه مع المدراء</FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
                              </FormItem>
                           )}
                           />
                        </div>
                        <div className='col-span-2'>
                           <FormField 
                           control={form.control}
                           name='workingHours'
                           render={({field})=>(
                              <FormItem>
                                 <FormLabel>المحافظة على اوقات الدوام</FormLabel>
                                 <FormControl>
                                    <EvaluationSelect onValueChange={field.onChange} defaultValue={field.value} placeholder='' />
                                 </FormControl>
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

export default EmployeeEvaluationForm;