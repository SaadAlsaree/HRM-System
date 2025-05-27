'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Settings2, AlignJustify } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IEmployeeEvaluation } from '../page';
import EmployeeEvaluationForm from './employee-evaluatio-form';
import { valuationsService } from '@/services/valuations.service';
import EmployeeEvaluationAttachment from './employee-evaluatio-attachment';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   employeeEvaluationData: IEmployeeEvaluation[];
};

const EmployeeEvaluationTable = ({ employeeEvaluationData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await valuationsService.patchValuation({ id: String(id), statusId: Number(value) });
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
                  <TableCell>
                     <EmployeeEvaluationAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
                  </TableCell>
                  <TableCell>
                     <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <EmployeeEvaluationForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default EmployeeEvaluationTable;
