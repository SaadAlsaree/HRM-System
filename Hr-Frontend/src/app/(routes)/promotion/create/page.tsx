'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { promotionsService, PromotionPayload } from '@/services/promotions.service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    degreeFromId: z.coerce.number().optional(),
    degreeToId: z.coerce.number().optional(),
    dueDateDegree: z.string().optional(),
    dueDateCategory: z.string().optional(),
    bookNo: z.string().optional(),
    bookDate: z.string().optional(),
    note: z.string().optional(),
});

const CreatePromotionPage = () => {
    const router = useRouter();
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: '',
            degreeFromId: 0,
            degreeToId: 0,
            dueDateDegree: '',
            dueDateCategory: '',
            bookNo: '',
            bookDate: '',
            note: '',
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
            const payload: PromotionPayload = {
                ...values,
                employeeId: values.employeeId,
            };
            const res = await promotionsService.createPromotion(payload);
            if (res?.succeeded) {
                toast.success('تم إنشاء الترقية بنجاح.');
                router.push('/promotion');
            } else {
                toast.error(res?.message || 'حدث خطأ أثناء الإنشاء.');
            }
        } catch (error) {
            console.error(error);
            toast.error('فشل في الاتصال بالخادم.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">إنشاء ترقية جديدة</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <label className="text-sm font-medium">اختيار الموظف</label>
                        <div className="mt-2">
                            <EmployeeSearch onSelectUser={handleUserSelect} />
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="degreeFromId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>الدرجة الحالية (الرقم)</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="degreeToId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>الدرجة الجديدة (الرقم)</FormLabel>
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
                                <FormField
                                    control={form.control}
                                    name="bookNo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>رقم الكتاب</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="bookDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>تاريخ الكتاب</FormLabel>
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
                                name="note"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ملاحظات</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" type="button" onClick={() => router.back()}>
                                    إلغاء
                                </Button>
                                <Button type="submit" disabled={isSubmitting || !selectedUser}>
                                    {isSubmitting ? <Spinner /> : 'حفظ الترقية'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreatePromotionPage;
