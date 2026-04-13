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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IPreviousPosition } from '../page';
import { employeePositionService } from '@/services/Employee/employee-position.service';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { positionService } from '@/services/system-settings/position.service';
import { unitService } from '@/services/system-settings/unit.service';
import { sectionService } from '@/services/system-settings/section.service';
import { departmentService } from '@/services/system-settings/department.service';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { directorateService } from '@/services/system-settings/directorate.service';
import { IselectType } from '@/types';

const formSchema = z.object({
     employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    fullName: z.string().min(1, 'اسم الموظف مطلوب'),
    directorateId: z.string().min(1, 'المديرية مطلوبة'),
    subDirectorateId: z.string().min(1, 'المديرية الفرعية مطلوبة'),
    sectionId: z.string().min(1, 'القسم مطلوب'),
    unitId: z.string().min(1, 'الوحدة مطلوبة'),
    departmentId: z.string().min(1, 'الدائرة او المديرية مطلوب'),
    positionId: z.string().min(1, 'المنصب مطلوب'),
    orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
    orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
    assignedOrderDate: z.string().min(1, 'تاريخ الأمر المكلف مطلوب'),
    assignedOrderNo: z.string().min(1, 'رقم الأمر المكلف مطلوب'),
    assignedDate: z.string().optional(),
    startDate: z.string().optional(),
    status: z.string().optional(),
    note: z.string().optional(),
    
});

type Props = {
    data?: IPreviousPosition;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const PreviousPositionForm = ({ data, icon, title, variant }: Props) => {
     const [open, setOpen] = useState(false);
        const [isSubmitting, setSubmitting] = useState(false);
        const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
         const [directorateList, setDirectorateList] = useState<IselectType[]>([]);
        const [subDirectorateList, setSubDirectorateList] = useState<IselectType[]>([]);
        const [departmentList, setDepartmentList] = useState<IselectType[]>([]);
        const [sectionList, setSectionList] = useState<IselectType[]>([]);
        const [uniteList, setUniteList] = useState<IselectType[]>([]);
        const [positionList, setPositionList] = useState<IselectType[]>([]);
                        
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
                            const getPositionList = async () => {
                                const categoryList = await positionService.getPositions({Page: 1, PageSize: 100});
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const newCategoryList = categoryList.data.items.map((item: any) => (
                                    {
                                        label: item.name,
                                        value: item.id.toString()
                                    }
                                ))
                                setPositionList(newCategoryList);
                            }
        
    
        const router = useRouter();
    
         useEffect(() => {
                       getDirectorateList();
                       getSubDirectorateList();
                       getDepartmentList();
                       getSectionList();
                       getUniteList();
                       getPositionList();
                    }, []);
    
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                employeeId: data?.employeeId ?? '',
                fullName: data?.fullName ?? '',
                directorateId: data?.directorateId?.toString() ?? '',
                subDirectorateId: data?.subDirectorateId.toString() ?? '',
                sectionId: data?.sectionId.toString() ?? '',
                unitId: data?.unitId.toString() ?? '',
                departmentId: data?.departmentId.toString() ?? '',
                positionId: data?.positionId.toString() ?? '',
                orderNo: data?.orderNo ?? '',
                orderDate: data?.orderDate ?? '',
                assignedOrderDate: data?.assignedOrderDate ?? '',
                assignedOrderNo: data?.assignedOrderNo ?? '',
                assignedDate: data?.assignedDate ?? '',
                startDate: data?.startDate ?? '',
                status: data?.statusName ?? '',
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
                       directorateId: parseInt(values.directorateId),
                       subDirectorateId: parseInt(values.subDirectorateId),
                        sectionId: parseInt(values.sectionId),
                        unitId: parseInt(values.unitId),
                        departmentId: parseInt(values.departmentId),
                        positionId: parseInt(values.positionId),
                        note: values.note ?? '',
    
                    };
                    await employeePositionService.updateEmployeePositionById(data.id as string, payload);
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
                       directorateId: parseInt(values.directorateId),
                       subDirectorateId: parseInt(values.subDirectorateId),
                        sectionId: parseInt(values.sectionId),
                        unitId: parseInt(values.unitId),
                        departmentId: parseInt(values.departmentId),
                        positionId: parseInt(values.positionId),
                        note: values.note ?? '',
                    };
                    if (selectedUser === null) {
                       toast.error('يجب اختيار موظف');
                       setSubmitting(false);
                       return;
                    }
                    await employeePositionService.createEmployeePosition(payload);
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
                               name='directorateId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel> الدائرة</FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder=' الدائرة' />
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
                               name='subDirectorateId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel> المديرية </FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder=' المديرية ' />
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
                               name='departmentId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel> القسم </FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder=' القسم ' />
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
                               name='sectionId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel> الشعبة </FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder=' الشعبة ' />
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
                               name='unitId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel> الوحدة </FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder=' الوحدة ' />
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
                               name='positionId'
                               render={({ field }) => (
                                   <FormItem>
                                   <FormLabel>من المنصب </FormLabel>
                                   <Select onValueChange={field.onChange}>
                                       <FormControl>
                                           <SelectTrigger>
                                               <SelectValue placeholder='من المنصب ' />
                                           </SelectTrigger>
                                       </FormControl>
                                       <SelectContent >
                                           {positionList.map((option, index) => (
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
                           name='assignedOrderNo'
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
                           name='assignedOrderDate'
                           render={({ field }) => (
                               <FormItem>
                                   <FormLabel>تاريح كتاب التكليف </FormLabel>
                                   <FormControl>
                                       <Input placeholder='تاريح كتاب التكليف ' type='date' {...field} />
                                   </FormControl>
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

export default PreviousPositionForm;