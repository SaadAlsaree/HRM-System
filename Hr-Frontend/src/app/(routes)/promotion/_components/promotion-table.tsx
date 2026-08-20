'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import SelectStatus from '@/app/_components/select-status';
import { GetPromotionViewModel } from '@/types';
import { promotionsService } from '@/services/promotions.service';
import { Button } from '@/components/ui/button';
import PromotionEditDialog from './promotion-edit-dialog';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    promotionData: GetPromotionViewModel[];
};

const PromotionTable = ({ promotionData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await promotionsService.patchPromotion({
                id: String(id) || "",
                statusId: value !== null && value !== undefined ? Number(value) : null
            });
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
                        <AlignJustify className='justify-center' />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {promotionData?.map((item) => (
                    <TableRow key={item?.id}>
                        <TableCell className='text-center'>{item?.jobCode}</TableCell>
                        <TableCell className='text-center'>{item?.fullName}</TableCell>
                        <TableCell className='text-center'>{item?.degreeFromName}</TableCell>
                        <TableCell className='text-center'>{item?.degreeToName}</TableCell>
                        <TableCell className='text-center'>{item?.dueDateDegree ? String(item.dueDateDegree).split('T')[0] : ''}</TableCell>
                        <TableCell className='text-center'>{item?.dueDateCategory ? String(item.dueDateCategory).split('T')[0] : ''}</TableCell>
                        <TableCell className='text-center'>{item?.bookNo}</TableCell>
                        <TableCell className='text-center'>{item?.bookDate ? String(item.bookDate).split('T')[0] : ''}</TableCell>

                        {/* Status Column */}
                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <SelectStatus id={item?.id || ''} status={item?.status?.toString()} onChange={handleStatusChange} />
                            </div>
                        </TableCell>

                        {/* Separate Notes Column */}
                        <TableCell className='text-center'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant='ghost' size='icon' title='عرض الملاحظات'>
                                        <NotepadText className='h-4 w-4' />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className='w-80 text-right'>
                                    <div className='font-semibold text-sm mb-1'>ملاحظات الترقية:</div>
                                    <p className='text-sm text-muted-foreground whitespace-pre-wrap'>{item?.note || "لا توجد ملاحظات"}</p>
                                </PopoverContent>
                            </Popover>
                        </TableCell>

                        {/* Separate Actions Column */}
                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <PromotionEditDialog data={item} />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PromotionTable;
