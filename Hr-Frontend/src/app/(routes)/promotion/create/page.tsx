'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { User, Award, Calendar, Building2, Briefcase } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { promotionsService, PromotionPayload } from '@/services/promotions.service';
import { jobDegreeService } from '@/services/system-settings/job-degree.service';
import { employeeService } from '@/services/Employee/employee.service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const degreeNameRanks: Record<string, number> = {
    'العاشرة': 10,
    'التاسعة': 9,
    'الثامنة': 8,
    'السابعة': 7,
    'السادسة': 6,
    'الخامسة': 5,
    'الرابعة': 4,
    'الثالثة': 3,
    'الثانية': 2,
    'الأولى': 1,
    'الاولى': 1,
};

function getDegreeRank(name?: string): number {
    if (!name) return 99;
    for (const [key, rank] of Object.entries(degreeNameRanks)) {
        if (name.includes(key)) return rank;
    }
    const match = name.match(/\d+/);
    if (match) return parseInt(match[0], 10);
    return 99;
}

const formSchema = z.object({
    employeeId: z.string().min(1, 'يرجى اختيار الموظف أولاً'),
    degreeFromId: z.coerce.number().min(1, 'الدرجة الحالية مطلوبة'),
    degreeToId: z.coerce.number().min(1, 'الدرجة الجديدة مطلوبة'),
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
    const [jobDegrees, setJobDegrees] = useState<any[]>([]);

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

    useEffect(() => {
        const loadDegrees = async () => {
            try {
                const res = await jobDegreeService.getJobDegree({ Page: 1, PageSize: 100 } as any);
                const items = res?.data?.items || res?.items || res?.data || [];
                if (Array.isArray(items)) {
                    // Sort degrees in logical order (10 to 1 or by rank)
                    const sorted = [...items].sort((a, b) => {
                        const rankA = getDegreeRank(a.name);
                        const rankB = getDegreeRank(b.name);
                        return rankA - rankB;
                    });
                    setJobDegrees(sorted);
                }
            } catch (err) {
                console.error('Error loading job degrees:', err);
            }
        };
        loadDegrees();
    }, []);

    const handleUserSelect = async (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
        if (user) {
            const empId = user.employeeId || user.id || '';
            form.setValue('employeeId', empId);

            let degreeFromId = user.jobDegreeId ? Number(user.jobDegreeId) : 0;
            let currentDegreeName = user.jobDegreeName || '';
            let degreeDueDate = user.degreeDueDate ? String(user.degreeDueDate).split('T')[0] : '';
            let categoryDueDate = user.categoryDueDate ? String(user.categoryDueDate).split('T')[0] : '';

            // If degree is not available in search result, fetch employee details
            if (!degreeFromId && empId) {
                try {
                    const empRes = await employeeService.getEmployeeById(empId);
                    const empData = empRes?.data || empRes;
                    if (empData?.promotion?.jobDegreeId) {
                        degreeFromId = Number(empData.promotion.jobDegreeId);
                        currentDegreeName = empData.promotion?.jobDegree?.name || currentDegreeName;
                    } else if (empData?.jobInformation?.employmentDegreeId) {
                        degreeFromId = Number(empData.jobInformation.employmentDegreeId);
                    }
                    if (empData?.promotion?.dueDateDegree) {
                        degreeDueDate = String(empData.promotion.dueDateDegree).split('T')[0];
                    }
                    if (empData?.promotion?.dueDateCategory) {
                        categoryDueDate = String(empData.promotion.dueDateCategory).split('T')[0];
                    }
                } catch (e) {
                    console.error('Error loading full employee info:', e);
                }
            }

            form.setValue('degreeFromId', degreeFromId);

            // Find current degree rank and suggest next higher rank (rank - 1)
            const currentRank = getDegreeRank(currentDegreeName || (jobDegrees.find(d => Number(d.id) === degreeFromId)?.name));
            if (currentRank > 1 && currentRank <= 10) {
                const targetRank = currentRank - 1;
                const targetDegree = jobDegrees.find(d => getDegreeRank(d.name) === targetRank);
                if (targetDegree) {
                    form.setValue('degreeToId', Number(targetDegree.id));
                } else if (jobDegrees.length > 0) {
                    // Fallback to first available degree
                    form.setValue('degreeToId', Number(jobDegrees[0].id));
                }
            }

            form.setValue('dueDateDegree', degreeDueDate);
            form.setValue('dueDateCategory', categoryDueDate);
        } else {
            form.reset({
                employeeId: '',
                degreeFromId: 0,
                degreeToId: 0,
                dueDateDegree: '',
                dueDateCategory: '',
                bookNo: '',
                bookDate: '',
                note: '',
            });
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

    const currentDegreeObj = jobDegrees.find((d) => Number(d.id) === Number(form.watch('degreeFromId')));
    const currentDegreeLabel = selectedUser?.jobDegreeName || currentDegreeObj?.name || (form.watch('degreeFromId') ? `الدرجة (ID: ${form.watch('degreeFromId')})` : 'يرجى اختيار الموظف أولاً');

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        إنشاء ترقية جديدة
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <label className="text-sm font-medium mb-2 block">اختيار الموظف</label>
                        <EmployeeSearch onSelectUser={handleUserSelect} />
                    </div>

                    {selectedUser && (
                        <div className="bg-muted/50 border rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" />
                                <span className="font-semibold">{selectedUser.fullName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                                <span>الرقم الوظيفي: <strong>{selectedUser.jobCode || '-'}</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-amber-500" />
                                <span>الدرجة الحالية: <strong>{currentDegreeLabel}</strong></span>
                            </div>
                            {selectedUser.jobTitleName && (
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground">العنوان:</span>
                                    <span>{selectedUser.jobTitleName}</span>
                                </div>
                            )}
                            {selectedUser.directorateName && (
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-muted-foreground" />
                                    <span>{selectedUser.directorateName}</span>
                                </div>
                            )}
                            {selectedUser.degreeDueDate && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>استحقاق الترفيع: {String(selectedUser.degreeDueDate).split('T')[0]}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <Separator />

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="degreeFromId"
                                    render={() => (
                                        <FormItem>
                                            <FormLabel>الدرجة الحالية</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    value={currentDegreeLabel}
                                                    readOnly
                                                    disabled
                                                    className="bg-muted text-foreground cursor-not-allowed font-semibold"
                                                    placeholder="يتم جلبها تلقائياً عند اختيار الموظف"
                                                />
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
                                            <FormLabel>الدرجة الجديدة المستحقة</FormLabel>
                                            <FormControl>
                                                {jobDegrees.length > 0 ? (
                                                    <Select
                                                        value={field.value ? String(field.value) : ''}
                                                        onValueChange={(val) => field.onChange(Number(val))}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="اختر الدرجة الجديدة" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {jobDegrees.map((deg) => (
                                                                <SelectItem key={deg.id} value={String(deg.id)}>
                                                                    {deg.name || `الدرجة ${deg.id}`}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                ) : (
                                                    <Input type="number" placeholder="رقم الدرجة الجديدة" {...field} />
                                                )}
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
                                            <FormLabel>رقم الأمر / الكتاب</FormLabel>
                                            <FormControl>
                                                <Input placeholder="رقم الأمر الإداري" {...field} />
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
                                            <FormLabel>تاريخ الأمر / الكتاب</FormLabel>
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
                                            <Input placeholder="أي ملاحظات إضافية..." {...field} />
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


