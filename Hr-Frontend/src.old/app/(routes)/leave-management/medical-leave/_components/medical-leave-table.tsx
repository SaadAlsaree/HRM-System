'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IMedicalLeave } from '../page';
import { leavesService } from '@/services/Leaves/leaves.service';
import MedicalLeaveForm from './medical-leave-form';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import MedicalLeaveAttachment from './medical-leave-attachment';
import { Button } from '@/components/ui/button';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   medicalLeaveData: IMedicalLeave[];
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   siknesTypesData: any[];
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   countryData: any[];
};

const MedicalLeaveTable = ({ medicalLeaveData, columns, countryData, siknesTypesData }: Props) => {
   const router = useRouter();

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
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-[1380px] whitespace-nowrap '>
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
                  {medicalLeaveData?.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>

                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.sicknessTypeName}</TableCell>
                        <TableCell>{item?.country}</TableCell>
                        <TableCell>{item?.orderNo}</TableCell>
                        <TableCell>{item?.orderDate}</TableCell>
                        <TableCell>{item?.noOfAssignment}</TableCell>
                        <TableCell>{item?.dateOfAssignment}</TableCell>
                        <TableCell>{item?.fromDate}</TableCell>
                        <TableCell>{item?.toDate}</TableCell>
                        <TableCell>{item?.countOfDays}</TableCell>
                        <TableCell>{item?.totalRemainingBalance}</TableCell>
                        <TableCell>
                           <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell>
                           <MedicalLeaveAttachment PrimaryTableId={item.id} employeeId={item.employeeId} />
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
                           <MedicalLeaveForm
                              title='تعديل'
                              data={item}
                              icon={<Settings2 />}
                              variant='ghost'
                              countryData={countryData}
                              siknesTypesData={siknesTypesData}
                           />
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

export default MedicalLeaveTable;
