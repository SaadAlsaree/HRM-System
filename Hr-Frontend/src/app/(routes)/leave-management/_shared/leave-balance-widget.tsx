import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    annualBalance: number;
    carriedOverBalance: number;
    earnedBalance: number;
    usedBalance: number;
}

const LeaveBalanceWidget: React.FC<Props> = ({ annualBalance, carriedOverBalance, earnedBalance, usedBalance }) => {
    const remaining = annualBalance + carriedOverBalance + earnedBalance - usedBalance;

    const buckets = [
        { label: 'الرصيد السنوي', value: annualBalance, color: 'text-blue-600' },
        { label: 'الرصيد المنقول', value: carriedOverBalance, color: 'text-purple-600' },
        { label: 'الرصيد المكتسب', value: earnedBalance, color: 'text-green-600' },
        { label: 'الرصيد المستخدم', value: usedBalance, color: 'text-red-600' },
        { label: 'الرصيد المتبقي', value: remaining, color: 'text-primary' },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm">أرصدة الإجازات</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-5 gap-2 text-center">
                    {buckets.map((b, i) => (
                        <div key={i} className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                            <span className={`text-lg font-bold ${b.color}`}>{b.value}</span>
                            <span className="text-[10px] text-muted-foreground">{b.label}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default LeaveBalanceWidget;
