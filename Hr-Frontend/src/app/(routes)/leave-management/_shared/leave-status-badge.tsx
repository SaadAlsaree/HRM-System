import React from 'react';
import { Badge } from '@/components/ui/badge';
import { LeaveStatus, LeaveStatusLabels } from '@/types/enums';
import { cn } from '@/lib/utils';

const statusVariantMap: Record<LeaveStatus, { variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
    [LeaveStatus.Draft]: { variant: 'outline' },
    [LeaveStatus.PendingApproval]: { variant: 'secondary', className: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    [LeaveStatus.Approved]: { variant: 'default', className: 'bg-blue-100 text-blue-800 border-blue-300' },
    [LeaveStatus.Rejected]: { variant: 'destructive' },
    [LeaveStatus.Active]: { variant: 'default', className: 'bg-green-100 text-green-800 border-green-300' },
    [LeaveStatus.Expired]: { variant: 'secondary', className: 'bg-gray-100 text-gray-600 border-gray-300' },
    [LeaveStatus.Cancelled]: { variant: 'outline', className: 'bg-red-50 text-red-600 border-red-200' },
};

interface Props {
    status: LeaveStatus;
}

const LeaveStatusBadge: React.FC<Props> = ({ status }) => {
    const config = statusVariantMap[status] ?? { variant: 'outline' as const };
    return (
        <Badge variant={config.variant} className={cn(config.className)}>
            {LeaveStatusLabels[status] ?? 'غير معرف'}
        </Badge>
    );
};

export default LeaveStatusBadge;
