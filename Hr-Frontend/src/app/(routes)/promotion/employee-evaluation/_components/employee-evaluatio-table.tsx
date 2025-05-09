'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText, Paperclip } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IEmployeeEvaluation } from '../page';
import EmployeeEvaluationForm from './employee-evaluatio-form';
import { valuationsService } from '@/services/valuations.service';
import { Button } from '@/components/ui/button';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   employeeEvaluationData: IEmployeeEvaluation[];
};

const EmployeeEvaluationTable = ({ employeeEvaluationData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await valuationsService.patchValuation({ id: id?.toString() || '0', statusId: Number(value) });
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
            {employeeEvaluationData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.jobCode}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.lotNumber}</TableCell>
                  <TableCell>{item.bookNo}</TableCell>
                  <TableCell>{item.bookDate}</TableCell>
                  <TableCell>{item.recommendation}</TableCell>
                  <TableCell>{item.valuationType}</TableCell>
                  <TableCell>{item.valuationPoints}</TableCell>
                  <TableCell>
                     {item.attachments?.map((attachment, index) => (
                        <a key={index} href={attachment} target='_blank' rel='noopener noreferrer'>
                           <Paperclip className='h-4 w-4' />
                        </a>
                     ))}
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
                     <div className='flex items-center gap-2'>
                        <SelectStatus id={item.id} status={item.statusName} onChange={handleStatusChange} />
                        <EmployeeEvaluationForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default EmployeeEvaluationTable;
