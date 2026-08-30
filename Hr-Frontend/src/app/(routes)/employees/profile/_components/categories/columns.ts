export const columnsCategories: { label: string; value: string; className?: string }[] = [
   { label: '#', value: 'id', className: 'font-bold w-[60px]' },
   { label: 'الفئة السابقة', value: 'jobCategoryFromName', className: 'font-bold' },
   { label: 'الفئة الجديدة', value: 'jobCategoryToName', className: 'font-bold' },
   { label: 'تاريخ استحقاق الفئة', value: 'newCategoryDueDate', className: 'hidden md:table-cell font-bold' },
   { label: 'الدرجة الوظيفية', value: 'jobDegreeToName', className: 'hidden md:table-cell font-bold' },
   { label: 'رقم الأمر', value: 'orderNo', className: 'hidden md:table-cell font-bold' },
   { label: 'تاريخ الأمر', value: 'orderDate', className: 'hidden lg:table-cell font-bold' },
   { label: 'الحالة', value: 'statusName', className: 'font-bold' },
   { label: 'الملاحظات', value: 'note', className: 'hidden lg:table-cell font-bold' },
];
