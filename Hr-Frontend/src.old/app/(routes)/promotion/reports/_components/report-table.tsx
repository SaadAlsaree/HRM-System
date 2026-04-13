'use client';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type Props = {
   columns: { label: string; value: string; className?: string }[];
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   data: any[];
}
const ReportTable = ({ columns, data }: Props) => {
  return (
  <div className="w-full">
      <ScrollArea className="w-[1400px] whitespace-nowrap rounded-md border">
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.jobCode}</TableCell>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.lotNumber}</TableCell>
              <TableCell>{item.oldJobTitleName}</TableCell>
              <TableCell>{item.newJobTitleName}</TableCell>
              <TableCell>{item.oldJobDescriptionName}</TableCell>
              <TableCell>{item.newJobDescriptionName}</TableCell>
              <TableCell>{item.orderNo}</TableCell>
              <TableCell>{item.orderDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
      </ScrollArea>
  </div>
  )
}

export default ReportTable