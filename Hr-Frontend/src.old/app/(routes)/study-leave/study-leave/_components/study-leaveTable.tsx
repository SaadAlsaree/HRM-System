// src/app/(routes)/study-leave/study-leave/_components/study-leaveTable.tsx
'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { AlignJustify, Settings2 } from 'lucide-react';
import { IStudyLeave } from '../page';
import { studyLeaveService } from '@/services/study-leave.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import SelectStatus from '@/app/_components/select-status';
import StudyLeaveForm from './study-leaveForm';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   studyLeavesData: IStudyLeave[];
   academicAchievement: [];
   academicField: [];
   country: [];
   studyResult: [];
   studyStatus: [];
   academicCertificateType: [];
};

function StudyLeaveTable({
   studyLeavesData,
   columns,
   academicAchievement,
   academicField,
   country,
   studyResult,
   studyStatus,
   academicCertificateType
}: Props) {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await studyLeaveService.patchStudyLeave({ id: id?.toString() || '', statusId: Number(value) });
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
               {studyLeavesData.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.id?.split('-')[0]}</TableCell>
                     <TableCell>{item.fullName}</TableCell>
                     <TableCell>{item.studyFileDocumentNo}</TableCell>
                     <TableCell>{item.academicCertificateTypeName}</TableCell>
                     <TableCell>{item.academicAchievementName}</TableCell>
                     <TableCell>{item.studyResultName}</TableCell>
                     <TableCell>{item.studyStatusName}</TableCell>
                     <TableCell>{item.academicFieldName}</TableCell>
                     <TableCell>{item.studyPeriodTime}</TableCell>
                     <TableCell>{item.acceptanceYear}</TableCell>
                     <TableCell>{item.nameOfIssuingCertificate}</TableCell>
                     <TableCell>{item.academicFieldName}</TableCell>
                     <TableCell>{item.releaseOrderNo}</TableCell>
                     <TableCell>{item.releaseOrderDate?.split('T')[0]}</TableCell>
                     <TableCell>{item.releaseDate?.split('T')[0]}</TableCell>
                     <TableCell>{item.hireOrderNo}</TableCell>
                     <TableCell>{item.hireOrderDate?.split('T')[0]}</TableCell>
                     <TableCell>{item.hireDate?.split('T')[0]}</TableCell>
                     <TableCell>{item.financialInsuranceNo}</TableCell>
                     <TableCell>{item.financialInsuranceDate?.split('T')[0]}</TableCell>
                     <TableCell>{item.countryName}</TableCell>
                     <TableCell>
                        <SelectStatus id={item.id ?? null} status={item.status?.toString() ?? ''} onChange={handleStatusChange} />
                     </TableCell>

                     <TableCell>{item.notes}</TableCell>
                     <TableCell>
                        {/* <StudyFilesAttachment employeeId={item.employeeId?.toString() || ''} PrimaryTableId={item.id?.toString() || ''} /> */}
                     </TableCell>
                     <TableCell>
                        <StudyLeaveForm
                           data={item}
                           title=''
                           icon={<Settings2 className='w-4 h-4' />}
                           variant='ghost'
                           academicAchievement={academicAchievement}
                           academicField={academicField}
                           country={country}
                           studyResult={studyResult}
                           studyStatus={studyStatus}
                           academicCertificateType={academicCertificateType}
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <ScrollBar orientation='horizontal' />
      </ScrollArea>
   );
}

export default StudyLeaveTable;
