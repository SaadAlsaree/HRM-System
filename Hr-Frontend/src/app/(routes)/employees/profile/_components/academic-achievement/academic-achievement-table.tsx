'use client';
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { educationInfoService } from '@/services/education-info.service';
import { columnsEducationInfo } from './columns';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import moment from 'moment';
import AcademicAchievementAttachment from './academic-achievement-attachment';
import { AlignJustify, Edit2 } from 'lucide-react';
import AcademicAchievementForm from './academic-achievement-form';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

export interface IEducationInfo {
   id?: string;
   employeeId?: string;
   fullName?: string;
   jobCode?: string;
   lotNumber?: string;
   statusName?: string;
   status?: number;
   originalDocument?: string;
   documentNo?: string;
   documentDate?: string;
   documentSender?: string;
   documentSendDate?: string;
   academicAchievementName?: string;
   academicFieldName?: string;
   preciseAcademicFieldName?: string;
   nameOfIssuingCertificate?: string;
   startDate?: string;
   endDate?: string;
   graduationYear?: string;
   isDuringRecruitment?: boolean;
   isDocumentVerify?: boolean;
   countryName?: string;
   studyTypeName?: string;
   notes?: string;
}

type Props = {
   employeeId?: string;
};

const AcademicAchievementTable = ({ employeeId }: Props) => {
   const [academicAchievements, setAcademicAchievements] = useState<IEducationInfo[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const { refreshKey } = useEmployeeProfileRefresh();

   useEffect(() => {
      const fetchAcademicAchievements = async () => {
         if (!employeeId) {
            setAcademicAchievements([]);
            return;
         }
         setLoading(true);
         try {
            const response = await educationInfoService.getEducationInfo({ employeeId });
            setAcademicAchievements(response?.data?.items || []);
            setError(null);
         } catch (err) {
            console.error('Error fetching academic achievements:', err);
            setError('حدث خطأ أثناء تحميل البيانات !');
         } finally {
            setLoading(false);
         }
      };
      fetchAcademicAchievements();
   }, [employeeId, refreshKey]);

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-full whitespace-nowrap'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columnsEducationInfo?.map((column) => (
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
                  {loading && (
                     <TableRow>
                        <TableCell colSpan={(columnsEducationInfo?.length || 0) + 1} className='text-center py-6 text-muted-foreground'>
                           جاري التحميل...
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && error && (
                     <TableRow>
                        <TableCell colSpan={(columnsEducationInfo?.length || 0) + 1} className='text-center py-6 text-red-500'>
                           {error}
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && !error && academicAchievements.length === 0 && (
                     <TableRow>
                        <TableCell colSpan={(columnsEducationInfo?.length || 0) + 1} className='text-center py-6 text-muted-foreground'>
                           لا توجد بيانات مؤهلات علمية
                        </TableCell>
                     </TableRow>
                  )}
                  {!loading && !error && academicAchievements.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.countryName || '-'}</TableCell>
                        <TableCell>{item?.originalDocument || '-'}</TableCell>
                        <TableCell>{item?.documentNo || '-'}</TableCell>
                        <TableCell>{item?.documentDate ? moment(item?.documentDate).format('YYYY-MM-DD') : '-'}</TableCell>
                        <TableCell>{item?.documentSender || '-'}</TableCell>
                        <TableCell>{item?.documentSendDate ? moment(item?.documentSendDate).format('YYYY-MM-DD') : '-'}</TableCell>
                        <TableCell>{item?.academicAchievementName || '-'}</TableCell>
                        <TableCell>{item?.academicFieldName || '-'}</TableCell>
                        <TableCell>{item?.preciseAcademicFieldName || '-'}</TableCell>
                        <TableCell>{item?.graduationYear || '-'}</TableCell>
                        <TableCell>{item?.studyTypeName || '-'}</TableCell>
                        <TableCell>{item?.startDate ? moment(item.startDate).format('YYYY-MM-DD') : '-'}</TableCell>
                        <TableCell>{item?.endDate ? moment(item.endDate).format('YYYY-MM-DD') : '-'}</TableCell>
                        <TableCell>{item?.isDuringRecruitment ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>{item?.isDocumentVerify ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>{item?.notes || '-'}</TableCell>
                        <TableCell>
                           <AcademicAchievementAttachment PrimaryTableId={item.id as string} employeeId={(item.employeeId || employeeId) as string} />
                        </TableCell>
                        <TableCell>
                           <AcademicAchievementForm title='' icon={<Edit2 className='h-4 w-4' />} data={item} variant='ghost' employeeId={(item.employeeId || employeeId) as string} />
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

export default AcademicAchievementTable;
