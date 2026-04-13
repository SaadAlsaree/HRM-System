'use client';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IStudyFile } from '../page';
import { AlignJustify, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { studyFileService } from '@/services/study-file.service';
import SelectStatus from '@/app/_components/select-status';
import StudyFilesAttachment from './StudyFilesAttachment';
import StudyFilesForm from './StudyFilesForm';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   studyLeavesData: IStudyFile[];
};

const StudyFilesTable = ({ studyLeavesData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await studyFileService.patchStudyFile({ id: id?.toString() || '', statusId: Number(value) });
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
            {studyLeavesData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.id?.split('-')[0]}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.jobCode}</TableCell>
                  <TableCell>{item.documentNo}</TableCell>
                  <TableCell>{item.documentDate}</TableCell>
                  <TableCell>
                     <SelectStatus id={item.id ?? null} status={item.status?.toString() ?? ''} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>{item.notes}</TableCell>
                  <TableCell>
                     <StudyFilesAttachment employeeId={item.employeeId?.toString() || ''} PrimaryTableId={item.id?.toString() || ''} />
                  </TableCell>
                  <TableCell>
                     <StudyFilesForm data={item} title='' icon={<Settings2 className='w-4 h-4' />} variant='ghost' />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default StudyFilesTable;
