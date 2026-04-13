import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const TicketStatus = () => {
   return (
      <Card className='w-full h-[260px]'>
         <CardHeader>
            <CardTitle>حالة التذكرة</CardTitle>
         </CardHeader>
         <CardContent>
            <div className='space-y-4'>
               <div className='grid grid-cols-3 gap-4'>
                  <div>
                     <div className='text-xl font-bold text-yellow-500'>22</div>
                     <div className='text-sm text-muted-foreground'>جديد</div>
                  </div>
                  <div>
                     <div className='text-xl font-bold text-red-500'>15</div>
                     <div className='text-sm text-muted-foreground'>التذاكر المفتوحة</div>
                  </div>
                  <div>
                     <div className='text-xl font-bold text-blue-500'>70</div>
                     <div className='text-sm text-muted-foreground'>التذاكر المغلقة</div>
                  </div>
               </div>
               <div className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                     <span>تقارير الأخطاء</span>
                     <span className='font-medium text-red-500'>25</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                     <span>الدعم العام</span>
                     <span className='font-medium text-red-500'>16</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                     <span>أخطاء المنصة</span>
                     <span className='font-medium text-red-500'>19</span>
                  </div>
               </div>
               <div className='flex items-center justify-between text-sm font-medium text-muted-foreground'>
                  <p>تذاكر جديدة خلال الثلاثين يومًا الماضية</p>
                  <p>55</p>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default TicketStatus;
