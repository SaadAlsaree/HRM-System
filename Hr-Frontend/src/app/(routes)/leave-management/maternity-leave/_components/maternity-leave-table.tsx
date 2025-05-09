'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'; // Import ScrollArea
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import MaternityLeaveForm from './maternity-leave-form';
import SelectStatus from '@/app/_components/select-status';
import { IMaternityLeave } from '@/app/(routes)/leave-management/maternity-leave/page';
import { leavesService } from '@/services/Leaves/leaves.service';
import MaternityLeaveAttachment from './maternity-leave-attachment';
import moment from 'moment';
import { Button } from '@/components/ui/button';
// import { IMaternityLeave } from './page';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   maternityLeaveData: IMaternityLeave[];
};

const MaternityLeaveTable = ({ maternityLeaveData, columns }: Props) => {
   const router = useRouter();

   console.log(maternityLeaveData);

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await leavesService.patchLeave({ id: Number(id) || 0, statusId: Number(value) });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('Error updating status:', error);
         toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
      }
   };

   return (
      <ScrollArea className='w-full whitespace-nowrap rounded-md border'>
         <div className='w-max min-w-full'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columns.map((column) => (
                        <TableHead align='right' key={column.value} className={column.className}>
                           {column.label}
                        </TableHead>
                     ))}
                     <TableHead className='w-[100px] text-center'>
                        <AlignJustify className='justify-center' />
                     </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {maternityLeaveData.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item.id.split('-')[0].toUpperCase()}</TableCell>
                        <TableCell>{item.jobCode}</TableCell>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.orderNo}</TableCell>
                        <TableCell>{item.orderDate}</TableCell>
                        <TableCell>{item.noOfBirthCertificate}</TableCell>
                        <TableCell>{moment(item.dateOfBirthCertificate).format('DD/MM/YYYY')}</TableCell>
                        <TableCell>{moment(item.fromDate).format('DD/MM/YYYY')}</TableCell>
                        <TableCell>{moment(item.toDate).format('DD/MM/YYYY')}</TableCell>
                        <TableCell>{item.countOfDays}</TableCell>
                        <TableCell>{item.remainingBalance}</TableCell>
                        <TableCell>
                           <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <MaternityLeaveAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
                        </TableCell>
                        <TableCell>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button variant='ghost' size='icon'>
                                    <NotepadText className='justify-center' />
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                 <pre>{item?.note}</pre>
                              </PopoverContent>
                           </Popover>
                        </TableCell>

                        <TableCell>
                           <MaternityLeaveForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
         <ScrollBar orientation='horizontal' />
      </ScrollArea>
   );
};

export default MaternityLeaveTable;
