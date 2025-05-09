import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AttachmentViewer from '@/app/_components/attachments/attachment-viewer';

type Props = {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   data?: any[];
   columns: { label: string; value: string; className?: string }[];
   employeeId: string;
};
const PersonalFileTable = ({ columns, data, employeeId }: Props) => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               {columns.map((column) => (
                  <TableHead align='right' key={column.value} className={column.className}>
                     {column.label}
                  </TableHead>
               ))}
               {/* <TableHead className='w-[100px] text-center'>
               <AlignJustify className='justify-center' />
            </TableHead> */}
            </TableRow>
         </TableHeader>
         <TableBody>
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.tags?.BookTitle}</TableCell>
                  <TableCell>{item?.tags?.BookNo}</TableCell>
                  <TableCell>{item?.tags?.BookDate}</TableCell>
                  <TableCell>
                     <AttachmentViewer AttachmentId={item.attachmentId} employeeId={employeeId as string} />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default PersonalFileTable;
