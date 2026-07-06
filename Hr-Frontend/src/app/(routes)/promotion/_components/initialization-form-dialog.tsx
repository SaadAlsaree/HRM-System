'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { FileClock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { promotionsService } from '@/services/promotions.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    jobDegreeId: z.coerce.number().min(1, 'الدرجة مطلوبة'),
    jobCategoryId: z.coerce.number().min(1, 'الفئة مطلوب'),
    dueDateDegree: z.string().optional(),
    dueDateCategory: z.string().optional(),
    lastAllowanceDate: z.string().optional(),
});

const InitializationFormDialog = () => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: '',
            jobDegreeId: 0,
            jobCategoryId: 0,
            dueDateDegree: '',
            dueDateCategory: '',
            lastAllowanceDate: '',
        },
    });

    const handleUserSelect = (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
        if (user) {
            form.setValue('employeeId', user.employeeId || '');
        } else {
            form.setValue('employeeId', '');
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setSubmitting(true);
        try {
            const res = await promotionsService.initializePromotionData(values);

            if (res?.succeeded) {
                toast.success('تمت تهيئة بيانات الترقية للموظف بنجاح.');
                setOpen(false);
                router.refresh();
            } else {
                toast.error(res?.message || 'حدث خطأ أثناء التهيئة.');
            }
        } catch (e) {
            console.error(e)
            toast.error('فشل في الاتصال بالخادم.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="gap-2">
                    <FileClock className="h-4 w-4" />
                    تهيئة بيانات الترقية
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>تهيئة بيانات الترقية للموظفين القدامى</DialogTitle>
                </DialogHeader>

                <div className="text-sm text-muted-foreground mb-4 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md border border-yellow-200 dark:border-yellow-900">
                    <strong className="text-yellow-700 dark:text-yellow-500">ملاحظة هامة:</strong> استخدم هذه الميزة فقط لتهيئة بيانات الموظف لأول مرة (مثل إدخال تاريخ آخر علاوة استلمها الموظف قبل استخدام النظام). النظام سيعتمد على هذه التواريخ لبدء احتساب الاستحقاقات القادمة.
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium">اختيار الموظف</label>
                    <div className="mt-2">
                        <EmployeeSearch onSelectUser={handleUserSelect} />
                    </div>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="jobDegreeId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم الدرجة الحالية</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jobCategoryId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>رقم الفئة الحالي</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dueDateDegree"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ استحقاق الدرجة</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dueDateCategory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>تاريخ استحقاق الفئة</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="lastAllowanceDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>تاريخ آخر علاوة سنوية</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="mt-6">
                            <DialogClose asChild>
                                <Button variant="outline" type="button">إلغاء</Button>
                            </DialogClose>
                            <Button type="submit" disabled={isSubmitting || !selectedUser}>
                                {isSubmitting ? <Spinner /> : 'حفظ التهيئة'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default InitializationFormDialog;
