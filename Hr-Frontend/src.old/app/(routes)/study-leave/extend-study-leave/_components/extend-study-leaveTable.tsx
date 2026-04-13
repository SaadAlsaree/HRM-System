'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IStudyLeaveExtension } from '../page';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   studyLeaveExtensionDetails: IStudyLeaveExtension[];
};

function ExtendStudyLeaveTable({ studyLeaveExtensionDetails, columns }: Props) {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               {columns.map((column) => (
                  <TableHead align='right' key={column.value} className={column.className}>
                     {column.label}
                  </TableHead>
               ))}
            </TableRow>
         </TableHeader>
         <TableBody>
            {studyLeaveExtensionDetails.map((item) => (
               <TableRow key={item.id}>
                  {columns.map((column) => (
                     <TableCell key={column.value}>{item[column.value as keyof IStudyLeaveExtension]}</TableCell>
                  ))}
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
}

export default ExtendStudyLeaveTable;
