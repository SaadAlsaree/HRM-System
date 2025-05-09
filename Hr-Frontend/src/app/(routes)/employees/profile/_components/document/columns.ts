export const columnsDocument: { label: string; value: string; className?: string }[] = [
    { label: '#', value: 'id', className: 'font-bold' },
    { label: 'اسم المستمسك', value: 'Name', className: 'hidden md:table-cell font-bold' },
    { label: 'تاريخ الادخال', value: 'createdAt', className: 'hidden md:table-cell font-bold' },
    { label: 'الحالة', value: 'Status', className: 'hidden md:table-cell font-bold' },
    { label: 'المعلومات النصية', value: 'documentAttributes', className: 'hidden md:table-cell font-bold' },
    { label: 'المرفقات', value: 'attachment', className: 'hidden md:table-cell font-bold' },
    { label: 'الملاحظات', value: 'note', className: 'hidden md:table-cell font-bold' },
    // { label: 'الأجرائات', value: 'Actions', className: 'w-44 hidden md:table-cell font-bold' },
];