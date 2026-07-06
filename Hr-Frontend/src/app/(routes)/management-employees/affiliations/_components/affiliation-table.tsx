'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RotateCcw, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IAffiliation } from '../page';
import AffiliationForm from './affiliation-form';
import { affiliationService } from '@/services/affiliation.service';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';
import { Status } from '@/types/enums';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    affiliationsData: IAffiliation[];
};

const AffiliationsTable = ({ affiliationsData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await affiliationService.patchAffiliation({ id: id?.toString() || "0", statusId: Number(value), tableName: 0 as unknown as Status });
            toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
            router.refresh();
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
        }
    };

    const handleRenew = async (id: string) => {
        try {
            const response = await affiliationService.renewAffiliation(id);
            toast.success(response?.message || 'تم تجديد الانتساب بنجاح.');
            router.refresh();
        } catch (error) {
            console.error('Error renewing affiliation:', error);
            toast.error('فشل في تجديد الانتساب. يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <ScrollArea className="w-[1400px]">
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
                {affiliationsData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.jobCode}</TableCell>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.originalEntity}</TableCell>
                        <TableCell>{item.reasonForJoining}</TableCell>
                        <TableCell>{item.fromDate}</TableCell>
                        <TableCell>{item.toDate}</TableCell>
                        <TableCell>{item.typeOfAssignmentName}</TableCell>
                        <TableCell>{item.durationMonths}</TableCell>
                        <TableCell>{item.renewalsCount}</TableCell>
                        <TableCell>{item.orderNo}</TableCell>
                        <TableCell>{item.orderDate}</TableCell>
                        <TableCell>{item.note}</TableCell>
                        <TableCell>
                            <SelectStatus id={item.id?.toString() || "0"} status={item.status?.toString() || "0"} onChange={handleStatusChange} />
                        </TableCell>
                        <TableCell className="flex gap-1">
                            <AffiliationForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                            <Button variant='ghost' size='icon' onClick={() => handleRenew(item.id ?? '')}>
                                <RotateCcw className='h-4 w-4' />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

export default AffiliationsTable;
