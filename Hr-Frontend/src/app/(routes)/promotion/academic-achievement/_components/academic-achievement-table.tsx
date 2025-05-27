'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IAcademicAchievement } from '../page';
import AccelerateAchievementForm from './academic-achievement-form';
import { Button } from '@/components/ui/button';
import { AcademicCertificateType } from '@/types';
import AcademicAchievementAttachment from './academic-achievement-attachment';
import { correctingAcademicAchievementService } from '@/services/correcting-academic-achievement.service';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   academicAchievementData: IAcademicAchievement[];
   academicCertificateType: AcademicCertificateType[];
};

const AcademicAchievementTable = ({ academicAchievementData, columns, academicCertificateType }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await correctingAcademicAchievementService.patchCorrectingAcademicAchievement({
            id: String(id) || '',
            statusId: Number(value)
         });
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
               {academicAchievementData.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.jobCode}</TableCell>
                     <TableCell>{item.fullName}</TableCell>
                     <TableCell>{item.lotNumber}</TableCell>
                     <TableCell>{item.jobTitleFromName}</TableCell>
                     <TableCell>{item.degreeFromName}</TableCell>
                     <TableCell>{item.jobCategoryFromName}</TableCell>
                     <TableCell>{item.jobDescriptionFromName}</TableCell>
                     <TableCell>{item.degreeToName}</TableCell>
                     <TableCell>{item.dueDateDegree}</TableCell>
                     <TableCell>{item.dueDateCategory}</TableCell>
                     <TableCell>{item.jobTitleToName}</TableCell>
                     <TableCell>{item.jobCategoryToName}</TableCell>
                     <TableCell>{item.bookNo}</TableCell>
                     <TableCell>{item.bookDate}</TableCell>
                     <TableCell>
                        <AcademicAchievementAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
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
                           <SelectStatus id={item.id} status={item.status} onChange={handleStatusChange} />
                        </div>
                     </TableCell>
                     <TableCell>
                        <AccelerateAchievementForm
                           academicCertificateType={academicCertificateType}
                           title=''
                           icon={<Settings2 className='h-4 w-4' />}
                           data={item}
                           variant='ghost'
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <ScrollBar orientation='horizontal' />
      </ScrollArea>
   );
};

export default AcademicAchievementTable;
