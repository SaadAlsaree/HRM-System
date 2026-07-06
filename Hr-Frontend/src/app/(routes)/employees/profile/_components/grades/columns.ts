export const columnsGrades: { label: string; value: string; className?: string }[] = [
   { label: '#', value: 'id', className: 'font-bold' },
   { label: 'الدرجة السابقة', value: 'jobDegreeFromName', className: 'hidden md:table-cell font-bold' },
   { label: 'الدرجة الجديدة', value: 'jobDegreeToName', className: 'hidden md:table-cell font-bold' },
   { label: 'تاريخ استحقاق الدرجة', value: 'newDegreeDueDate', className: 'hidden md:table-cell font-bold' },
   { label: 'رقم الأمر', value: 'orderNo', className: 'hidden md:table-cell font-bold' },
   { label: 'الحالة', value: 'statusName', className: 'hidden md:table-cell font-bold' },
   { label: 'الملاحظات', value: 'note', className: 'hidden md:table-cell font-bold' },
];
