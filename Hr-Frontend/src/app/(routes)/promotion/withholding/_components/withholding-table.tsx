'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import WithholdingFormDialog from './withholding-form-dialog';
import { promotionWithholdingService } from '@/services/promotion-withholding.service';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    withholdingData: any[];
};

const WithholdingTable = ({ withholdingData, columns }: Props) => {
    const router = useRouter();

    const handleDelete = async (id: string) => {
        if (!confirm('هل أنت متأكد من حذف هذا الحجب؟')) return;

        try {
            const res = await promotionWithholdingService.deleteWithholding(id);
            if (res?.succeeded) {
                toast.success('تم الحذف بنجاح.');
                router.refresh();
            } else {
                toast.error(res?.message || 'فشل في الحذف.');
            }
        } catch (error) {
            console.error(error);
            toast.error('حدث خطأ أثناء الاتصال بالخادم.');
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
                    <TableHead className='w-[150px] text-center'>
                        <AlignJustify className='justify-center' />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {withholdingData?.map((item) => (
                    <TableRow key={item?.id}>
                        <TableCell className='text-center'>{item?.employeeId}</TableCell>
                        <TableCell className='text-center'>{item?.scheduledPromotionDate?.split('T')[0]}</TableCell>
                        <TableCell className='text-center'>{item?.withholdingDate?.split('T')[0]}</TableCell>
                        <TableCell className='text-center'>{item?.reasonForWithholding}</TableCell>
                        <TableCell className='text-center'>{item?.notes}</TableCell>
                        
                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <WithholdingFormDialog
                                    title="تعديل"
                                    icon={<Edit2 className="h-4 w-4" />}
                                    data={item}
                                    variant="ghost"
                                />
                                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
                {withholdingData.length === 0 && (
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

export default WithholdingTable;
