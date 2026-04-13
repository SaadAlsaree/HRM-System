'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Settings2 } from 'lucide-react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import SelectStatus from '@/app/_components/select-status';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { IMartyrsAndWounded } from '../page';
import { martyrsWoundedService } from '@/services/martyrs-wounded.service';
import MartyrsWoundedForm from './martyrs-wounded-form';
import MartyrsWoundedAttachment from './martyrs-wounded-attachment';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   martyrsWoundedList: IMartyrsAndWounded[];
};

const MartyrsWoundedTable = ({ columns, martyrsWoundedList }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await martyrsWoundedService.patchMartyrsWounded({ id, statusId: value });

         toast(
            <pre className=' w-[340px] rounded-md'>
               <h1 className='text-xl'>{response?.message}</h1>
            </pre>
         );
         router.refresh();
      } catch (error) {
         console.log('error', error);
      }
   };
   return (
      <div>
         <ScrollArea className='w-[1380px] whitespace-nowrap '>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columns.map((column) => (
                        <TableHead key={column.value} className={column.className}>
                           {column.label}
                        </TableHead>
                     ))}
                     <TableHead className='w-[100px] text-center'>
                        <AlignJustify className='justify-center' />
                     </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {martyrsWoundedList?.map((item) => (
                     <TableRow key={item?.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.lotNumber}</TableCell>
                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.endDateOfService}</TableCell>
                        <TableCell>{item?.dateOfDeath?.split('T', 1)}</TableCell>
                        <TableCell>{item?.dateOfMartyrdom}</TableCell>
                        <TableCell>{item?.administrativeOrderNo}</TableCell>
                        <TableCell>{item?.administrativeOrderDate?.split('T', 1)}</TableCell>
                        <TableCell>{item?.healthStatus}</TableCell>
                        <TableCell>{item?.isPoliticallyDismissed ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>
                           <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <MartyrsWoundedAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
                        </TableCell>
                        <TableCell>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button variant='outline'>الملاحظات</Button>
                              </PopoverTrigger>
                              <PopoverContent>{item?.note}</PopoverContent>
                           </Popover>
                        </TableCell>
                        <TableCell>
                           <MartyrsWoundedForm title='' data={item} icon={<Settings2 />} variant='ghost' />
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
            <ScrollBar orientation='horizontal' />
         </ScrollArea>
      </div>
   );
};

export default MartyrsWoundedTable;
