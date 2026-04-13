'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Settings2, Paperclip } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IDocumentVerification } from '../page';
import { documentVerificationService } from '@/services/document-verification.service';
import DocumentVerificationForm from './issue-validation-form';


type Props = {
    columns: { label: string; value: string; className?: string }[];
    documentVerificationData: IDocumentVerification[];
};

const DocumentVerificationTable = ({ documentVerificationData, columns }: Props) => {
    const router = useRouter();

    const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
        try {
            const response = await documentVerificationService.patchDocumentVerification({ id: id?.toString() || '', statusId: Number(value), tableName: 1 });
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
                {documentVerificationData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.documentNumber}</TableCell>
                        <TableCell>{item.documentDate}</TableCell>
                        <TableCell>{item.recipient}</TableCell>
                        <TableCell>{item.answered ? 'نعم' : 'لا'}</TableCell>
                        <TableCell>{item.sendingDate}</TableCell>
                        <TableCell>{item.statusName}</TableCell>
                        <TableCell>
                            {item.attachments?.map((attachment, index) => (
                                <a key={index} href={attachment} target='_blank' rel='noopener noreferrer'>
                                    <Paperclip className='h-4 w-4' />
                                </a>
                            ))}
                        </TableCell>
                        <TableCell>{item.note}</TableCell>
                        <TableCell>
                            <div className='flex items-center gap-2'>
                                <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                                <DocumentVerificationForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DocumentVerificationTable;