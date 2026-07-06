'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CalculationDetailsDialog from '../../_shared/calculation-details-dialog';

import type { PromotionReportItem } from '../page';

type Props = {
  columns: { label: string; value: string; className?: string }[];
  data: PromotionReportItem[];
};

const ReportTable = ({ columns, data }: Props) => {
  return (
    <div className='w-full'>
      <ScrollArea className='w-[1450px] whitespace-nowrap rounded-md border'>
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
            {data.map((item) => (
              <TableRow key={item.id}>
                {columns.map((column) => {
                  if (column.value === 'actions') {
                    return (
                      <TableCell key={column.value}>
                        <CalculationDetailsDialog
                          employeeId={item.employeeId}
                          employeeName={item.fullName}
                        />
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={column.value}>
                      {item[column.value] ?? '-'}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
};

export default ReportTable;
