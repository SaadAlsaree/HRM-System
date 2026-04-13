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
   employeeId: string;
};
const AcademicAchievementTable = ({ employeeId }: Props) => {
   const [academicAchievements, setAcademicAchievements] = useState<IEducationInfo[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchAcademicAchievements = async () => {
         setLoading(true);
         try {
            const response = await educationInfoService.getEducationInfo({ employeeId });
            setAcademicAchievements(response?.data?.items || []);
            setTotalPages(response?.data?.totalCount);
         } catch (error) {
            console.error('Error fetching promotions:', error);
            setError('Failed to fetch promotions');
         } finally {
            setLoading(false);
         }
      };
      fetchAcademicAchievements();
   }, [employeeId]);

   if (totalPages === 0)
      return (
         <div>
            <div>لايوجد بيانات !</div>
         </div>
      );

   if (error) return <div>حدث خطأ أثناء تحميل البيانات !</div>;

   if (loading) return <div>جاري التحميل...</div>;

   return (
      <div className='border rounded-lg p-2 bg-white dark:bg-gray-900'>
         <ScrollArea className='w-[1380px] whitespace-nowrap '>
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
                  {academicAchievements?.map((item) => (
                     <TableRow key={item.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>

                        <TableCell>{item?.countryName}</TableCell>
                        <TableCell>{item?.originalDocument}</TableCell>
                        <TableCell>{item?.documentNo}</TableCell>
                        <TableCell>{moment(item?.documentDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.documentSender}</TableCell>
                        <TableCell>{moment(item?.documentSendDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.academicAchievementName}</TableCell>
                        <TableCell>{item?.academicFieldName}</TableCell>
                        <TableCell>{item?.preciseAcademicFieldName}</TableCell>
                        <TableCell>{item?.graduationYear}</TableCell>
                        <TableCell>{item?.studyTypeName}</TableCell>
                        <TableCell>{moment(item.startDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{moment(item.endDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.isDuringRecruitment ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>{item?.isDocumentVerify ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>{item?.notes}</TableCell>
                        <TableCell>
                           
                           <AcademicAchievementAttachment PrimaryTableId={item.id as string} employeeId={employeeId as string} />
                        </TableCell>
                        <TableCell>
                           <AcademicAchievementForm title='' icon={<Edit2 className='h-4 w-4' />} data={item} variant='ghost' />
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
