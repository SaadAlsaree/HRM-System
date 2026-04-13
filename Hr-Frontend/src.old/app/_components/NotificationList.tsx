import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BellRing, Trash2 } from 'lucide-react';
import React from 'react';

const NotificationList = () => {
   return (
      <div className='flex flex-col  bg-white dark:bg-gray-800 border rounded-lg p-2 gap-2'>
         <div className='flex justify-between items-center gap-2 mx-2'>
            <h1 className='text-muted-foreground text-xl'>الأشعارات</h1>

            <div className='rounded-lg bg-zinc-500 p-1.5 text-white '>
               <BellRing className='w-6 h-6' />
            </div>
         </div>
         <Separator />

         <ScrollArea className='h-[300px] text-right'>
            <div className='mx-4 space-y-2 text-right'>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
               <div className=' p-2 even:bg-sky-50 odd:bg-orange-50 dark:bg-gray-900 rounded-lg border text-muted-foreground'>
                  <div className=' flex items-center justify-between gap-2'>
                     <p className='text-sm text-black dark:text-white'>2022-02-02</p>
                     <Trash2 className='h-4 w-4 hover:text-red-500 duration-200 transition-colors cursor-pointer' />
                  </div>
                  <h1 className='truncate'>الأشعار الأول</h1>
               </div>
            </div>
         </ScrollArea>
      </div>
   );
};

export default NotificationList;
