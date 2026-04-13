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
   // address information if isCurrent is true
   const address: IAddressInformation = data?.find((item) => item.isCurrent === true) as IAddressInformation;

   // all address information if isCurrent is false
   const allAddress: IAddressInformation[] = data?.filter((item) => item.isCurrent === false);

   return (
      <div className='justify-center  grid grid-cols-1 xl:grid-cols-2 gap-4'>
         <Card className='p-2'>
            <div className='flex justify-between items-center gap-2 my-2'>
               <div>
                  <h1 className='text-xl text-muted-foreground'>السكن الحالي</h1>
               </div>
               <div>
                  <HomeAddressForm title='أضافة' employeeId={employeeId} />
                  <HomeAddressForm title='تعديل' icon={<Settings2 />} data={address} employeeId={employeeId} />
               </div>
            </div>
            <Separator />
            <div className='mt-4'>
               <div className='flow-root rounded-lg  border-gray-100 py-3'>
                  <dl className='-my-3 divide-y divide-gray-100 text-sm'>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium '>المحافظة :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.governorateName}</dd>
                     </div>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 dark:bg-gray-800'>
                        <dt className='font-medium '>القضاء :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.territoryName}</dd>
                     </div>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 '>
                        <dt className='font-medium '>المنطقة :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.area}</dd>
                     </div>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 dark:bg-gray-800'>
                        <dt className='font-medium '>المحلة :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.district}</dd>
                     </div>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                        <dt className='font-medium '>الزقاق :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.streetNo}</dd>
                     </div>
                     <div className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 dark:bg-gray-800'>
                        <dt className='font-medium '>البيت :</dt>
                        <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{address?.houseNo}</dd>
                     </div>
                  </dl>
               </div>
            </div>
         </Card>
         <Card>
            <div>
               <div className='flex justify-between items-center gap-2 p-3'>
                  <div>
                     <h1 className='text-xl text-muted-foreground mr-2'>السكن السابق</h1>
                  </div>
                  <div></div>
               </div>
               <Separator />
               <div>
                  <div className='flow-root rounded-lg  border-gray-100 py-3'>
                     {allAddress?.length < 0 && <h1>لا يوجد بيانات !</h1>}
                     {allAddress?.map((item, index) => (
                        <div key={index} className='grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4'>
                           <dt className='font-medium '>المحافظة :</dt>
                           <dd className='sm:col-span-2 truncate hover:text-wrap cursor-pointer'>{item?.governorateName}</dd>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Card>
      </div>
   );
};

export default HomeAddressView;
