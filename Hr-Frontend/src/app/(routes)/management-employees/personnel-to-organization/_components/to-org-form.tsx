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
import { IAffiliatesToOrg } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { assignmentService } from '@/services/assignment.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IselectType } from '@/types';
import { typeOfAssignmentService } from '@/services/system-settings/type-of-assignment.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
    typeOfAssignmentId: z.string().min(1, 'نوع الامر مطلوبة'),
    assignedFromOrganization: z.string().min(1, 'الجهة المنتسب منها مطلوبة'),
    assignedToOrganization: z.string().min(1, 'الجهة المنتسب اليها مطلوبة'),
    durationOfAssignment: z.number().min(1, 'مدة التنسيب مطلوبة'),
    releaseOrderNo: z.string().min(1, 'رقم كتاب الانفكاك مطلوبة'), 
    releaseOrderDate: z.string().min(1, 'تاريخ كتاب الانفكاك مطلوبة'),
    releaseDate: z.string().min(1, 'تاريخ الانفكاك مطلوب'),
    hireOrderNo: z.string().min(1, 'رقم كتاب المباشرة مطلوب'),
    hireOrderDate: z.string().min(1, 'تاريخ كتاب المباشرة مطلوب'),
    hireDate: z.string().min(1, 'تاريخ المباشرة مطلوب'),
    assignmentOrderNo: z.string().min(1, 'رقم كتاب التكليف مطلوب'),
    assignmentOrderDate: z.string().min(1, 'تاريخ كتاب التكليف مطلوب'),
    endProcessDate: z.string().optional(),
    status: z.string().optional(),
    note: z.string().optional(),
    endOrderNo: z.string().optional(),
    endOrderDate: z.string().optional(),
    endReleaseOrderDate: z.string().optional(),
    endReleaseOrderNo: z.string().optional(),
    endHireNo: z.string().optional(),
    endHireDate: z.string().optional(),
    
});

type Props = {
    data?: IAffiliatesToOrg;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const AffiliatesToOrgForm = ({ data, icon, title, variant }: Props) => {
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
            assignedToOrganization: data?.assignedToOrganization ?? '',
            typeOfAssignmentId: data?.typeOfAssignmentId ?? '',
            assignedFromOrganization: data?.assignedFromOrganization ?? '',
            durationOfAssignment: data?.durationOfAssignment ?? 0,
            releaseOrderNo: data?.releaseOrderNo ?? '',
            releaseOrderDate:  data?.releaseOrderDate ?? '',
            releaseDate: data?.releaseDate ?? '',
            hireOrderNo: data?.hireOrderNo ?? '',
            hireOrderDate: data?.hireOrderDate ?? '',
            hireDate: data?.hireDate ?? '',
            assignmentOrderNo: data?.assignmentOrderNo ?? '',
            assignmentOrderDate: data?.assignmentOrderDate ?? '',
            note: data?.note ?? '',
            endOrderNo: data?.endOrderNo ?? '',
            endOrderDate: data?.endOrderDate ?? '',
            endReleaseOrderDate: data?.endReleaseOrderDate ?? '',
            endReleaseOrderNo: data?.endReleaseOrderNo ?? '', 
            endHireNo : data?.endHireNo ?? '', 
            endHireDate: data?.endHireDate ?? '', 

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
                       typeOfAssignmentId: parseInt(values.typeOfAssignmentId),
                       
                    };
                    await assignmentService.updateAssignment(data.id, payload);
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
                       typeOfAssignmentId: parseInt(values.typeOfAssignmentId),
                    };
                    if (selectedUser === null) {
                       toast.error('يجب اختيار موظف');
                       setSubmitting(false);
                       return;
                    }
                    await assignmentService.createAssignment(payload);
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
                        <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-4 py-4' autoComplete='off'>
                         
                        <FormField
                                control={form.control}
                                name='assignedToOrganization'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>المنسب اليها</FormLabel>
                                        <FormControl>
                                            <Input placeholder='المنسب اليها' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                              <FormField
                                control={form.control}
                                name='assignedFromOrganization'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>المنسب منها</FormLabel>
                                        <FormControl>
                                            <Input placeholder='المنسب منها' type='text' {...field} />
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
                                        <FormLabel>نوع الامر</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='نوع الامر' />
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
                           
                            <FormField
                                control={form.control}
                                name='durationOfAssignment'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>مدة التنسيب بالاشهر</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='مدة التنسيب بالاشهر'
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
                                name='hireOrderNo'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم كتاب المباشرة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='رقم كتاب المباشرة' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='hireOrderDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ كتاب المباشرة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ كتاب المباشرة' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='hireDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ المباشرة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ المباشرة' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name='assignmentOrderNo'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم كتاب التكليف</FormLabel>
                                        <FormControl>
                                            <Input placeholder='رقم كتاب التكليف' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='assignmentOrderDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ كتاب التكليف</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ كتاب التكليف' type='date' {...field} />
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

export default AffiliatesToOrgForm;