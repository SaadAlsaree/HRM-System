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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { employeeService } from '@/services/Employee/employee.service';
import { IDocumentVerification } from '../page';
import { documentVerificationService } from '@/services/document-verification.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    documentNumber: z.string().min(1, 'رقم الوثيقة مطلوب'),
    documentDate: z.string().min(1, 'تاريخ الوثيقة مطلوب'),
    recipient: z.string().min(1, 'الجهة المرسل إليها مطلوبة'),
    answered: z.boolean(),
    sendingDate: z.string().min(1, 'تاريخ الإرسال مطلوب'),
    note: z.string().optional(),
});

type Props = {
    data?: IDocumentVerification;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const DocumentVerificationForm = ({ data, icon, title, variant }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [searchType, setSearchType] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const [employeeData, setEmployeeData] = useState<{ id: string; fullName: string; jobCode: string; lotNumber: string } | null>(null);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId ?? '',
            documentNumber: data?.documentNumber ?? '',
            documentDate: data?.documentDate ?? '',
            recipient: data?.recipient ?? '',
            answered: data?.answered ?? false,
            sendingDate: data?.sendingDate ?? '',
            note: data?.note ?? '',
        },
    });

    const handleEmployeeSearch = async () => {
        try {
            const employees = await employeeService.getEmployees({
                [searchType]: searchTerm,
            });

            if (employees.data.length > 0) {
                const firstEmployee = employees.data[0];
                setEmployeeData({
                    id: firstEmployee.id,
                    fullName: firstEmployee.fullName,
                    jobCode: firstEmployee.jobCode,
                    lotNumber: firstEmployee.lotNumber,
                });
                form.setValue('employeeId', firstEmployee.id);
                toast.success(`تم العثور على الموظف: ${firstEmployee.fullName}`);
            } else {
                toast.error('لم يتم العثور على موظف بهذه البيانات.');
            }
        } catch (error) {
            console.error('Error searching for employee:', error);
            toast.error('فشل في البحث عن الموظف. يرجى المحاولة مرة أخرى.');
        }
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setSubmitting(true);
        try {
            if (data) {
                await documentVerificationService.updateDocumentVerification(data.id, { ...values, note: values.note ?? '', lastUpdateBy: 'user-id' });
                toast.success('تم تعديل البيانات بنجاح.');
            } else {
                await documentVerificationService.createDocumentVerification({ ...values, note: values.note ?? '', createBy: 'user-id' });
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
                <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
                    <DialogHeader>
                        <div className='flex items-center justify-between'>
                            <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                        </div>
                    </DialogHeader>
                    <Separator />
                    <div className='space-y-4 py-4'>
                        <div className='flex items-center gap-2'>
                            <Select onValueChange={(value) => setSearchType(value)} defaultValue='name'>
                                <SelectTrigger className='w-[150px]'>
                                    <SelectValue placeholder='نوع البحث' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='name'>الاسم</SelectItem>
                                    <SelectItem value='motherName'>اسم الأم</SelectItem>
                                    <SelectItem value='jobCode'>الرقم الوظيفي</SelectItem>
                                    <SelectItem value='fileNumber'>رقم الاضبارة</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                placeholder='ابحث عن الموظف...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button onClick={handleEmployeeSearch}>بحث</Button>
                        </div>
                        {employeeData && (
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-bold'>اسم الموظف:</span>
                                    <Input
                                        value={employeeData.fullName}
                                        disabled
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='font-bold'>الرقم الوظيفي:</span>
                                    <Input
                                        value={employeeData.jobCode}
                                        disabled
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='font-bold'>رقم الاضبارة:</span>
                                    <Input
                                        value={employeeData.lotNumber}
                                        disabled
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-4' autoComplete='off'>
                            <FormField
                                control={form.control}
                                name='employeeId'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>الرقم الوظيفي</FormLabel>
                                        <FormControl>
                                            <Input placeholder='الرقم الوظيفي' type='text' {...field} disabled />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='documentNumber'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم الوثيقة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='رقم الوثيقة' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='documentDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ الوثيقة</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ الوثيقة' type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='recipient'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>الجهة المرسل إليها</FormLabel>
                                        <FormControl>
                                            <Input placeholder='الجهة المرسل إليها' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='answered'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>هل تم الإجابة؟</FormLabel>
                                        <FormControl>
                                            <Input placeholder='هل تم الإجابة؟' type='checkbox' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='sendingDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ الإرسال</FormLabel>
                                        <FormControl>
                                            <Input placeholder='تاريخ الإرسال' type='date' {...field} />
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

export default DocumentVerificationForm;