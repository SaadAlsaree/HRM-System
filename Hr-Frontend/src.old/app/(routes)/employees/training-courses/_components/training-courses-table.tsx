'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Settings2 } from 'lucide-react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ICourse } from '../page';
import TrainingCoursesAttachment from './training-courses-attachment';
import TrainingCoursesForm from './training-courses-form';
import moment from 'moment';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   courseList: ICourse[];
};
const TrainingCoursesTable = ({ columns, courseList }: Props) => {
   return (
      <div>
         <ScrollArea className='w-[1380px] whitespace-nowrap '>
            <Table>
               <TableHeader>
                  <TableRow>
                     {columns.map((column) => (
                        <TableHead key={column.value} className={column.className}>
                           {column.label}
                        </TableHead>
                     ))}
                     <TableHead className='w-[100px] text-center'>
                        <AlignJustify className='justify-center' />
                     </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {courseList?.map((item) => (
                     <TableRow key={item?.id}>
                        <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                        <TableCell>{item?.fullName}</TableCell>
                        <TableCell>{item?.lotNumber}</TableCell>
                        <TableCell>{item?.jobCode}</TableCell>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell>{item?.place}</TableCell>
                        <TableCell>{item?.residentEntity}</TableCell>
                        <TableCell>{item?.courseOrderNo}</TableCell>
                        <TableCell>{moment(item?.courseOrderDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.courseDurationInDays}</TableCell>
                        <TableCell>{moment(item?.startDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{moment(item?.endDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{item?.evaluation}</TableCell>
                        <TableCell>
                           <TrainingCoursesAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
                        </TableCell>
                        <TableCell>
                           <TrainingCoursesForm title='' data={item} icon={<Settings2 />} variant='ghost' />
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

export default TrainingCoursesTable;
