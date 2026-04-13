'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Settings2, Paperclip } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { ITransfer } from '../page';
import TransferForm from './transfer-form';
import { movementsService } from '@/services/movements.service';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    transferData: ITransfer[];
};

const TransferTable = ({ transferData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await movementsService.patchMovement({ id: Number(id) || 0, statusId: Number(value)});
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
                {transferData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.jobCode}</TableCell>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.orderNo}</TableCell>
                        <TableCell>{item.orderDate}</TableCell>
                        <TableCell>{item.typeOfAssignmentId}</TableCell>
                        <TableCell>{item.fromDirectorateId}</TableCell>
                        <TableCell>{item.fromSubDirectorateId}</TableCell>
                        <TableCell>{item.fromDepartmentId}</TableCell>
                        <TableCell>{item.fromSectionId}</TableCell>
                        <TableCell>{item.fromUniteId}</TableCell>
                        <TableCell>{item.toDirectorateId}</TableCell>
                        <TableCell>{item.toSubDirectorateId}</TableCell>
                        <TableCell>{item.toDepartmentId}</TableCell>
                        <TableCell>{item.toSectionId}</TableCell>
                        <TableCell>{item.toUnitId}</TableCell>
                        <TableCell>{item.releaseOrderNo}</TableCell>
                        <TableCell>{item.releaseOrderDate}</TableCell>
                        <TableCell>{item.releaseDate}</TableCell>
                        <TableCell>{item.hireOrderNo}</TableCell>
                        <TableCell>{item.hireOrderDate}</TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <SelectStatus id={item.id} status={item?.status?.toString()} onChange={handleStatusChange} />
                                <TransferForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
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

export default TransferTable;