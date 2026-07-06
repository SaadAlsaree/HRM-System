'use client';
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
import { Textarea } from '@/components/ui/textarea';
import Spinner from '@/components/spinner';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { promotionWithholdingService, PromotionWithholdingPayload } from '@/services/promotion-withholding.service';

const formSchema = z.object({
    employeeId: z.string().min(1, 'الرقم الوظيفي مطلوب'),
    scheduledPromotionDate: z.string().optional(),
    withholdingDate: z.string().optional(),
    reasonForWithholding: z.string().min(1, 'سبب الحجب مطلوب'),
    notes: z.string().optional(),
});

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    icon?: React.ReactNode;
    title: string;
    variant?: 'ghost' | 'outline' | 'default';
};

const WithholdingFormDialog = ({ data, icon, title, variant = 'default' }: Props) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            employeeId: data?.employeeId || '',
            scheduledPromotionDate: data?.scheduledPromotionDate?.split('T')[0] || '',
            withholdingDate: data?.withholdingDate?.split('T')[0] || '',
            reasonForWithholding: data?.reasonForWithholding || '',
            notes: data?.notes || '',
        },
    });

    const handleUserSelect = (user: IEmployeeSearch | null) => {
        setSelectedUser(user);
        if (user) form.setValue('employeeId', user.employeeId || '');
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setSubmitting(true);
        try {
            const payload: PromotionWithholdingPayload = {
                ...values,
                employeeId: values.employeeId,
            };

            let res;
            if (data?.id) {
                res = await promotionWithholdingService.updateWithholding(data.id, payload);
            } else {
                res = await promotionWithholdingService.createWithholding(payload);
            }

            if (res?.succeeded) {
                toast.success(`تم ${data?.id ? 'تعديل' : 'إنشاء'} حجب الترقية بنجاح.`);
                setOpen(false);
                router.refresh();
            } else {
                toast.error(res?.message || 'حدث خطأ.');
            }
        } catch {
            toast.error('فشل في الاتصال بالخادم.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} className="gap-2">
                    {icon ? icon : <Plus className="h-4 w-4" />}
                    {title}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{title} حجب الترقية</DialogTitle>
                </DialogHeader>

                {!data?.id && (
                    <div className="mb-4">
                        <label className="text-sm font-medium">اختيار الموظف</label>
                        <EmployeeSearch onSelectUser={handleUserSelect} />
                    </div>
                )}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="scheduledPromotionDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>تاريخ الترقية المجدول</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="withholdingDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>تاريخ الحجب</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reasonForWithholding"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>سبب الحجب</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ملاحظات إضافية</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline" type="button">إلغاء</Button>
                            </DialogClose>
                            <Button type="submit" disabled={isSubmitting || (!data?.id && !selectedUser)}>
                                {isSubmitting ? <Spinner /> : 'حفظ'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default WithholdingFormDialog;
