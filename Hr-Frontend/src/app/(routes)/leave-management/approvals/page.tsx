'use client';
import React, { useEffect, useState } from 'react';
import { leavesService } from '@/services/Leaves/leaves.service';
import LeaveStatusBadge from '../_shared/leave-status-badge';
import LeaveActions from '../_shared/leave-actions';
import { LeaveStatus } from '@/types/enums';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface LeaveItem {
    id: string;
    employeeId: string;
    fullName?: string;
    jobCode?: string;
    typeOfLeaveName?: string;
    fromDate?: string;
    toDate?: string;
    countOfDays?: number;
    leaveStatusId?: LeaveStatus;
}

const ApprovalsPage = () => {
    const [items, setItems] = useState<LeaveItem[]>([]);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const res = await leavesService.getLeaves({ Page: 1, PageSize: 50, LeaveStatusId: LeaveStatus.PendingApproval });
            setItems(res?.data?.items ?? []);
        } catch (e) {
            console.error('Failed to load approvals:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadData(); }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">طلبات بانتظار الموافقة</h1>
                <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>تحديث</Button>
            </div>
            <Separator />
            {items.length === 0 ? (
                <p className="text-muted-foreground text-sm">لا توجد طلبات بانتظار الموافقة</p>
            ) : (
                <div className="flex flex-col gap-2">
                    {items.map((item) => (
                        <div key={item.id} className="border rounded-lg p-3 bg-white dark:bg-gray-900 flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm">{item.fullName ?? 'غير معروف'}</span>
                                    {item.jobCode && <span className="text-xs text-muted-foreground">({item.jobCode})</span>}
                                    {item.leaveStatusId !== undefined && <LeaveStatusBadge status={item.leaveStatusId} />}
                                </div>
                                <div className="flex gap-4 text-xs text-muted-foreground">
                                    {item.typeOfLeaveName && <span>النوع: {item.typeOfLeaveName}</span>}
                                    {item.fromDate && <span>من: {item.fromDate}</span>}
                                    {item.toDate && <span>إلى: {item.toDate}</span>}
                                    {item.countOfDays != null && <span>الأيام: {item.countOfDays}</span>}
                                </div>
                            </div>
                            {item.leaveStatusId !== undefined && (
                                <LeaveActions
                                    leaveId={item.id}
                                    status={item.leaveStatusId}
                                    onAction={loadData}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApprovalsPage;
