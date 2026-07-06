'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Edit2 } from 'lucide-react';

import AnnualAllowanceFormDialog from './annual-allowance-form-dialog';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    annualAllowanceData: any[];
};

const AnnualAllowanceTable = ({ annualAllowanceData, columns }: Props) => {
  

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead align='right' key={column.value} className={column.className}>
                            {column.label}
                        </TableHead>
                    ))}
                    <TableHead className='w-[150px] text-center'>
                        <AlignJustify className='justify-center' />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {annualAllowanceData?.map((item) => (
                    <TableRow key={item?.id}>
                        <TableCell className='text-center'>{item?.employeeId}</TableCell>
                        <TableCell className='text-center'>{item?.dueDate?.split('T')[0]}</TableCell>
                        <TableCell className='text-center'>{item?.implementationDate?.split('T')[0]}</TableCell>
                        <TableCell className='text-center'>{item?.administrativeOrderNo}</TableCell>
                        <TableCell className='text-center'>{item?.administrativeOrderDate?.split('T')[0]}</TableCell>
                        <TableCell className='text-center'>{item?.reasonForAmendment}</TableCell>
                        <TableCell className='text-center'>{item?.statusName}</TableCell>
                        
                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <AnnualAllowanceFormDialog
                                    title="تعديل"
                                    icon={<Edit2 className="h-4 w-4" />}
                                    data={item}
                                    variant="ghost"
                                />
                                {/* <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                </Button> */}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
                {annualAllowanceData.length === 0 && (
                    <TableRow>
                        <TableCell colSpan={columns.length + 1} className="text-center h-24 text-muted-foreground">
                            لا توجد بيانات متاحة
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default AnnualAllowanceTable;
