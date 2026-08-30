'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { columnsGrades } from './columns';
import { useFetchClient } from '@/lib/fetchClient';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';
import { IEmployeeManagementInfo } from '../../[id]/page';
import { Award,  Calendar, CheckCircle2, ShieldAlert, FileText, Sparkles, Clock } from 'lucide-react';

export interface IChangeDegree {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   jobDegreeFromId?: number;
   jobDegreeFromName?: string;
   jobDegreeToId?: number;
   jobDegreeToName?: string;
   jobCategoryFromId?: number;
   jobCategoryFromName?: string;
   jobCategoryToId?: number;
   jobCategoryToName?: string;
   oldDegreeDueDate?: string;
   newDegreeDueDate?: string;
   oldCategoryDueDate?: string;
   newCategoryDueDate?: string;
   orderNo?: string;
   orderDate?: string;
   note?: string;
}

export interface IPromotionInfo {
   id?: string;
   degreeFromId?: number;
   degreeFromName?: string;
   degreeToId?: number;
   degreeToName?: string;
   jobCategoryFromId?: number;
   jobCategoryFromName?: string;
   jobCategoryToId?: number;
   jobCategoryToName?: string;
   dueDateDegree?: string;
   dueDateCategory?: string;
   lastAllowanceDate?: string;
   serviceRecycle?: number;
   sentPromotionGroupName?: string;
   stopPromotion?: boolean;
   status?: number;
   statusName?: string;
   note?: string;
}

type Props = {
   employeeId?: string;
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

const GradesTable = ({ employeeId, managementInfo }: Props) => {
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

   // Resolve active current grade values
   const currentDegree = promotionData?.degreeFromName || managementInfo?.degreeNameIsCurrent || '---';
   const hiringDegree = managementInfo?.degreeNameIsInHiring || '---';
   const stopDegree = managementInfo?.stopJobDegreeName || 'غير محدد';
   const degreeDueDate = promotionData?.dueDateDegree || managementInfo?.dueDateDegree || '---';
   const isStopPromotion = managementInfo?.stopPromotion ?? promotionData?.stopPromotion ?? false;

   return (
      <div className='flex flex-col gap-6'>
         {/* Current Grade Information Card */}
         <Card className='shadow-sm border border-border/80 bg-gradient-to-br from-card to-muted/20'>
            <CardHeader className='pb-3 border-b'>
               <div className='flex flex-wrap items-center justify-between gap-2'>
                  <div className='flex items-center gap-2.5'>
                     <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                        <Award className='h-5 w-5' />
                     </div>
                     <div>
                        <CardTitle className='text-base md:text-lg font-bold'>
                           معلومات الدرجة الوظيفية الحالية
                        </CardTitle>
                        <p className='text-xs text-muted-foreground mt-0.5'>
                           تفاصيل الدرجة الحالية للموظف واستحقاقات الترفيع القادمة
                        </p>
                     </div>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Badge variant='outline' className='text-xs font-semibold px-3 py-1 bg-primary/5 text-primary border-primary/20'>
                        <Sparkles className='h-3 w-3 ml-1 text-primary' />
                        الدرجة الحالية: {currentDegree}
                     </Badge>
                     <Badge
                        variant={isStopPromotion ? 'destructive' : 'default'}
                        className='text-xs font-semibold px-3 py-1'
                     >
                        {isStopPromotion ? (
                           <span className='flex items-center gap-1'>
                              <ShieldAlert className='h-3 w-3' />
                              موقوف عن الترفيع
                           </span>
                        ) : (
                           <span className='flex items-center gap-1'>
                              <CheckCircle2 className='h-3 w-3' />
                              مستمر بالترفيع
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
                     {/* 1. Current Grade */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>الدرجة الوظيفية الحالية</span>
                           <Award className='h-4 w-4 text-primary' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {currentDegree}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>المستوى الوظيفي الفعال</span>
                     </div>

                     {/* 2. Next Promotion Due Date */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>تاريخ استحقاق الترفيع القادم</span>
                           <Calendar className='h-4 w-4 text-amber-600' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {degreeDueDate !== '---' ? degreeDueDate : 'غير محدد'}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>موعد استحقاق الترقية القادمة</span>
                     </div>

                     {/* 3. Hiring Grade */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>الدرجة عند التعيين</span>
                           <FileText className='h-4 w-4 text-slate-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {hiringDegree}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>الدرجة الأولى عند بداية التعيين</span>
                     </div>

                     {/* 4. Stop Degree */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>درجة التوقف (الحد الأقصى)</span>
                           <ShieldAlert className='h-4 w-4 text-rose-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {stopDegree}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>أعلى درجة يمكن الوصول إليها</span>
                     </div>

                     {/* 5. Promotion Status */}
                     <div className='p-3.5 rounded-xl border bg-card/60 shadow-xs flex flex-col justify-between gap-1'>
                        <div className='flex items-center justify-between text-xs text-muted-foreground'>
                           <span>حالة الترفيع</span>
                           <Clock className='h-4 w-4 text-blue-500' />
                        </div>
                        <div className='text-base font-bold text-foreground mt-1'>
                           {isStopPromotion ? 'موقوف عن الترفيع' : 'مستمر (غير موقوف)'}
                        </div>
                        <span className='text-[11px] text-muted-foreground'>سريان استحقاق الترفيعات والعلاوات</span>
                     </div>
                  </div>
               )}
            </CardContent>
         </Card>

         {/* Grade Change History Table */}
         <div className='border rounded-xl bg-white dark:bg-gray-900 shadow-xs overflow-hidden'>
            <div className='p-4 border-b flex flex-wrap items-center justify-between gap-2 bg-muted/20'>
               <div>
                  <h3 className='text-sm md:text-base font-bold flex items-center gap-2'>
                     <FileText className='h-4 w-4 text-primary' />
                     سجل الأوامر الإدارية لتغيير وتعديل الدرجة
                  </h3>
                  <p className='text-xs text-muted-foreground mt-0.5'>
                     قائمة بجميع الأوامر الإدارية السابقة لتغيير الدرجة الصادرة للموظف
                  </p>
               </div>
               <Badge variant='outline' className='text-xs'>
                  إجمالي السجلات: {changeDegrees.length}
               </Badge>
            </div>

            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsGrades.map((column) => (
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
                           <TableCell colSpan={columnsGrades.length} className='h-12'>
                              <Skeleton className='h-6 w-full' />
                           </TableCell>
                        </TableRow>
                     ))}

                  {!isLoading && changeDegrees.length === 0 && (
                     <TableRow>
                        <TableCell colSpan={columnsGrades.length} className='h-28 text-center'>
                           <div className='flex flex-col items-center justify-center gap-1.5 text-muted-foreground py-4'>
                              <FileText className='h-8 w-8 text-muted-foreground/40' />
                              <span className='font-medium text-sm'>لا توجد أوامر إدارية سابقة لتغيير الدرجة</span>
                              <span className='text-xs text-muted-foreground/70'>
                                 الدرجة الحالية للموظف هي ({currentDegree}) ومثبتة في بيانات الموظف
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
                           <TableCell>{item.jobDegreeFromName || '---'}</TableCell>
                           <TableCell className='font-semibold text-primary'>{item.jobDegreeToName || '---'}</TableCell>
                           <TableCell className='hidden md:table-cell'>{item.newDegreeDueDate || '---'}</TableCell>
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

export default GradesTable;
