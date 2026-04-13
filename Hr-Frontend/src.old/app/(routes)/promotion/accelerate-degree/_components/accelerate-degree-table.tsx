'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IAccelerateAchievement } from '../page';
import AccelerateAchievementForm from './accelerate-degree-form';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import AccelerateDegreeAttachment from './accelerate-degree-attachment';
import { changeDegreeService } from '@/services/change-degree.service';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   accelerateAchievementData: IAccelerateAchievement[];
};

const AccelerateAchievementTable = ({ accelerateAchievementData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await changeDegreeService.patchChangeDegree({ id: String(id) || 0, statusId: Number(value) });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('Error updating status:', error);
         toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
      }
   };

   return (
      <ScrollArea className='w-[1380px] whitespace-nowrap '>
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
               {accelerateAchievementData.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.jobCode}</TableCell>
                     <TableCell>{item.fullName}</TableCell>
                     <TableCell>{item.lotNumber}</TableCell>
                     <TableCell>{item.jobTitleFromName}</TableCell>
                     <TableCell>{item.jobDescriptionFromName}</TableCell>
                     <TableCell>{item.jobDegreeFromName}</TableCell>
                     <TableCell>{item.jobCategoryFromName}</TableCell>
                     <TableCell>{item.oldDegreeDueDate}</TableCell>
                     <TableCell>{item.oldCategoryDueDate}</TableCell>
                     <TableCell>{item.jobDegreeToName}</TableCell>
                     <TableCell>{item.jobTitleToName}</TableCell>
                     <TableCell>{item.jobDescriptionToName}</TableCell>
                     <TableCell>{item.jobCategoryToName}</TableCell>
                     <TableCell>{item.newDegreeDueDate}</TableCell>
                     <TableCell>{item.newCategoryDueDate}</TableCell>
                     <TableCell>{item.orderNo}</TableCell>
                     <TableCell>{item.orderDate}</TableCell>
                     <TableCell>
                        <AccelerateDegreeAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
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
                        <SelectStatus id={item.id} status={item.status} onChange={handleStatusChange} />
                     </TableCell>
                     <TableCell>
                        <AccelerateAchievementForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <ScrollBar orientation='horizontal' />
      </ScrollArea>
   );
};

export default AccelerateAchievementTable;
