'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { AlignJustify, NotepadText, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import SelectStatus from '@/app/_components/select-status';
import { GetPromotionViewModel } from '@/types';
import { promotionsService } from '@/services/promotions.service';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    columns: { label: string; value: string; className?: string }[];
    promotionData: GetPromotionViewModel[];
};

const PromotionTable = ({ promotionData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await promotionsService.patchPromotion({ id: String(id) || "", statusId: String(value) });
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
                        <TableCell className='text-center'>{item?.dueDateDegree}</TableCell>
                        <TableCell className='text-center'>{item?.dueDateCategory}</TableCell>
                        <TableCell className='text-center'>{item?.bookNo}</TableCell>
                        <TableCell className='text-center'>{item?.bookDate}</TableCell>

                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <SelectStatus id={item?.id || ''} status={item?.status?.toString()} onChange={handleStatusChange} />
                            </div>
                        </TableCell>
                        <TableCell className='text-center'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant='ghost' size='icon'>
                                            <NotepadText className='h-4 w-4' />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <pre>{item?.note || "لا توجد ملاحظات"}</pre>
                                    </PopoverContent>
                                </Popover>
                                <Button variant='ghost' size='icon' asChild>
                                    <Link href={`/promotion/${item.id}`}>
                                        <Settings2 className='h-4 w-4' />
                                    </Link>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PromotionTable;
