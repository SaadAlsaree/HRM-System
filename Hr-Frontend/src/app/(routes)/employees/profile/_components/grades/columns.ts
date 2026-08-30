export const columnsGrades: { label: string; value: string; className?: string }[] = [
   { label: '#', value: 'id', className: 'font-bold w-[60px]' },
   { label: 'الدرجة السابقة', value: 'jobDegreeFromName', className: 'font-bold' },
   { label: 'الدرجة الجديدة', value: 'jobDegreeToName', className: 'font-bold' },
   { label: 'تاريخ استحقاق الدرجة', value: 'newDegreeDueDate', className: 'hidden md:table-cell font-bold' },
   { label: 'رقم الأمر', value: 'orderNo', className: 'hidden md:table-cell font-bold' },
   { label: 'تاريخ الأمر', value: 'orderDate', className: 'hidden lg:table-cell font-bold' },
   { label: 'الحالة', value: 'statusName', className: 'font-bold' },
   { label: 'الملاحظات', value: 'note', className: 'hidden lg:table-cell font-bold' },
];
