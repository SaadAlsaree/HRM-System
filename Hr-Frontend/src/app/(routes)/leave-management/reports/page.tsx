'use client';
import React, { useEffect, useState } from 'react';
import { leavesService } from '@/services/Leaves/leaves.service';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const reportTypes = [
    { value: 1, label: 'أرصدة الإجازات' },
    { value: 2, label: 'الإجازات الحالية' },
    { value: 3, label: 'الإجازات المنتهية' },
    { value: 4, label: 'حسب النوع' },
    { value: 5, label: 'حسب القسم' },
    { value: 6, label: 'حسب المديرية' },
    { value: 7, label: 'حسب الفترة' },
    { value: 8, label: 'الموظفون في إجازة الآن' },
    { value: 9, label: 'تأثير الإجازات على الترقية' },
    { value: 10, label: 'تأثير الإجازات على العلاوة' },
];

const LeaveReportsPage = () => {
    const [reportType, setReportType] = useState(1);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [typeOfLeaveId, setTypeOfLeaveId] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [directorateId, setDirectorateId] = useState('');
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const runReport = async () => {
        setLoading(true);
        try {
            const params: any = { ReportType: reportType };
            if (dateFrom) params.DateFrom = dateFrom;
            if (dateTo) params.DateTo = dateTo;
            if (typeOfLeaveId) params.TypeOfLeaveId = Number(typeOfLeaveId);
            if (departmentId) params.DepartmentId = Number(departmentId);
            if (directorateId) params.DirectorateId = Number(directorateId);

            const res = await leavesService.getLeaveReport(params);
            setData(res?.data);
        } catch (e) {
            console.error('Report failed:', e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">تقارير الإجازات</h1>

            <Card>
                <CardHeader><CardTitle className="text-sm">خيارات التقرير</CardTitle></CardHeader>
                <CardContent className="flex flex-wrap gap-4 items-end">
                    <div className="flex flex-col gap-1">
                        <Label className="text-xs">نوع التقرير</Label>
                        <select
                            className="border rounded-md px-3 py-2 text-sm bg-background"
                            value={reportType}
                            onChange={(e) => setReportType(Number(e.target.value))}
                        >
                            {reportTypes.map((r) => (
                                <option key={r.value} value={r.value}>{r.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-xs">من تاريخ</Label>
                        <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="w-auto" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-xs">إلى تاريخ</Label>
                        <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="w-auto" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-xs">نوع الإجازة</Label>
                        <Input type="number" value={typeOfLeaveId} onChange={(e) => setTypeOfLeaveId(e.target.value)} className="w-24" />
                    </div>
                    <Button disabled={loading} onClick={runReport}>عرض التقرير</Button>
                </CardContent>
            </Card>

            {data && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm">
                            النتائج ({data.totalCount ?? 0})
                            {data.summary && <span className="text-muted-foreground mr-2">— {data.summary}</span>}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {data.items?.length > 0 ? (
                            <div className="overflow-auto">
                                <table className="w-full text-xs">
                                    <thead className="bg-muted/50">
                                        <tr>
                                            {data.items[0].employeeName && <th className="p-2 text-right">الموظف</th>}
                                            {data.items[0].typeOfLeaveName && <th className="p-2 text-right">النوع</th>}
                                            {data.items[0].fromDate && <th className="p-2 text-center">من</th>}
                                            {data.items[0].toDate && <th className="p-2 text-center">إلى</th>}
                                            {data.items[0].countOfDays != null && <th className="p-2 text-center">الأيام</th>}
                                            {data.items[0].annualBalance != null && <th className="p-2 text-center">سنوي</th>}
                                            {data.items[0].usedBalance != null && <th className="p-2 text-center">مستخدم</th>}
                                            {data.items[0].remainingBalance != null && <th className="p-2 text-center">متبقي</th>}
                                            {data.items[0].groupKey && <th className="p-2 text-right">المجموعة</th>}
                                            {data.items[0].groupCount != null && data.items[0].groupCount > 0 && <th className="p-2 text-center">العدد</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.items.map((item: any, i: number) => (
                                            <tr key={i} className="border-t">
                                                {item.employeeName && <td className="p-2">{item.employeeName}</td>}
                                                {item.typeOfLeaveName && <td className="p-2">{item.typeOfLeaveName}</td>}
                                                {item.fromDate && <td className="p-2 text-center">{item.fromDate}</td>}
                                                {item.toDate && <td className="p-2 text-center">{item.toDate}</td>}
                                                {item.countOfDays != null && <td className="p-2 text-center">{item.countOfDays}</td>}
                                                {item.annualBalance != null && <td className="p-2 text-center">{item.annualBalance}</td>}
                                                {item.usedBalance != null && <td className="p-2 text-center">{item.usedBalance}</td>}
                                                {item.remainingBalance != null && <td className="p-2 text-center font-bold">{item.remainingBalance}</td>}
                                                {item.groupKey && <td className="p-2">{item.groupKey}</td>}
                                                {item.groupCount != null && item.groupCount > 0 && <td className="p-2 text-center">{item.groupCount}</td>}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-sm">لا توجد بيانات</p>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default LeaveReportsPage;
