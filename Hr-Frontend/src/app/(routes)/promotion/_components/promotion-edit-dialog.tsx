'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Settings2 } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/spinner';
import { GetPromotionViewModel } from '@/types';
import { promotionsService, PromotionPayload } from '@/services/promotions.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { jobCategoryService } from '@/services/system-settings/job-category.service';

const formSchema = z.object({
    jobDegreeId: z.coerce.number().min(1, 'الدرجة مطلوبة'),
    jobCategoryId: z.coerce.number().min(1, 'الفئة / المرحلة مطلوبة'),
    dueDateDegree: z.string().optional(),
    dueDateCategory: z.string().optional(),
    serviceRecycle: z.coerce.number().optional(),
    note: z.string().optional(),
});

type Props = {
    data: GetPromotionViewModel;
    icon?: React.ReactNode;
    title?: string;
    variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const formatDateForInput = (dateString?: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString.split('T')[0] || dateString;
    return date.toISOString().split('T')[0];
};

const PromotionEditDialog = ({ data, icon, title, variant = 'ghost' }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [jobDegrees, setJobDegrees] = useState<any[]>([]);
    const [jobCategories, setJobCategories] = useState<any[]>([]);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            jobDegreeId: data?.degreeFromId || 0,
            jobCategoryId: data?.jobCategoryFromId || 0,
            dueDateDegree: formatDateForInput(data?.dueDateDegree),
            dueDateCategory: formatDateForInput(data?.dueDateCategory),
            serviceRecycle: data?.serviceRecycle || 0,
            note: data?.note || '',
        },
    });

    useEffect(() => {
        const loadLookups = async () => {
            try {
                const [degreesRes, categoriesRes] = await Promise.allSettled([
                    jobDegreeService.getJobDegree({ PageSize: 100, Page: 1 } as any),
                    jobCategoryService.getJobCategory({ PageSize: 100, Page: 1 } as any),
                ]);

                if (degreesRes.status === 'fulfilled') {
                    const items = degreesRes.value?.data?.items || degreesRes.value?.items || degreesRes.value?.data || [];
                    setJobDegrees(Array.isArray(items) ? items : []);
                }
                if (categoriesRes.status === 'fulfilled') {
                    const items = categoriesRes.value?.data?.items || categoriesRes.value?.items || categoriesRes.value?.data || [];
                    setJobCategories(Array.isArray(items) ? items : []);
                }
            } catch (err) {
                console.error('Error loading promotion lookups', err);
            }
        };

        if (open) {
            loadLookups();
            form.reset({
                jobDegreeId: data?.degreeFromId || 0,
                jobCategoryId: data?.jobCategoryFromId || 0,
                dueDateDegree: formatDateForInput(data?.dueDateDegree),
                dueDateCategory: formatDateForInput(data?.dueDateCategory),
                serviceRecycle: data?.serviceRecycle || 0,
                note: data?.note || '',
            });
        }
    }, [open, data, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!data.id) return;
        setSubmitting(true);
        try {
            const payload: PromotionPayload = {
                id: data.id,
                employeeId: data.employeeId || data.id,
                degreeFromId: Number(values.jobDegreeId),
                jobCategoryFromId: Number(values.jobCategoryId),
                dueDateDegree: values.dueDateDegree || undefined,
                dueDateCategory: values.dueDateCategory || undefined,
                serviceRecycle: Number(values.serviceRecycle) || 0,
                note: values.note || '',
            };

            const res = await promotionsService.updatePromotion(data.id, payload);
            if (res && (res.succeeded === false || res.Succeeded === false)) {
                toast.error(res.message || res.Message || 'حدث خطأ أثناء تعديل بيانات الترقية.');
                return;
            }

            toast.success('تم تعديل بيانات الترقية بنجاح.');
            setOpen(false);
            router.refresh();
        } catch (error) {
            console.error('Error updating promotion:', error);
            toast.error('فشل في الاتصال بالخادم.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} size='icon' title={title || 'تعديل بيانات الترقية'}>
                    {icon || <Settings2 className='h-4 w-4' />}
                </Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
                <DialogHeader>
                    <DialogTitle>تعديل بيانات الترقية ({data?.fullName || data?.jobCode || ''})</DialogTitle>
                </DialogHeader>
                <Separator />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name='jobDegreeId'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>الدرجة الوظيفية</FormLabel>
                                        <Select
                                            onValueChange={(val) => field.onChange(Number(val))}
                                            value={field.value ? String(field.value) : ''}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='اختر الدرجة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {jobDegrees.map((deg: any) => (
                                                    <SelectItem key={deg.id} value={String(deg.id)}>
                                                        {deg.name}
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
                                name='jobCategoryId'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>المرحلة / الفئة</FormLabel>
                                        <Select
                                            onValueChange={(val) => field.onChange(Number(val))}
                                            value={field.value ? String(field.value) : ''}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='اختر الفئة' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {jobCategories.map((cat: any) => (
                                                    <SelectItem key={cat.id} value={String(cat.id)}>
                                                        {cat.name}
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
                                name='dueDateDegree'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ استحقاق الدرجة</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='dueDateCategory'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ استحقاق الفئة</FormLabel>
                                        <FormControl>
                                            <Input type='date' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='serviceRecycle'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تدوير الخدمة (بالأشهر)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name='note'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>الملاحظات</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='ملاحظات الترقية...' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className='gap-2 mt-4'>
                            <DialogClose asChild>
                                <Button variant='outline' type='button'>
                                    إلغاء
                                </Button>
                            </DialogClose>
                            <Button type='submit' disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <p className='ml-2'>جاري الحفظ...</p>
                                        <Spinner />
                                    </>
                                ) : (
                                    'حفظ التعديلات'
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default PromotionEditDialog;
