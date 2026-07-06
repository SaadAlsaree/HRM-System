'use client';
import React, { useState } from 'react';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { useRouter, useSearchParams } from 'next/navigation';
import { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
import { Button } from '@/components/ui/button';
import { CalendarIcon, FileSpreadsheet, RefreshCw } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { promotionsService } from '@/services/promotions.service';

type Props = {
   jobDegreesList: IJobDegree[];
};

const ReportToolbar = ({ jobDegreesList }: Props) => {
   const [, setSelectedUser] = useState<IEmployeeSearch | null>(null);
   const router = useRouter();
   const searchParams = useSearchParams();
   const degreeId = searchParams.get('degreeId');
   const fromDate = searchParams.get('fromDate');
   const toDate = searchParams.get('toDate');
   const employeeId = searchParams.get('employeeId');

   const updateParams = (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
         if (value) {
            params.set(key, value);
         } else {
            params.delete(key);
         }
      });

      params.set('page', '1');
      router.push(`?${params.toString()}`);
   };

   const handleUserSelect = (user: IEmployeeSearch | null) => {
      setSelectedUser(user);
      updateParams({ employeeId: user?.employeeId ?? null });
   };

   const resetFilters = () => {
      setSelectedUser(null);
      router.push('/promotion/reports');
   };

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegreesList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const handleExportToExcel = () => {
      if (employeeId) {
         promotionsService.exportPromotions(employeeId);
      }
   };

   return (
      <div className='flex flex-col w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>التقارير .</div>

            <Button variant='outline' className='flex items-center gap-2' onClick={handleExportToExcel}>
               <FileSpreadsheet className='h-4 w-4' />
               تصدير إلى Excel
            </Button>
         </div>

         <div className='flex flex-wrap items-center gap-4 w-full p-2'>
            <EmployeeSearch onSelectUser={handleUserSelect} />

            {/* Degree Filter */}
            <div className='flex flex-col gap-1'>
               <label className='text-sm text-muted-foreground'>الدرجة الوظيفية</label>
               <Select value={degreeId ?? 'all'} onValueChange={(value) => updateParams({ degreeId: value === 'all' ? null : value })}>
                  <SelectTrigger className='w-[200px]'>
                     <SelectValue placeholder='اختر الدرجة' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='all'>الكل</SelectItem>
                     {jopDegreeOptions?.map((option) => (
                        <SelectItem key={option.value} value={option.value.toString()}>
                           {option.label}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </div>

            {/* From Date Filter */}
            <div className='flex flex-col gap-1'>
               <label className='text-sm text-muted-foreground'>من تاريخ</label>
               <Popover>
                  <PopoverTrigger asChild>
                     <Button variant={'outline'} className={cn('w-[200px] justify-start text-right', !fromDate && 'text-muted-foreground')}>
                        <CalendarIcon className='ml-2 h-4 w-4' />
                        {fromDate ? format(new Date(fromDate), 'PPP') : 'اختر التاريخ'}
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                     <Calendar
                        mode='single'
                        selected={fromDate ? new Date(fromDate) : undefined}
                        onSelect={(date) => updateParams({ fromDate: date ? format(date, 'yyyy-MM-dd') : null })}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
            </div>

            {/* To Date Filter */}
            <div className='flex flex-col gap-1'>
               <label className='text-sm text-muted-foreground'>إلى تاريخ</label>
               <Popover>
                  <PopoverTrigger asChild>
                     <Button variant={'outline'} className={cn('w-[200px] justify-start text-right', !toDate && 'text-muted-foreground')}>
                        <CalendarIcon className='ml-2 h-4 w-4' />
                        {toDate ? format(new Date(toDate), 'PPP') : 'اختر التاريخ'}
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                     <Calendar
                        mode='single'
                        selected={toDate ? new Date(toDate) : undefined}
                        onSelect={(date) => updateParams({ toDate: date ? format(date, 'yyyy-MM-dd') : null })}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
            </div>

            {/* Reset Filters Button */}
            {(degreeId || fromDate || toDate || employeeId) && (
               <div className='flex flex-col gap-1'>
                  <label className='text-sm text-muted-foreground'>إعادة تعيين</label>
                  <Button variant='outline' className='w-[120px]' onClick={resetFilters}>
                     <RefreshCw className='ml-2 h-4 w-4' />
                     إعادة تعيين
                  </Button>
               </div>
            )}
         </div>
      </div>
   );
};

export default ReportToolbar;
