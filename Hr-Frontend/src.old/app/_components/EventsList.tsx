import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CalendarDays } from 'lucide-react';
import React from 'react';

const EventsList = () => {
   return (
      <div className='flex flex-col  bg-white dark:bg-gray-800 border rounded-lg p-2 gap-2'>
         <div className='flex justify-between items-center gap-2 mx-2'>
            <h1 className='text-muted-foreground text-xl'>مواعيدي اليوم</h1>

            <div className='rounded-lg bg-amber-500 p-1.5 text-white '>
               <CalendarDays className='w-6 h-6' />
            </div>
         </div>
         <Separator />

         <ScrollArea className='h-[300px] text-right'>
            <div className='mx-4 space-y-2'>
               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>

               <div className='flex flex-col items-center p-2  border-b gap-2 text-muted-foreground'>
                  <h1 className='truncate w-full'>الموعد الأول</h1>
                  <div className='flex w-full justify-between text-sm text-black dark:text-white mx-8'>
                     <div className='flex flex-row gap-2'>
                        من
                        <h1>12:00 PM</h1>
                     </div>

                     <div className='flex flex-row gap-2'>
                        ألى
                        <h1>1:00 PM</h1>
                     </div>
                  </div>
               </div>
            </div>
         </ScrollArea>
      </div>
   );
};

export default EventsList;
