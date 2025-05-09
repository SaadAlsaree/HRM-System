'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IResignation } from '../page';
import { AlignJustify, Settings2 } from 'lucide-react';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';
import SelectStatus from '@/app/_components/select-status';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import ResignationsForm from './resignations-form';
import ResignationsAttachment from './resignations-attachment';
import { resignationService } from '@/services/resignation.service';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   resignationList: IResignation[];
};
const ResignationsTable = ({ columns, resignationList }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await resignationService.patchResignation({ id, statusId: value });

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
                  {resignationList?.map((item) => (
                     <TableRow key={item?.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.lotNumber}</TableCell>
                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.requestNo}</TableCell>
                        <TableCell>{item?.requestDate?.split('T', 1)}</TableCell>
                        <TableCell>{item?.resignationOrderNo}</TableCell>
                        <TableCell>{item?.resignationOrderDate?.split('T', 1)}</TableCell>
                        <TableCell>{item?.separationOrderNo}</TableCell>
                        <TableCell>{item?.separationOrderDate?.split('T', 1)}</TableCell>
                        <TableCell>{item?.reason}</TableCell>
                        <TableCell>
                           <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <ResignationsAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
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
                           <ResignationsForm title='' data={item} icon={<Settings2 />} variant='ghost' />
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

export default ResignationsTable;
