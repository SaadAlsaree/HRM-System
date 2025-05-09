'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IDisciplinaryDetails } from '../page';
import { AlignJustify, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { employeeDisciplinary } from '@/services/Employee/employee-disciplinary.service';
import { useRouter } from 'next/navigation';
import SelectStatus from '@/app/_components/select-status';
import AdministrativePenaltiesAttachment from '../../profile/_components/administrative-penalties/administrative-penalties-attachment';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import PenaltiesForm from './penalties-form';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   disciplinaryDetails: IDisciplinaryDetails[];
};
const PenaltiesTable = ({ columns, disciplinaryDetails }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await employeeDisciplinary.patchEmployeeDisciplinary({ id, statusId: value });

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
                  {disciplinaryDetails?.map((item) => (
                     <TableRow key={item?.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.titleOfBook}</TableCell>
                        <TableCell>{item?.typeOfDisciplinaryName}</TableCell>
                        <TableCell>{item?.countOfDayDelay}</TableCell>
                        <TableCell>{item?.bookNo}</TableCell>
                        <TableCell>{item?.bookDate}</TableCell>
                        <TableCell>{item?.disciplinaryLaw}</TableCell>
                        <TableCell>
                           <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>{item?.stopPromotion ? 'جارية' : 'ملغاة'}</TableCell>
                        <TableCell>{item?.reason || 'لا يوجد'}</TableCell>
                        <TableCell>
                           <AdministrativePenaltiesAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
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
                           <PenaltiesForm title='' data={item} icon={<Settings2 />} variant='ghost' />
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

export default PenaltiesTable;
