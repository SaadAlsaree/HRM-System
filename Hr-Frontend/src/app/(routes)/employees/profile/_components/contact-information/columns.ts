export const columnsContactInformation: { label: string; value: string; className?: string }[] = [

    { label: '#', value: 'id', className: ' font-bold' },
    { label: 'الأسم الكامل', value: 'fullName', className: ' font-bold' },
    { label: 'صلة القرابة', value: 'levelOfRelationshipName', className: ' font-bold' },
    { label: 'رقم الهاتف', value: 'phoneNumber', className: ' font-bold' },
    { label: 'الحالة', value: 'status', className: 'hidden md:table-cell font-bold' },
    // { label: 'المرفقات', value: 'attachments', className: 'w-44 hidden md:table-cell font-bold' },
    { label: 'الملاحظات', value: 'notes', className: 'w-44 hidden md:table-cell font-bold' },
];