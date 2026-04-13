import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Briefcase } from 'lucide-react';

const caseData = [
   { name: 'جديدة', value: 74 },
   { name: 'قيد العمل', value: 60 },
   { name: 'للأطلاع', value: 69 },
   { name: 'مكتمل', value: 90 },
   { name: 'منتهي الصلاحية', value: 44 }
];

const OpenCase = () => {
   return (
      <div className='flex flex-col border rounded-lg p-2 w-full h-[260px] bg-white dark:bg-gray-900'>
         <div className='flex items-center w-full gap-2'>
            <Briefcase className='h-6 w-6 text-blue-500' />
            <h1 className='text-2xl'>القضايا الغير مكتملة .</h1>
         </div>
         <Separator />
         <div className='mt-4 space-y-2 m'>
            <ScrollArea className='h-[190px]'>
               {caseData.map((item) => (
                  <div key={item.name} className='flex justify-between items-center mx-4'>
                     <span>{item.name}</span>
                     <Progress className='w-1/2 h-2' value={item.value} />
                  </div>
               ))}
            </ScrollArea>
         </div>
      </div>
   );
};

export default OpenCase;
