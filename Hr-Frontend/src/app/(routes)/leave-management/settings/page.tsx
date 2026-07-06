'use client';
import React, { useEffect, useState } from 'react';
import { typeOfLeaveService, TypeOfLeavePayload } from '@/services/Leaves/type-of-leave.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TypeOfLeaveItem extends TypeOfLeavePayload {
    id: number;
}

const booleanFields: { key: keyof TypeOfLeavePayload; label: string }[] = [
    { key: 'requiresAdministrativeOrder', label: 'يتطلب أمر إداري' },
    { key: 'requiresApprovals', label: 'يتطلب موافقات' },
    { key: 'affectsService', label: 'يؤثر على الخدمة' },
    { key: 'affectsPromotion', label: 'يؤثر على الترقية' },
    { key: 'affectsBonus', label: 'يؤثر على العلاوة' },
    { key: 'affectsSalary', label: 'يؤثر على الراتب' },
    { key: 'affectsRetirement', label: 'يؤثر على التقاعد' },
    { key: 'allowsExtension', label: 'يسمح بالتمديد' },
    { key: 'allowsTermination', label: 'يسمح بالإنهاء' },
    { key: 'allowsCarryover', label: 'يسمح بالنقل' },
    { key: 'countsTowardsAnnualBalance', label: 'يحتسب من الرصيد السنوي' },
    { key: 'isBalanceBased', label: 'يعتمد على الرصيد' },
];

const LeaveTypeSettingsPage = () => {
    const [items, setItems] = useState<TypeOfLeaveItem[]>([]);
    const [editing, setEditing] = useState<TypeOfLeaveItem | null>(null);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        try {
            const res = await typeOfLeaveService.getTypeOfLeave({ Page: 1, PageSize: 100 });
            setItems(res?.data?.items ?? []);
        } catch (e) {
            console.error('Failed to load leave types:', e);
        }
    };

    useEffect(() => { loadData(); }, []);

    const handleSave = async () => {
        if (!editing) return;
        setLoading(true);
        try {
            if (editing.id) {
                await typeOfLeaveService.updateTypeOfLeave(editing.id, editing);
            } else {
                await typeOfLeaveService.createTypeOfLeave(editing);
            }
            setEditing(null);
            loadData();
        } catch (e) {
            console.error('Save failed:', e);
        } finally {
            setLoading(false);
        }
    };

    const toggleField = (key: keyof TypeOfLeavePayload) => {
        if (!editing) return;
        setEditing({ ...editing, [key]: !editing[key] });
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">إعدادات أنواع الإجازات</h1>
                <Button onClick={() => setEditing({ name: '', isBalanceBased: true, defaultSalaryStatusId: 0 } as TypeOfLeaveItem)}>
                    إضافة نوع جديد
                </Button>
            </div>

            <div className="border rounded-lg bg-white dark:bg-gray-900">
                <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                        <tr>
                            <th className="p-2 text-right">الاسم</th>
                            <th className="p-2 text-center">يعتمد على الرصيد</th>
                            <th className="p-2 text-center">يؤثر على الترقية</th>
                            <th className="p-2 text-center">يسمح بالتمديد</th>
                            <th className="p-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="p-2">{item.name}</td>
                                <td className="p-2 text-center">{item.isBalanceBased ? '✓' : '—'}</td>
                                <td className="p-2 text-center">{item.affectsPromotion ? '✓' : '—'}</td>
                                <td className="p-2 text-center">{item.allowsExtension ? '✓' : '—'}</td>
                                <td className="p-2">
                                    <Button size="sm" variant="outline" onClick={() => setEditing(item)}>تعديل</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editing && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm">{editing.id ? 'تعديل نوع الإجازة' : 'نوع إجازة جديد'}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>الاسم</Label>
                                <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                            </div>
                            <div>
                                <Label>الوصف</Label>
                                <Input value={editing.description ?? ''} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
                            </div>
                            <div>
                                <Label>الحد الأقصى للأيام</Label>
                                <Input type="number" value={editing.maxDurationDays ?? ''} onChange={(e) => setEditing({ ...editing, maxDurationDays: e.target.value ? Number(e.target.value) : null })} />
                            </div>
                            <div>
                                <Label>حد النقل للأيام</Label>
                                <Input type="number" value={editing.maxCarryoverDays ?? ''} onChange={(e) => setEditing({ ...editing, maxCarryoverDays: e.target.value ? Number(e.target.value) : null })} />
                            </div>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-3 gap-3">
                            {booleanFields.map((f) => (
                                <div key={f.key} className="flex items-center gap-2">
                                    <Checkbox
                                        checked={(editing[f.key] as boolean) ?? false}
                                        onCheckedChange={() => toggleField(f.key)}
                                    />
                                    <Label className="text-xs cursor-pointer" onClick={() => toggleField(f.key)}>{f.label}</Label>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button variant="outline" onClick={() => setEditing(null)}>إلغاء</Button>
                            <Button disabled={loading} onClick={handleSave}>حفظ</Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default LeaveTypeSettingsPage;
