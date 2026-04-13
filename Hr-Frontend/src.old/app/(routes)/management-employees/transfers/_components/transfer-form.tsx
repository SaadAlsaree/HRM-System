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
import { ITransfer } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { movementsService } from '@/services/movements.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IselectType } from '@/types';
import { typeOfAssignmentService } from '@/services/system-settings/type-of-assignment.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { departmentService } from '@/services/system-settings/department.service';
import { sectionService } from '@/services/system-settings/section.service';
import { unitService } from '@/services/system-settings/unit.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
    typeOfAssignmentId: z.string().min(1, 'نوع الامر مطلوبة'),
    fromDirectorateId: z.string().min(1, 'المديرية المنقول منها مطلوبة'),
    fromSubDirectorateId: z.string().min(1, 'المديرية الفرعية المنقول منها مطلوبة'),
    fromDepartmentId: z.string().min(1, 'الإدارة المنقول منها مطلوبة'),
    fromSectionId: z.string().min(1, 'القسم المنقول منها مطلوب'),
    fromUniteId: z.string().min(1, 'الوحدة المنقول منها مطلوبة'),
    toDirectorateId: z.string().min(1, 'المديرية المنقول اليها مطلوبة'),
    toSubDirectorateId: z.string().min(1, 'المديرية الفرعية المنقول اليها مطلوبة'),
    toDepartmentId: z.string().min(1, 'الإدارة المنقول اليها مطلوبة'),
    toSectionId: z.string().min(1, 'القسم المنقول اليها مطلوب'),
    toUnitId: z.string().min(1, 'الوحدة المنقول اليها مطلوبة'),
    releaseOrderNo: z.string().min(1, 'رقم أمر التحرير مطلوب'),
    releaseOrderDate: z.string().min(1, 'تاريخ أمر التحرير مطلوب'),
    hireOrderDate: z.string().min(1, 'تاريخ أمر التعيين مطلوب'),
    hireOrderNo: z.string().min(1, 'رقم أمر التعيين مطلوب'),
    note: z.string().optional(),
    status: z.string().optional(),
    
    
});

type Props = {
    data?: ITransfer;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const TransferForm = ({ data, icon, title, variant }: Props) => {
     const [open, setOpen] = useState(false);
        const [isSubmitting, setSubmitting] = useState(false);
        const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
        const [typeOfAssignmentList, setTypeOfAssignmentList] = useState<IselectType[]>([]);
        const [directorateList, setDirectorateList] = useState<IselectType[]>([]);
        const [subDirectorateList, setSubDirectorateList] = useState<IselectType[]>([]);
        const [departmentList, setDepartmentList] = useState<IselectType[]>([]);
        const [sectionList, setSectionList] = useState<IselectType[]>([]);
        const [uniteList, setUniteList] = useState<IselectType[]>([]);
                
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
                    const getDirectorateList = async () => {
                        const categoryList = await directorateService.getDirectorates({Page: 1, PageSize: 100});
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const newCategoryList = categoryList.data.items.map((item: any) => (
                            {
                                label: item.name,
                                value: item.id.toString()
                            }
                        ))
                        setDirectorateList(newCategoryList);
                    }
                    const getSubDirectorateList = async () => {
                        const categoryList = await subDirectorService.getSubDirectorates({Page: 1, PageSize: 100});
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const newCategoryList = categoryList.data.items.map((item: any) => (
                            {
                                label: item.name,
                                value: item.id.toString()
                            }
                        ))
                        setSubDirectorateList(newCategoryList);
                    }
                    const getDepartmentList = async () => {
                        const categoryList = await departmentService.getDepartments({Page: 1, PageSize: 100});
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const newCategoryList = categoryList.data.items.map((item: any) => (
                            {
                                label: item.name,
                                value: item.id.toString()
                            }
                        ))
                        setDepartmentList(newCategoryList);
                    }
                    const getSectionList = async () => {
                        const categoryList = await sectionService.getSection({Page: 1, PageSize: 100});
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const newCategoryList = categoryList.data.items.map((item: any) => (
                            {
                                label: item.name,
                                value: item.id.toString()
                            }
                        ))
                        setSectionList(newCategoryList);
                    }
                    const getUniteList = async () => {
                        const categoryList = await unitService.getUnit({Page: 1, PageSize: 100});
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const newCategoryList = categoryList.data.items.map((item: any) => (
                            {
                                label: item.name,
                                value: item.id.toString()
                            }
                        ))
                        setUniteList(newCategoryList);
                    }

    const router = useRouter();

     useEffect(() => {
               getTypeOfAssignmentList();
               getDirectorateList();
               getSubDirectorateList();
               getDepartmentList();
               getSectionList();
               getUniteList();
            }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            fullName: data?.fullName ?? '',
            orderNo: data?.orderNo ?? '',
            orderDate: data?.orderDate ?? '',
            typeOfAssignmentId: data?.typeOfAssignmentId ?? '',
            fromDirectorateId: data?.fromDirectorateId?.toString() ?? '',
            fromSubDirectorateId: data?.fromSubDirectorateId?.toString() ?? '',
            fromDepartmentId: data?.fromDepartmentId?.toString() ?? '',
            fromSectionId: data?.fromSectionId?.toString() ?? '',
            fromUniteId: data?.fromUniteId?.toString() ?? '',
            toDirectorateId: data?.toDirectorateId?.toString() ?? '',
            toSubDirectorateId: data?.toSubDirectorateId?.toString() ?? '',
            toDepartmentId: data?.toDepartmentId?.toString() ?? '',
            toSectionId: data?.toSectionId?.toString() ?? '',
            toUnitId: data?.toUnitId?.toString() ?? '',
            releaseOrderNo: data?.releaseOrderNo ?? '',
            releaseOrderDate: data?.releaseOrderDate ?? '',
            hireOrderDate: data?.hireOrderDate ?? '',
            hireOrderNo: data?.hireOrderNo ?? '',
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
                      fromDirectorateId: parseInt(values.fromDirectorateId),
                      fromSubDirectorateId: parseInt(values.fromSubDirectorateId),
                        fromDepartmentId: parseInt(values.fromDepartmentId),
                        fromSectionId: parseInt(values.fromSectionId),
                        fromUniteId: parseInt(values.fromUniteId),
                        toDirectorateId: parseInt(values.toDirectorateId),
                        toSubDirectorateId: parseInt(values.toSubDirectorateId),
                        toDepartmentId: parseInt(values.toDepartmentId),
                        toSectionId: parseInt(values.toSectionId),
                        toUnitId: parseInt(values.toUnitId),
                    
                   };
                   await movementsService.updateMovement(data.id as string, payload);
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
                      fromDirectorateId: parseInt(values.fromDirectorateId),
                      fromSubDirectorateId: parseInt(values.fromSubDirectorateId),
                        fromDepartmentId: parseInt(values.fromDepartmentId),
                        fromSectionId: parseInt(values.fromSectionId),
                        fromUniteId: parseInt(values.fromUniteId),
                        toDirectorateId: parseInt(values.toDirectorateId),
                        toSubDirectorateId: parseInt(values.toSubDirectorateId),
                        toDepartmentId: parseInt(values.toDepartmentId),
                        toSectionId: parseInt(values.toSectionId),
                        toUnitId: parseInt(values.toUnitId),
                     
                   };
                   if (selectedUser === null) {
                      toast.error('يجب اختيار موظف');
                      setSubmitting(false);
                      return;
                   }
                   await movementsService.createMovement(payload);
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
        //   console.log(form.formState.errors);

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
                                    name='fromDirectorateId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>من الدائرة</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='من الدائرة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {directorateList.map((option, index) => (
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
                                    name='fromSubDirectorateId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>من المديرية </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='من المديرية ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {subDirectorateList.map((option, index) => (
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
                                    name='fromDepartmentId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>من القسم </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='من القسم ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {departmentList.map((option, index) => (
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
                                    name='fromSectionId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>من الشعبة </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='من الشعبة ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {sectionList.map((option, index) => (
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
                                    name='fromUniteId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>من الوحدة </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='من الوحدة ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {uniteList.map((option, index) => (
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
                                    name='toDirectorateId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الى الدائرة</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الى الدائرة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {directorateList.map((option, index) => (
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
                                    name='toSubDirectorateId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الى المديرية </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الى المديرية ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {subDirectorateList.map((option, index) => (
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
                                    name='toDepartmentId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الى القسم </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الى القسم ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {departmentList.map((option, index) => (
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
                                    name='toSectionId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الى الشعبة </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الى الشعبة ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {sectionList.map((option, index) => (
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
                                    name='toUnitId'
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>الى الوحدة </FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='الى الوحدة ' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                {uniteList.map((option, index) => (
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

export default TransferForm;