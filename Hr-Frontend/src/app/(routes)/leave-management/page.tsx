import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leavesService } from '@/services/Leaves/leaves.service';
import { LeaveStatus } from '@/types/enums';

const LeaveManagementPage = async () => {
    let activeCount = 0;
    let pendingCount = 0;
    let expiredCount = 0;

    try {
        const [activeRes, pendingRes, expiredRes] = await Promise.all([
            leavesService.getLeaves({ Page: 1, PageSize: 1, LeaveStatusId: LeaveStatus.Active }),
            leavesService.getLeaves({ Page: 1, PageSize: 1, LeaveStatusId: LeaveStatus.PendingApproval }),
            leavesService.getLeaves({ Page: 1, PageSize: 1, LeaveStatusId: LeaveStatus.Expired }),
        ]);
        activeCount = activeRes?.totalCount ?? 0;
        pendingCount = pendingRes?.totalCount ?? 0;
        expiredCount = expiredRes?.totalCount ?? 0;
    } catch {
        // server-side fetch may fail if no auth; dashboard still renders
    }

    const stats = [
        { label: 'الإجازات النشطة', value: activeCount, color: 'text-green-600' },
        { label: 'بانتظار الموافقة', value: pendingCount, color: 'text-yellow-600' },
        { label: 'الإجازات المنتهية', value: expiredCount, color: 'text-gray-500' },
    ];

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">لوحة معلومات الإجازات</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((s, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className={`text-3xl font-bold ${s.color}`}>{s.value}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LeaveManagementPage;
