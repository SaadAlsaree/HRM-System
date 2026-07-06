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
import { IAffiliation } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { affiliationService } from '@/services/affiliation.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IselectType } from '@/types';
import { typeOfAssignmentService } from '@/services/system-settings/type-of-assignment.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    orderNo: z.string().min(1, 'رقم الامر مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الامر مطلوب'),
    issuingAuthority: z.string().min(1, 'جهة الاصدار مطلوبة'),
    typeOfAssignmentId: z.coerce.number().min(1, 'نوع التكليف مطلوب'),
    originalEntity: z.string().min(1, 'جهة الانتساب مطلوبة'),
    ministry: z.string().min(1, 'الوزارة مطلوبة'),
    reasonForJoining: z.string().min(1, 'سبب الانتساب مطلوب'),
    durationMonths: z.number().min(1, 'مدة الانتساب مطلوبة'),
    fromDate: z.string().min(1, 'تاريخ البداية مطلوب'),
    toDate: z.string().min(1, 'تاريخ النهاية مطلوب'),
    maxRenewals: z.number().min(0, 'عدد التجديدات مطلوب'),
    releaseOrderNo: z.string().optional(),
    releaseOrderDate: z.string().optional(),
    releaseDate: z.string().optional(),
    endOrderNo: z.string().optional(),
    endOrderDate: z.string().optional(),
    note: z.string().optional(),
});

type Props = {
    data?: IAffiliation;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const AffiliationForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
        const [isSubmitting, setSubmitting] = useState(false);
        const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
        const [typeOfAssignmentList, setTypeOfAssignmentList] = useState<IselectType[]>([]);
        
            const getTypeOfAssignmentList = async () => {
                const categoryList = await typeOfAssignmentService.getTypeOfAssignments({Page: 1, PageSize: 100});
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const newCategoryList = categoryList.data.items.map((item: any) => (
                    {
                        label: item.name,
                        value: item.id.toString()
                    }
                ))
                setTypeOfAssignmentList(newCategoryList);
            }

    const router = useRouter();

    useEffect(() => {
           getTypeOfAssignmentList();
        }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            orderNo: data?.orderNo ?? '',
            orderDate: data?.orderDate ?? '',
            issuingAuthority: data?.issuingAuthority ?? '',
            typeOfAssignmentId: data?.typeOfAssignmentId ?? 0,
            originalEntity: data?.originalEntity ?? '',
            ministry: data?.ministry ?? '',
            reasonForJoining: data?.reasonForJoining ?? '',
            durationMonths: data?.durationMonths ?? 0,
            fromDate: data?.fromDate ?? '',
            toDate: data?.toDate ?? '',
            maxRenewals: data?.maxRenewals ?? 0,
            releaseOrderNo: data?.releaseOrderNo ?? '',
            releaseOrderDate: data?.releaseOrderDate ?? '',
            releaseDate: data?.releaseDate ?? '',
            endOrderNo: data?.endOrderNo ?? '',
            endOrderDate: data?.endOrderDate ?? '',
            note: data?.note ?? '',
        },
    });

    const handleUserSelect = (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
        form.setValue('employeeId', user?.employeeId ?? '');
      form.setValue('fullName', user?.fullName ?? '');
     };

     async function onSubmit(values: z.infer<typeof formSchema>) {
              setSubmitting(true);
              try {
                 if (data) {
                    const payload = {
                       ...values,
                       employeeId: selectedUser?.employeeId ?? data.employeeId ?? '',
                       assignmentSite:1
                       
                    };
                    await affiliationService.updateAffiliation(data?.id ?? '', payload);
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
                       assignmentSite:1
                    };
                    if (selectedUser === null) {
                       toast.error('يجب اختيار موظف');
                       setSubmitting(false);
                       return;
                    }
                    await affiliationService.createAffiliation(payload);
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
                        <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4 py-4' autoComplete='off'>
                         
                        <FormField
                                control={form.control}
                                name='originalEntity'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>جهة الانتساب</FormLabel>
                                        <FormControl>
                                            <Input placeholder='جهة الانتساب' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                              <FormField
                                control={form.control}
                                name='reasonForJoining'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>سبب الانتساب</FormLabel>
                                        <FormControl>
                                            <Input placeholder='سبب الانتساب' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                    control={form.control}
                                    name='typeOfAssignmentId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>نوع التكليف</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='نوع التكليف' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {typeOfAssignmentList.map((option, index) => (
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
                            <FormField
                                control={form.control}
                                name='orderNo'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم الامر</FormLabel>
                                        <FormControl>
                                            <Input placeholder='رقم الامر' type='text' {...field} />
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
                                        <FormLabel>تاريخ الامر</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ الامر' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='issuingAuthority'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>جهة الاصدار</FormLabel>
                                        <FormControl>
                                            <Input placeholder='جهة الاصدار' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='ministry'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>الوزارة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='الوزارة' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='durationMonths'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>مدة الانتساب</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='مدة الانتساب'
                                                type='number'
                                                {...field}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='fromDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ البداية</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ البداية' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='toDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ النهاية</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ النهاية' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='maxRenewals'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>عدد التجديدات</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='عدد التجديدات'
                                                type='number'
                                                {...field}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name='releaseOrderNo'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم كتاب الانفكاك</FormLabel>
                                        <FormControl>
                                            <Input placeholder='رقم كتاب الانفكاك' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='releaseOrderDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ كتاب الانفكاك</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ كتاب الانفكاك' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='releaseDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ الانفكاك</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ الانفكاك' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name='note'
                                render={({ field }) => (
                                    <FormItem className='col-span-3'>
                                        <FormLabel>ملاحظات</FormLabel>
                                        <FormControl>
                                            <Input placeholder='ملاحظات' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='col-span-3'>
                                <Button disabled={isSubmitting} className='w-full'>
                                    {isSubmitting ? (
                                        <>
                                            <p className='ml-2'>حفظ البيانات</p> <Spinner />
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

export default AffiliationForm;
