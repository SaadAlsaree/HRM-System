export const columnsInterruptions: { label: string; value: string; className?: string }[] = [
    { label: '#', value: 'id', className: 'font-bold' },
    { label: 'اسم الموظف', value: 'fullName', className: 'font-bold' },
    { label: 'رقم الاضبارة', value: 'lotNumber', className: 'font-bold' },
    { label: 'الرقم الوظيفي', value: 'jobCode', className: 'hidden md:table-cell font-bold' },
    { label: 'تاريخ الاشعار', value: 'notificationDate', className: 'hidden md:table-cell font-bold' },
    { label: 'تاريخ كتاب الانفكاك', value: 'separationOrderDate', className: 'hidden md:table-cell font-bold' },
    { label: 'الحالة', value: 'statusName', className: 'hidden md:table-cell font-bold' },
    { label: 'المرفقات', value: 'attachment', className: 'hidden md:table-cell font-bold' },
    { label: 'الملاحظات', value: 'note', className: 'hidden md:table-cell font-bold' },
];