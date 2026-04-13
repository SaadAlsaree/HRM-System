'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, GraduationCap, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useMemo } from 'react';

// Separate component for horizontal bar chart
const HorizontalBarChartCard = ({
   title,
   icon: Icon,
   data,
   totalCount
}: {
   title: string;
   icon: React.ElementType;
   data: { name: string; value: number }[];
   totalCount: number;
}) => {
   const COLORS = ['#2563eb', '#4f46e5'];

   return (
      <Card className='hover:shadow-md transition-all duration-300'>
         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-xl font-medium'>{title}</CardTitle>
            <Icon className='h-5 w-5 text-muted-foreground' />
         </CardHeader>
         <CardContent>
            <div className='text-2xl font-bold mb-4'>{totalCount}</div>
            <div className='h-[200px]'>
               <ResponsiveContainer width='100%' height='100%'>
                  <BarChart layout='horizontal' data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                     <XAxis dataKey='name' type='category' axisLine={false} tickLine={false} />
                     <YAxis type='number' axisLine={false} tickLine={false} />
                     <Tooltip />
                     <Bar dataKey='value' fill='#2563eb' barSize={30}>
                        {data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </CardContent>
      </Card>
   );
};

// Simple card component
const SimpleStatCard = ({ title, icon: Icon, count }: { title: string; icon: React.ElementType; count: number }) => {
   return (
      <Card className='hover:shadow-md transition-all duration-300'>
         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-xl font-medium'>{title}</CardTitle>
            <Icon className='h-6 w-6 text-muted-foreground' />
         </CardHeader>
         <CardContent>
            <div className='text-3xl font-bold text-primary'>{count}</div>
         </CardContent>
      </Card>
   );
};

export default function StatsDashboard() {
   // Memoize data to prevent unnecessary re-renders
   const statusData = useMemo(
      () => [
         { name: 'اجازة دراسية', value: 62.5 },
         { name: 'تجديد', value: 37.5 }
      ],
      []
   );

   const studyTypeData = useMemo(
      () => [
         { name: 'تفرغ', value: 62.5 },
         { name: 'زمالة', value: 37.5 }
      ],
      []
   );

   const certificateData = useMemo(
      () => [
         { name: 'بكالوريوس', value: 33.3 },
         { name: 'دبلوم عالي', value: 24.7 },
         { name: 'ماجستير', value: 21.0 },
         { name: 'دبلوم عالي للماجستير', value: 14.8 },
         { name: 'دكتوراه', value: 6.2 }
      ],
      []
   );

   return (
      <div className='p-6 space-y-6 rtl'>
         <div>
            <div className='p-6 space-y-6 rtl'>
               <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-1'>
                  <SimpleStatCard title='عدد الشهادات' icon={FileText} count={178} />
                  <SimpleStatCard title='انواع الدراسة' icon={BookOpen} count={178} />
                  <SimpleStatCard title='الموقف' icon={GraduationCap} count={178} />
               </div>
            </div>
         </div>
         <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-1'>
            <HorizontalBarChartCard title='الموقف' icon={FileText} data={statusData} totalCount={178} />
            <HorizontalBarChartCard title='انواع الدراسة' icon={BookOpen} data={studyTypeData} totalCount={178} />
            <HorizontalBarChartCard title='عدد الشهادات' icon={GraduationCap} data={certificateData} totalCount={178} />
         </div>
      </div>
   );
}
