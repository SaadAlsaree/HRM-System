import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const leaveNavItems = [
    { href: '/leave-management', label: 'لوحة المعلومات' },
    { href: '/leave-management/normal-leave', label: 'الإجازات الاعتيادية' },
    { href: '/leave-management/medical-leave', label: 'الإجازات المرضية' },
    { href: '/leave-management/maternity-leave', label: 'إجازة الأمومة' },
    { href: '/leave-management/long-leave', label: 'الإجازات الطويلة' },
    { href: '/leave-management/travel-leave', label: 'إجازات السفر' },
    { href: '/leave-management/mourning-leave', label: 'إجازة العدة' },
    { href: '/leave-management/appointment-leave', label: 'إجازة المعين' },
    { href: '/leave-management/special-medical-leave', label: 'الإجازة المرضية الخاصة' },
    { href: '/leave-management/temporary-leave', label: 'الإجازات الزمنية' },
    { href: '/leave-management/absences', label: 'الغياب' },
    { separator: true },
    { href: '/leave-management/approvals', label: 'طلبات بانتظار الموافقة' },
    { href: '/leave-management/reports', label: 'التقارير' },
    { href: '/leave-management/settings', label: 'إعدادات أنواع الإجازات' },
];

export default function LeaveManagementLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-4 w-full">
            <aside className="w-56 shrink-0 border rounded-lg bg-white dark:bg-gray-900 p-2 h-fit sticky top-2">
                <div className="text-sm font-semibold p-2 text-muted-foreground">إدارة الإجازات</div>
                <Separator className="my-1" />
                <nav className="flex flex-col gap-0.5">
                    {leaveNavItems.map((item, i) =>
                        'separator' in item ? (
                            <Separator key={i} className="my-1" />
                        ) : (
                            <Link
                                key={i}
                                href={item.href}
                                className="text-xs px-3 py-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>
            </aside>
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    );
}
