'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { ICertificateCalculation } from '../page';
import { leavesService } from '@/services/Leaves/leaves.service';
import CertificateCalculationForm from './certificate-calculation-form';
import { Button } from '@/components/ui/button';
import CertificateCalculationAttachment from './certificate-calculation-attachment';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   certificateCalculationData: ICertificateCalculation[];
};

const CertificateCalculationTable = ({ certificateCalculationData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await leavesService.patchLeave({ id: String(id) || 0, statusId: String(value) });
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
            {certificateCalculationData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.jobCode}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.lotNumber}</TableCell>
                  <TableCell>{item.oldJobTitle}</TableCell>
                  <TableCell>{item.oldDegree}</TableCell>
                  <TableCell>{item.oldCategory}</TableCell>
                  <TableCell>{item.newDegree}</TableCell>
                  <TableCell>{item.newJobTitle}</TableCell>
                  <TableCell>{item.newCategory}</TableCell>
                  <TableCell>{item.degreePlacementDate}</TableCell>
                  <TableCell>{item.categoryPlacementDate}</TableCell>
                  <TableCell>{item.orderNo}</TableCell>
                  <TableCell>{item.orderDate}</TableCell>
                  <TableCell>
                     <CertificateCalculationAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
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
                        <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                        <CertificateCalculationForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default CertificateCalculationTable;
