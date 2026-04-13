export const columnsHandPull: { label: string; value: string; className?: string }[] = [
    { label: '#', value: 'id', className: 'font-bold' },
    { label: 'اسم الموظف', value: 'fullName', className: 'font-bold' },
    { label: 'رقم الاضبارة', value: 'lotNumber', className: 'font-bold' },
    { label: 'الرقم الوظيفي', value: 'jobCode', className: 'hidden md:table-cell font-bold' },
    { label: 'رقم الامر بسحب اليد', value: 'withdrawHandPullOrderNo', className: 'hidden md:table-cell font-bold' },
    { label: 'تاريخ الامر بسحب اليد', value: 'withdrawHandPullOrderDate', className: 'hidden md:table-cell font-bold' },
    { label: 'رقم الامر برفع اليد', value: 'raiseHandPullOrderNo', className: 'hidden md:table-cell font-bold' },
    { label: 'تاريخ الامر برفع اليد', value: 'raiseHandPullOrderDate', className: 'hidden md:table-cell font-bold' },
    { label: 'الحالة', value: 'statusName', className: 'hidden md:table-cell font-bold' },
    { label: 'المرفقات', value: 'attachment', className: 'hidden md:table-cell font-bold' },
    { label: 'الملاحظات', value: 'note', className: 'hidden md:table-cell font-bold' },
];