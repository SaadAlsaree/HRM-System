'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
      name: 'الخميس',
      القضايا: 30,
      المهام: 70,
      amt: 2181
   },
   {
      name: 'الاربعاء',
      القضايا: 50,
      المهام: 50,
      amt: 2000
   },
   {
      name: 'الثلاثاء',
      القضايا: 90,
      المهام: 3,
      amt: 2290
   },
   {
      name: 'الإثنين',
      القضايا: 70,
      المهام: 20,
      amt: 2210
   },
   {
      name: 'الأحد',
      القضايا: 80,
      المهام: 10,
      amt: 2400
   }
];

const CaseTaskChart = () => {
   return (
      <div className='w-full h-full border rounded-lg bg-white dark:bg-gray-900 p-4'>
         <div className='flex justify-between items-center '>
            <h1 className='text-lg font-semibold'>المهام و قضايا</h1>
            {/* <Image src='/moreDark.png' width={20} height={20} alt='avatar' className='cursor-pointer' /> */}
         </div>
         <ResponsiveContainer width='100%' height='90%' style={{ direction: 'rtl', alignItems: 'end' }}>
            <BarChart width={600} height={300} data={data} barSize={20}>
               <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
               <XAxis dataKey='name' axisLine={false} tick={{ fill: '#2563eb' }} tickLine={false} />
               <YAxis axisLine={false} tick={{ fill: '#06b6d4' }} tickLine={false} />
               <Tooltip contentStyle={{ borderRadius: '10px', borderBlock: 'lightgray' }} />
               <Legend align='right' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
               <Bar dataKey='القضايا' fill='#2563eb' legendType='circle' style={{ padding: '2px' }} radius={[10, 10, 0, 0]} />
               <Bar dataKey='المهام' fill='#06b6d4' legendType='circle' radius={[10, 10, 0, 0]} />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
};

export default CaseTaskChart;
