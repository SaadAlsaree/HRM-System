'use client';
import React from 'react';
import { LeaveStatus } from '@/types/enums';
import { leavesService } from '@/services/Leaves/leaves.service';
import { Button } from '@/components/ui/button';
import { Check, X, Ban, Clock, Plus, Scissors } from 'lucide-react';

interface Props {
    leaveId: string;
    status: LeaveStatus;
    allowsExtension?: boolean;
    allowsTermination?: boolean;
    onAction?: () => void;
}

const LeaveActions: React.FC<Props> = ({ leaveId, status, allowsExtension, allowsTermination, onAction }) => {
    const [loading, setLoading] = React.useState(false);

    const handleAction = async (action: string, fn: () => Promise<any>) => {
        setLoading(true);
        try {
            await fn();
            onAction?.();
        } catch (e) {
            console.error(`${action} failed:`, e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex gap-1">
            {status === LeaveStatus.Draft && (
                <Button size="sm" variant="outline" disabled={loading}
                    onClick={() => handleAction('submit', () => leavesService.submitLeave(leaveId))}>
                    <Clock className="w-3 h-3 ml-1" /> إرسال
                </Button>
            )}
            {status === LeaveStatus.PendingApproval && (
                <>
                    <Button size="sm" variant="default" disabled={loading}
                        onClick={() => handleAction('approve', () => leavesService.approveLeave(leaveId, { approverId: '' }))}>
                        <Check className="w-3 h-3 ml-1" /> موافقة
                    </Button>
                    <Button size="sm" variant="destructive" disabled={loading}
                        onClick={() => handleAction('reject', () => leavesService.rejectLeave(leaveId, { approverId: '' }))}>
                        <X className="w-3 h-3 ml-1" /> رفض
                    </Button>
                </>
            )}
            {(status === LeaveStatus.Approved || status === LeaveStatus.Active) && (
                <Button size="sm" variant="outline" disabled={loading}
                    onClick={() => handleAction('cancel', () => leavesService.cancelLeave(leaveId, { reason: 'إلغاء' }))}>
                    <Ban className="w-3 h-3 ml-1" /> إلغاء
                </Button>
            )}
            {status === LeaveStatus.Active && allowsExtension && (
                <Button size="sm" variant="outline" disabled={loading}
                    onClick={() => handleAction('extend', () => leavesService.extendLeave(leaveId, { extensionDays: 0, newEndDate: '' }))}>
                    <Plus className="w-3 h-3 ml-1" /> تمديد
                </Button>
            )}
            {status === LeaveStatus.Active && allowsTermination && (
                <Button size="sm" variant="outline" disabled={loading}
                    onClick={() => handleAction('cut', () => leavesService.updateLeaveCut(leaveId, { daysToCut: 0, cutReason: 'قطع' }))}>
                    <Scissors className="w-3 h-3 ml-1" /> قطع
                </Button>
            )}
        </div>
    );
};

export default LeaveActions;
