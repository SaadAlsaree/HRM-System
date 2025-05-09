'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { AlignJustify, NotepadText, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import AbsencesForm from './absences-form';
import SelectStatus from '@/app/_components/select-status';
import { absencesService } from '@/services/Employee/absences.service';
import { IAbsence } from '../page';
import AbsencesAttachment from './absences-attachment';
import { Button } from '@/components/ui/button';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   absencesData: IAbsence[];
};

const AbsencesTable = ({ absencesData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await absencesService.patchAbsence({ id: id?.toString() || '', statusId: Number(value) });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('Error updating status:', error);
         toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
      }
   };

   return (
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
            {absencesData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.jobCode}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.bookNo}</TableCell>
                  <TableCell>{item.bookDate}</TableCell>
                  <TableCell>{item.absenceDate}</TableCell>
                  <TableCell>{item.statusName}</TableCell>
                  <TableCell>
                     <AbsencesAttachment PrimaryTableId={item.id.toString()} employeeId={item.employeeId} />
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
                     <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <AbsencesForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default AbsencesTable;
