import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import HomeAddressForm from './home-address-form';
import { IAddressInformation } from '..';
import { Settings2 } from 'lucide-react';

type Props = {
   employeeId: string;
   data: IAddressInformation[];
};

const HomeAddressView = ({ employeeId, data }: Props) => {
   // address information if isCurrent is true or the latest address
   const address: IAddressInformation | undefined =
      data?.find((item) => item.isCurrent === true) || data?.[0];

   // all previous address information (excluding current)
   const allAddress: IAddressInformation[] =
      data?.filter((item) => item.id !== address?.id) || [];

   return (
      <div className='justify-center grid grid-cols-1 xl:grid-cols-2 gap-4'>
         <Card className='p-4'>
            <div className='flex justify-between items-center gap-2 mb-3'>
               <div>
                  <h1 className='text-lg font-semibold'>السكن الحالي</h1>
               </div>
               <div className='flex items-center gap-2'>
                  <HomeAddressForm title='إضافة' employeeId={employeeId} />
                  {address && (
                     <HomeAddressForm title='تعديل' icon={<Settings2 className='h-4 w-4' />} data={address} employeeId={employeeId} />
                  )}
               </div>
            </div>
            <Separator />
            <div className='mt-4'>
               {!address ? (
                  <div className='text-center py-8 text-muted-foreground text-sm'>
                     لا توجد بيانات سكن مسجلة لهذا الموظف
                  </div>
               ) : (
                  <div className='flow-root rounded-lg border-gray-100 py-2'>
                     <dl className='divide-y divide-gray-100 dark:divide-gray-800 text-sm'>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>المحافظة:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.governorateName || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>القضاء:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.provinceName || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>الناحية:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.territoryName || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>المنطقة / الحي:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.area || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>المحلة:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.district || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>الزقاق:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.streetNo || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>الدار:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.houseNo || '----'}</dd>
                        </div>
                        <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium text-muted-foreground'>أقرب نقطة دالة:</dt>
                           <dd className='sm:col-span-2 font-medium'>{address?.nearestPoint || '----'}</dd>
                        </div>
                        {address?.notes && (
                           <div className='grid grid-cols-1 gap-1 p-3 even:bg-muted/40 sm:grid-cols-3 sm:gap-4'>
                              <dt className='font-medium text-muted-foreground'>الملاحظات:</dt>
                              <dd className='sm:col-span-2 font-medium'>{address.notes}</dd>
                           </div>
                        )}
                     </dl>
                  </div>
               )}
            </div>
         </Card>
         <Card className='p-4'>
            <div>
               <div className='flex justify-between items-center gap-2 mb-3'>
                  <div>
                     <h1 className='text-lg font-semibold text-muted-foreground'>السكن السابق</h1>
                  </div>
               </div>
               <Separator />
               <div className='mt-4'>
                  {allAddress?.length === 0 ? (
                     <div className='text-center py-8 text-muted-foreground text-sm'>
                        لا يوجد سكن سابق مسجل
                     </div>
                  ) : (
                     <div className='space-y-3'>
                        {allAddress?.map((item, index) => (
                           <div key={item.id || index} className='p-3 border rounded-lg bg-card text-sm space-y-1'>
                              <div className='flex justify-between font-medium'>
                                 <span>{item?.governorateName} - {item?.provinceName || item?.territoryName}</span>
                                 <span className='text-xs text-muted-foreground'>{item?.area}</span>
                              </div>
                              <div className='text-xs text-muted-foreground'>
                                 محلة {item?.district || '-'} / زقاق {item?.streetNo || '-'} / دار {item?.houseNo || '-'}
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </Card>
      </div>
   );
};

export default HomeAddressView;
