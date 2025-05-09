'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IStudyLeave } from '../page';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    studyLeavesData: IStudyLeave[];
};

const StudyLeaveTable = ({ studyLeavesData, columns }: Props) => {
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
                {studyLeavesData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.employeeFullName}</TableCell>
                        <TableCell>{item.studyPeriodTime}</TableCell>
                        <TableCell>{item.releaseOrderDate}</TableCell>
                        <TableCell>{item.hireDate}</TableCell>
                        <TableCell>{item.remainingDays}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default StudyLeaveTable;