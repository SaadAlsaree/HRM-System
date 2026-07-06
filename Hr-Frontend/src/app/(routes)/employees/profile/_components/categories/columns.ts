export const columnsCategories: { label: string; value: string; className?: string }[] = [
   { label: '#', value: 'id', className: 'font-bold' },
   { label: 'الفئة السابقة', value: 'jobCategoryFromName', className: 'hidden md:table-cell font-bold' },
   { label: 'الفئة الجديدة', value: 'jobCategoryToName', className: 'hidden md:table-cell font-bold' },
   { label: 'تاريخ استحقاق الفئة', value: 'newCategoryDueDate', className: 'hidden md:table-cell font-bold' },
   { label: 'الدرجة الوظيفية', value: 'jobDegreeToName', className: 'hidden md:table-cell font-bold' },
   { label: 'رقم الأمر', value: 'orderNo', className: 'hidden md:table-cell font-bold' },
   { label: 'الحالة', value: 'statusName', className: 'hidden md:table-cell font-bold' },
   { label: 'الملاحظات', value: 'note', className: 'hidden md:table-cell font-bold' },
];
