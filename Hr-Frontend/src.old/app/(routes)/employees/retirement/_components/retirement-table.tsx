'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Settings2 } from 'lucide-react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { IRetirement } from '../page';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { retirementService } from '@/services/retirement.service';
import SelectStatus from '@/app/_components/select-status';
import RetirementAttachment from './retirement-attachment';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import RetirementForm from './retirement-form';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   retirementList: IRetirement[];
};
const RetirementTable = ({ columns, retirementList }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await retirementService.patchRetirement({ id, statusId: value });

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
                  {retirementList?.map((item) => (
                     <TableRow key={item?.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.lotNumber}</TableCell>
                        <TableCell>{item?.statisticalIndex}</TableCell>
                        <TableCell>{item?.academicAchievementName}</TableCell>
                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.directorateName}</TableCell>
                        <TableCell>{item?.subDirectorateName}</TableCell>
                        <TableCell>{item?.jobDegreeName}</TableCell>
                        <TableCell>{item?.jobCategoryName}</TableCell>
                        <TableCell>{item?.jobTitleName}</TableCell>
                        <TableCell>{item?.decisionToFixAge}</TableCell>
                        <TableCell>{item?.endDateOfService}</TableCell>
                        <TableCell>{item?.birthdate}</TableCell>
                        <TableCell>{item?.retirementDate}</TableCell>
                        <TableCell>{item?.administrativeOrderNo}</TableCell>
                        <TableCell>{item?.administrativeOrderDate?.split('T', 1)}</TableCell>
                        <TableCell>{item?.isPoliticallyDismissed ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>
                           <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <RetirementAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
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
                           <RetirementForm title='' data={item} icon={<Settings2 />} variant='ghost' />
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

export default RetirementTable;
