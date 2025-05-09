'use client';

import { Users, UserPlus, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const data = [
   { name: 'موظفين', value: 100 },
   { name: 'منتسبين', value: 0 }
];

const COLORS = ['#2DD4BF', '#F87171']; // Tailwind emerald-400 and red-400 equivalents

export default function ManagementEmployeeDashboard() {
   return (
      <div dir='rtl' className='p-6 max-w-7xl mx-auto space-y-6 font-sans'>
         <div className='grid md:grid-cols-2 gap-6'>
            {/* Donut Chart Section */}
            <div className='bg-white rounded-lg p-6 shadow-sm'>
               <h2 className='text-lg font-semibold mb-4 text-right'>التوزيع الملاك</h2>
               <ChartContainer
                  config={{
                     employees: {
                        label: 'الموظفين',
                        color: 'hsl(var(--chart-1))'
                     }
                  }}
                  className='w-full aspect-square max-w-[250px] mx-auto'
               >
                  <PieChart>
                     <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={0} dataKey='value'>
                        {data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index]} orientation='horizontal' />
                        ))}
                     </Pie>
                  </PieChart>
               </ChartContainer>
               <div className='flex flex-col items-center justify-center gap-2 mt-4'>
                  {data.map((entry, index) => (
                     <div key={entry.name} className='flex items-center gap-2'>
                        <span className='h-3 w-3 rounded-full' style={{ backgroundColor: COLORS[index] }}></span>
                        <span className='text-sm'>{entry.name}</span>
                        <span className='text-sm'>{entry.value}%</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Stats Section */}
            <div className='bg-white rounded-lg p-6 shadow-sm'>
               <h2 className='text-lg font-semibold mb-4 text-right'>التوزيع الإحصائي للملاك</h2>
               <div className='grid gap-4'>
                  <div className='grid grid-cols-2 gap-4'>
                     <Card className='p-4'>
                        <div className='text-right'>
                           <div className='flex justify-end items-center gap-2'>
                              <span>عدد المنتسبين</span>
                              <Users className='h-5 w-5' />
                           </div>
                           <p className='text-red-500 text-2xl font-bold text-right mt-2'>0</p>
                        </div>
                     </Card>
                     <Card className='p-4'>
                        <div className='text-right'>
                           <div className='flex justify-end items-center gap-2'>
                              <span>عدد الملاك</span>
                              <UserPlus className='h-5 w-5' />
                           </div>
                           <p className='text-2xl font-bold text-right mt-2'>1</p>
                        </div>
                     </Card>
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                     <Card className='p-4'>
                        <div className='text-right'>
                           <div className='flex justify-end items-center gap-2'>
                              <span>المنتسبين إلى الجهاز</span>
                              <ArrowDownToLine className='h-5 w-5' />
                           </div>
                           <p className='text-red-500 text-2xl font-bold text-right mt-2'>0</p>
                        </div>
                     </Card>
                     <Card className='p-4'>
                        <div className='text-right'>
                           <div className='flex justify-end items-center gap-2'>
                              <span>المنتسبين من الجهاز</span>
                              <ArrowUpFromLine className='h-5 w-5' />
                           </div>
                           <p className='text-red-500 text-2xl font-bold text-right mt-2'>0</p>
                        </div>
                     </Card>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Stats Cards */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <Card className='bg-[#4A5072] text-white p-6'>
               <div className='flex justify-between items-center'>
                  <Users className='h-6 w-6' />
                  <div className='text-right'>
                     <p className='text-2xl font-bold'>88</p>
                     <p className='text-sm'>عدد الممثلين</p>
                  </div>
               </div>
            </Card>
            <Card className='bg-[#4A5072] text-white p-6'>
               <div className='flex justify-between items-center'>
                  <Users className='h-6 w-6' />
                  <div className='text-right'>
                     <p className='text-2xl font-bold'>75</p>
                     <p className='text-sm'>عدد المكلفين</p>
                  </div>
               </div>
            </Card>
            <Card className='bg-[#4A5072] text-white p-6'>
               <div className='flex justify-between items-center'>
                  <Users className='h-6 w-6' />
                  <div className='text-right'>
                     <p className='text-2xl font-bold'>10</p>
                     <p className='text-sm'>عدد المفرغين</p>
                  </div>
               </div>
            </Card>
            <Card className='bg-[#4A5072] text-white p-6'>
               <div className='flex justify-between items-center'>
                  <Users className='h-6 w-6' />
                  <div className='text-right'>
                     <p className='text-2xl font-bold'>0</p>
                     <p className='text-sm'>عدد المنتسبين</p>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}
