'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Calculator } from 'lucide-react';
import type { ChangeDueDateCalculationDetails } from '@/services/change-due-date.service';
import { format } from 'date-fns';

type Props = {
  calculation: ChangeDueDateCalculationDetails | null;
  isLoading: boolean;
};

const stepCodeLabels: Record<string, string> = {
  BaseDate: 'التاريخ الأساسي',
  DegreeAssignment: 'تسكين الدرجة',
  CategoryAssignment: 'تسكين الفئة',
  ThanksOrder: 'كتاب شكر',
  Penalty: 'عقوبة',
  LeaveWithoutSalary: 'إجازة بدون راتب',
  ServiceCalculation: 'احتساب خدمة',
  AcademicAchievement: 'تحصيل دراسي',
  AccelerateDegree: 'تعجيل درجة',
  CertificateCalculation: 'احتساب شهادة',
  EmployeeEvaluation: 'تقييم موظف',
};

const getStepCodeLabel = (code: string): string => {
  return stepCodeLabels[code] || code;
};

export default function CalculationDetailsDisplay({ calculation, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
      </div>
    );
  }

  if (!calculation) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-muted-foreground'>
        <Calculator className='h-12 w-12 mb-4 opacity-40' />
        <p className='text-lg font-medium'>لا توجد عملية حسابية سابقة</p>
        <p className='text-sm'>سيتم احتساب تاريخ الاستحقاق عند الحفظ</p>
      </div>
    );
  }

  const formattedCalculatedAt = calculation.calculatedAt
    ? (() => {
        try {
          return format(new Date(calculation.calculatedAt), 'yyyy-MM-dd HH:mm');
        } catch {
          return calculation.calculatedAt;
        }
      })()
    : '-';

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex items-center gap-2'>
              <Badge variant='default' className='rounded-sm'>ترفيع</Badge>
              نتيجة احتساب الترفيع
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>تاريخ الأساس:</span>
                <span className='font-medium'>{calculation.promotionBaseDate || '-'}</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>تاريخ الاستحقاق:</span>
                <span className='font-medium'>{calculation.promotionDueDate || '-'}</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>عدد الأشهر:</span>
                <span className='font-medium'>{calculation.promotionBaseMonths ?? '-'}</span>
              </div>
              {calculation.summary && (
                <div className='mt-2 pt-2 border-t'>
                  <p className='text-xs text-muted-foreground mb-1'>ملخص:</p>
                  <p className='text-sm whitespace-pre-wrap break-words'>{calculation.summary}</p>
                </div>
              )}
              <div className='text-xs text-muted-foreground mt-2'>
                تم الحساب في: {formattedCalculatedAt}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex items-center gap-2'>
              <Badge variant='secondary' className='rounded-sm'>علاوة</Badge>
              نتيجة احتساب العلاوة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>تاريخ الأساس:</span>
                <span className='font-medium'>{calculation.allowanceBaseDate || '-'}</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>تاريخ الاستحقاق:</span>
                <span className='font-medium'>{calculation.allowanceDueDate || '-'}</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>عدد الأشهر:</span>
                <span className='font-medium'>{calculation.allowanceBaseMonths ?? '-'}</span>
              </div>
              {calculation.summary && (
                <div className='mt-2 pt-2 border-t'>
                  <p className='text-xs text-muted-foreground mb-1'>ملخص:</p>
                  <p className='text-sm whitespace-pre-wrap break-words'>{calculation.summary}</p>
                </div>
              )}
              <div className='text-xs text-muted-foreground mt-2'>
                تم الحساب في: {formattedCalculatedAt}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {calculation.steps && calculation.steps.length > 0 && (
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>خطوات الاحتساب</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className='w-full'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='whitespace-nowrap'>نوع الاحتساب</TableHead>
                    <TableHead className='whitespace-nowrap'>رمز الخطوة</TableHead>
                    <TableHead className='whitespace-nowrap'>السبب</TableHead>
                    <TableHead className='whitespace-nowrap'>المصدر</TableHead>
                    <TableHead className='whitespace-nowrap'>التاريخ قبل</TableHead>
                    <TableHead className='whitespace-nowrap'>التاريخ بعد</TableHead>
                    <TableHead className='whitespace-nowrap'>المقدار</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calculation.steps.map((step, index) => (
                    <TableRow key={index}>
                      <TableCell className='whitespace-nowrap'>{step.calculationKind}</TableCell>
                      <TableCell className='whitespace-nowrap'>{getStepCodeLabel(step.stepCode)}</TableCell>
                      <TableCell className='max-w-[200px] whitespace-pre-wrap break-words'>{step.reason || '-'}</TableCell>
                      <TableCell className='whitespace-nowrap'>{step.sourceEntityName || '-'}</TableCell>
                      <TableCell className='whitespace-nowrap'>{step.beforeDate || '-'}</TableCell>
                      <TableCell className='whitespace-nowrap'>{step.afterDate || '-'}</TableCell>
                      <TableCell className='whitespace-nowrap'>
                        {step.deltaMonths !== 0 || step.deltaDays !== 0
                          ? `${step.deltaMonths > 0 ? '+' : ''}${step.deltaMonths}ش ${step.deltaDays > 0 ? '+' : ''}${step.deltaDays}ي`
                          : '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
