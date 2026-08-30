'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { columnsCategories } from './columns';
import { useFetchClient } from '@/lib/fetchClient';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';
import { IChangeDegree, IPromotionInfo } from '../grades/grades-table';
import { IEmployeeManagementInfo } from '../../[id]/page';
import { Layers, Calendar, CheckCircle2, ShieldAlert, FileText, Sparkles, Award } from 'lucide-react';

type Props = {
   employeeId: string;
   managementInfo?: IEmployeeManagementInfo;
};

interface ChangeDegreeListResponse {
   data?: {
      items?: IChangeDegree[];
   };
}

interface PromotionListResponse {
   data?: {
      items?: IPromotionInfo[];
   };
}

const CategoriesTable = ({ employeeId, managementInfo }: Props) => {
   const fetchClient = useFetchClient();
   const [changeDegrees, setChangeDegrees] = useState<IChangeDegree[]>([]);
   const [promotionData, setPromotionData] = useState<IPromotionInfo | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingPromo, setIsLoadingPromo] = useState(false);
   const { refreshKey } = useEmployeeProfileRefresh();

   useEffect(() => {
      if (!employeeId) return;

      const fetchChangeDegrees = async () => {
         setIsLoading(true);
         try {
            const response = await fetchClient<ChangeDegreeListResponse>('/ChangeDegree', 'GET', {
               params: {
                  EmployeeId: employeeId,
                  Page: 1,
                  PageSize: 100
               }
            });

            setChangeDegrees(response?.data?.items ?? []);
         } catch (error) {
            console.error('Error fetching change degrees:', error);
            setChangeDegrees([]);
         } finally {
            setIsLoading(false);
         }
      };

      const fetchPromotion = async () => {
         setIsLoadingPromo(true);
         try {
            const response = await fetchClient<PromotionListResponse>('/Promotions', 'GET', {
               params: {
                  EmployeeId: employeeId,
                  Page: 1,
                  PageSize: 1
               }
            });

            const items = response?.data?.items;
            if (items && items.length > 0) {
               setPromotionData(items[0]);
            }
         } catch (error) {
            console.error('Error fetching promotion data:', error);
         } finally {
            setIsLoadingPromo(false);
         }
      };

      fetchChangeDegrees();
      fetchPromotion();
   }, [employeeId, refreshKey, fetchClient]);

   // Resolve active current category values
   const currentCategory = promotionData?.jobCategoryFromName || managementInfo?.categoryNameIsCurrent || '---';
   const hiringCategory = managementInfo?.categoryNameIsInHiring || '---';
   const currentDegree = promotionData?.degreeFromName || managementInfo?.degreeNameIsCurrent || '---';
   const categoryDueDate = promotionData?.dueDateCategory || managementInfo?.dueDateCategory || '---';
   const lastAllowanceDate = promotionData?.lastAllowanceDate || managementInfo?.lastAllowanceDate || '---';
   const isStopPromotion = managementInfo?.stopPromotion ?? promotionData?.stopPromotion ?? false;

   return (
      <div className='flex flex-col gap-6'>
         {/* Current Category Information Card */}
         <Card className='shadow-sm border border-border/80 bg-gradient-to-br from-card to-muted/20'>
            <CardHeader className='pb-3 border-b'>
               <div className='flex flex-wrap items-center justify-between gap-2'>
                  <div className='flex items-center gap-2.5'>
                     <div className='p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'>
                        <Layers className='h-5 w-5' />
                     </div>
                     <div>
                        <CardTitle className='text-base md:text-lg font-bold'>
                           معلومات الفئة / المرحلة الحالية والعلاوة
                        </CardTitle>
                        <p className='text-xs text-muted-foreground mt-0.5'>
                           تفاصيل المرحلة الحالية للموظف ومواعيد استحقاق العلاوات السنوية
                        </p>
                     </div>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Badge variant='outline' className='text-xs font-semibold px-3 py-1 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'>
                        <Sparkles className='h-3 w-3 ml-1 text-emerald-600' />
                        الفئة الحالية: {currentCategory}
                     </Badge>
                     <Badge
                        variant={isStopPromotion ? 'destructive' : 'default'}
                        className='text-xs font-semibold px-3 py-1'
                     >
                        {isStopPromotion ? (
                           <span className='flex items-center gap-1'>
                              <ShieldAlert className='h-3 w-3' />
                              موقوف عن العلاوة
                           </span>
                        ) : (
                           <span className='flex items-center gap-1'>
                              <CheckCircle2 className='h-3 w-3' />
                              مستمر بالعلاوة
                           </span>
                        )}
                     </Badge>
                  </div>
               </div>
            </CardHeader>
            <CardContent className='pt-5'>
               {isLoadingPromo ? (
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>
                     {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className='h-20 w-full rounded-lg' />
                     ))}
                  </div>
               ) : (
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>
                     {/* 1. Current Category */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>الفئة / المرحلة الحالية</span>
                           <Layers className='h-4 w-4 text-emerald-600' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {currentCategory}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>المرحلة الحالية لراتب الموظف</span>
                     </div>

                     {/* 2. Next Allowance Due Date */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>تاريخ استحقاق العلاوة القادمة</span>
                           <Calendar className='h-4 w-4 text-amber-600' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {categoryDueDate !== '---' ? categoryDueDate : 'غير محدد'}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>موعد استحقاق العلاوة السنوية القادمة</span>
                     </div>

                     {/* 3. Associated Job Degree */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>الدرجة الوظيفية المرتبطة</span>
                           <Award className='h-4 w-4 text-blue-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {currentDegree}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>الدرجة الوظيفية الحالية للموظف</span>
                     </div>

                     {/* 4. Hiring Category */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>الفئة عند التعيين</span>
                           <FileText className='h-4 w-4 text-slate-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {hiringCategory}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>المرحلة الأولى عند المباشرة</span>
                     </div>

                     {/* 5. Last Allowance Date */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>تاريخ آخر علاوة سنوية</span>
                           <Calendar className='h-4 w-4 text-indigo-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {lastAllowanceDate !== '---' ? lastAllowanceDate : 'لا يوجد'}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>تاريخ منح آخر علاوة سنوية للموظف</span>
                     </div>
                  </div>
               )}
            </CardContent>
         </Card>

         {/* Category Change History Table */}
         <div className='border rounded-xl bg-white dark:bg-gray-900 shadow-xs overflow-hidden'>
            <div className='p-4 border-b flex flex-wrap items-center justify-between gap-2 bg-muted/20'>
               <div>
                  <h3 className='text-sm md:text-base font-bold flex items-center gap-2'>
                     <FileText className='h-4 w-4 text-emerald-600' />
                     سجل الأوامر الإدارية لتغيير وتعديل الفئة / العلاوات
                  </h3>
                  <p className='text-xs text-muted-foreground mt-0.5'>
                     قائمة بجميع الأوامر الإدارية السابقة لتغيير الفئة ومنح العلاوات الصادرة للموظف
                  </p>
               </div>
               <Badge variant='outline' className='text-xs'>
                  إجمالي السجلات: {changeDegrees.length}
               </Badge>
            </div>

            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsCategories.map((column) => (
                        <TableHead key={column.value} className={column.className}>
                           {column.label}
                        </TableHead>
                     ))}
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {isLoading &&
                     Array.from({ length: 3 }).map((_, idx) => (
                        <TableRow key={idx}>
                           <TableCell colSpan={columnsCategories.length} className='h-12'>
                              <Skeleton className='h-6 w-full' />
                           </TableCell>
                        </TableRow>
                     ))}

                  {!isLoading && changeDegrees.length === 0 && (
                     <TableRow>
                        <TableCell colSpan={columnsCategories.length} className='h-28 text-center'>
                           <div className='flex flex-col items-center justify-center gap-1.5 text-muted-foreground py-4'>
                              <FileText className='h-8 w-8 text-muted-foreground/40' />
                              <span className='font-medium text-sm'>لا توجد أوامر إدارية سابقة لتغيير الفئة</span>
                              <span className='text-xs text-muted-foreground/70'>
                                 الفئة الحالية للموظف هي ({currentCategory}) ومثبتة في بيانات الموظف
                              </span>
                           </div>
                        </TableCell>
                     </TableRow>
                  )}

                  {!isLoading &&
                     changeDegrees.map((item, index) => (
                        <TableRow key={item.id || index}>
                           <TableCell className='font-medium'>
                              {item.id ? item.id.toString().toUpperCase().split('-', 1)[0] : index + 1}
                           </TableCell>
                           <TableCell>{item.jobCategoryFromName || '---'}</TableCell>
                           <TableCell className='font-semibold text-emerald-600 dark:text-emerald-400'>
                              {item.jobCategoryToName || '---'}
                           </TableCell>
                           <TableCell className='hidden md:table-cell'>{item.newCategoryDueDate || '---'}</TableCell>
                           <TableCell className='hidden md:table-cell'>{item.jobDegreeToName || '---'}</TableCell>
                           <TableCell className='hidden md:table-cell'>{item.orderNo || '---'}</TableCell>
                           <TableCell className='hidden lg:table-cell'>{item.orderDate || '---'}</TableCell>
                           <TableCell>
                              <Badge variant='outline' className='text-xs'>
                                 {item.statusName || 'مكتمل'}
                              </Badge>
                           </TableCell>
                           <TableCell className='hidden lg:table-cell text-xs text-muted-foreground'>
                              {item.note || '---'}
                           </TableCell>
                        </TableRow>
                     ))}
               </TableBody>
            </Table>
         </div>
      </div>
   );
};

export default CategoriesTable;
