'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Settings2, Paperclip } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IPreviousPosition } from '../page';
import PreviousPositionForm from './previous-position-form';
import { employeePositionService } from '@/services/Employee/employee-position.service';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    previousPositionData: IPreviousPosition[];
};

const PreviousPositionTable = ({ previousPositionData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await employeePositionService.updateEmployeePosition({ id: id as string|| "0", statusId: Number(value) });
            toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
            router.refresh();
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead align='right' key={column.value} className={column.className}>
                            {column.label}
                        </TableHead>
                    ))}
                    <TableHead className='w-[100px] text-center'>
                        <Settings2 className='justify-center' />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {previousPositionData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.jobCode}</TableCell>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.directorateId}</TableCell>
                        <TableCell>{item.subDirectorateId}</TableCell>
                        <TableCell>{item.departmentId}</TableCell>
                        <TableCell>{item.sectionId}</TableCell>
                        <TableCell>{item.unitId}</TableCell>
                        <TableCell>{item.positionId}</TableCell>
                        <TableCell>{item.orderNo}</TableCell>
                        <TableCell>{item.orderDate}</TableCell>
                        <TableCell>{item.assignedOrderNo}</TableCell>
                        <TableCell>{item.assignedOrderDate}</TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                                <PreviousPositionForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                            </div>
                        </TableCell>
                        <TableCell>
                            {item.attachments?.map((attachment, index) => (
                                <a key={index} href={attachment} target='_blank' rel='noopener noreferrer'>
                                    <Paperclip className='h-4 w-4' />
                                </a>
                            ))}
                        </TableCell>
                        <TableCell>{item.note}</TableCell>
                       
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PreviousPositionTable;