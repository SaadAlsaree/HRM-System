import { Separator } from '@/components/ui/separator';
import React from 'react';

const taskData = [
   { name: 'جديدة', value: 74, color: '#FFA500' },
   { name: 'قيد العمل', value: 60, color: '#1E90FF' },
   { name: 'للأطلاع', value: 69, color: '#800080' },
   { name: 'مكتمل', value: 174, color: '#00CED1' },
   { name: 'منتهي الصلاحية', value: 158, color: '#FF4500' }
];

const TasksOverview = () => {
   return (
      <div className='flex flex-col border rounded-lg p-2 w-full h-[260px] bg-white dark:bg-gray-900'>
         <div className='flex items-center justify-center w-full'>
            <h1 className='text-2xl'>نظرة عامة على كافة المهام</h1>
         </div>
         <Separator />
         <div className='mt-4 space-y-2 m'>
            {taskData.map((item) => (
               <div key={item.name} className='flex justify-between items-center mx-4'>
                  <span style={{ color: item.color }}>{item.name}</span>
                  <span>{item.value}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TasksOverview;
