"use client";
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
import { ILetterOfAppreciation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { IselectType } from '@/types';
import { typeOfBookService } from '@/services/system-settings/type-of-book.service';
import { thanksSeniorityService } from '@/services/thanks-seniority.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { typeOfSeniorityServiceClient } from '@/services/system-settings/type-of-seniority.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    typeOfBook: z.string().min(1, 'الحقل مطلوب'),
    typeOfSeniority: z.string().min(1, 'الحقل مطلوب'),
    bookNo: z.string().min(1, 'الحقل مطلوب'),
    dateOfBook: z.string().min(1, 'الحقل مطلوب'),
    bookIssueName: z.string().min(1, 'الحقل مطلوب'),
    reason: z.string().min(1, 'الحقل مطلوب'),
    calculationDate: z.string().min(1, 'الحقل مطلوب'),
    countOfMonths: z.string().min(1, 'الحقل مطلوب'),
    isDocumentVerify: z.boolean().optional().default(false),
    status: z.string().optional(),
    note: z.string().optional(),
});

type Props = {
    data?: ILetterOfAppreciation;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const LetterOfAppreciationForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
     const [bookTypeList, setBookTypeList] = useState<IselectType[]>([]);
     const [seniorityTypeList, setSeniorityTypeList] = useState<IselectType[]>([]);
    
        const getBooksType = async () => {
            const categoryList = await typeOfBookService.getTypeOfBooks({Page: 1, PageSize: 100});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newCategoryList = categoryList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            setBookTypeList(newCategoryList);
        }
        const getSeniorityType = async () => {
            const categoryList = await typeOfSeniorityServiceClient.getTypeOfSeniority({Page: 1, PageSize: 100});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newCategoryList = categoryList.data.items.map((item: any) => (
                {
                    label: item.name,
                    value: item.id.toString()
                }
            ))
            setSeniorityTypeList(newCategoryList);
        }
    
    
       const handleUserSelect = (user: IEmployeeSearch | null) => {
          setSelectedUser(user);
          form.setValue('employeeId', user?.employeeId ?? '');
          form.setValue('fullName', user?.fullName ?? '');
       };
    const router = useRouter();
    useEffect(() => {
            getBooksType();
            getSeniorityType();
        }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            typeOfBook: data?.typeOfBook??'',
            typeOfSeniority: data?.typeOfSeniority??'',
            bookNo: data?.bookNo??'',
            dateOfBook: data?.dateOfBook??'',
            bookIssueName: data?.bookIssueName??'',
            reason: data?.reason??'',
            calculationDate: data?.calculationDate??'',
            countOfMonths: data?.countOfMonths?? '0',
            isDocumentVerify: data?.isDocumentVerify??false,
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
                       employeeId: [selectedUser?.employeeId ?? data.employeeId ?? ''],
                       typeOfBook: parseInt(values.typeOfBook),
                       typeOfSeniority: parseInt(values.typeOfSeniority),
                       countOfMonths: parseInt(values.countOfMonths),
                    };
                    await thanksSeniorityService.updateThanksSeniority(data.id as string, payload);
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
                       employeeId: [selectedUser?.employeeId ?? ''],
                       typeOfBook: parseInt(values.typeOfBook),
                       typeOfSeniority: parseInt(values.typeOfSeniority),
                       countOfMonths: parseInt(values.countOfMonths),

                    };
                    if (selectedUser === null) {
                       toast.error('يجب اختيار موظف');
                       setSubmitting(false);
                       return;
                    }
                    await thanksSeniorityService.createThanksSeniority(payload);
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
           console.log(form.formState.errors); 
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 py-2'>
                     {/* start form */}
                     <div className='grid grid-cols-12 gap-4'>
                     <div className='col-span-4'>
                     <FormField
                                    control={form.control}
                                    name='typeOfBook'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>نوع الكتاب</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='نوع الكتاب' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {bookTypeList.map((option, index) => (
                                                    <SelectItem key={index} value={option.value}>
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
                                    name='typeOfSeniority'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>نوع القدم</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='نوع القدم' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {seniorityTypeList.map((option, index) => (
                                                    <SelectItem key={index} value={option.value}>
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
                       
                  </div>
                     <div className='grid grid-cols-12 gap-4 items-center'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='dateOfBook'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الكتاب </FormLabel>
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
                              name='bookIssueName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>اسم إصدار الكتاب </FormLabel>
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
                              name='reason'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>السبب</FormLabel>
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
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='countOfMonths'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>عدد الاشهر</FormLabel>
                                    <FormControl>
                                       <Input placeholder='' type='number' {...field} />
                                    </FormControl>

                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='calculationDate'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>تاريخ الاحتساب</FormLabel>
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
                              name='isDocumentVerify'
                              render={({ field }) => (
                                 <FormItem className='self-center'>
                                    
                                    <FormControl>
                                       <Checkbox 
                                       checked={field.value}
                                       onCheckedChange={field.onChange} 
                                        />
                                    </FormControl>
                                    <FormLabel className='pr-2'>التحقق من الوثيقة</FormLabel>

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

export default LetterOfAppreciationForm;