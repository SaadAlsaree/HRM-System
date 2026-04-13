'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { ISpecialMedicalLeave } from '../page';
import { leavesService } from '@/services/Leaves/leaves.service';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import SpecialMedicalLeaveForm from './special-medical-leave-form';
import SpecialMedicalLeaveAttachments from './special-medical-leave-attachments';
import moment from 'moment';
import { Button } from '@/components/ui/button';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   specialMedicalLeaveData: ISpecialMedicalLeave[];
};

const SpecialMedicalLeaveTable = ({ specialMedicalLeaveData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await leavesService.patchLeave({ id: String(id) || 0, statusId: Number(value) });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('Error updating status:', error);
         toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
      }
   };

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-[1380px] whitespace-nowrap'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columns?.map((column) => (
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
                  {specialMedicalLeaveData?.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.orderNo}</TableCell>
                        <TableCell>{moment(item?.orderDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{moment(item?.fromDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{moment(item?.toDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.noOfRelease || '-'}</TableCell>
                        <TableCell>{moment(item?.dateOfRelease).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{moment(item?.releaseDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.countOfDays}</TableCell>
                        <TableCell>
                           <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <SpecialMedicalLeaveAttachments PrimaryTableId={item.id} employeeId={item.employeeId} />
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
                           <SpecialMedicalLeaveForm title='' data={item} icon={<Settings2 />} variant='ghost' />
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

export default SpecialMedicalLeaveTable;
