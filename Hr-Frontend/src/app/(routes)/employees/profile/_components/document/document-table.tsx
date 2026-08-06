'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { IEmployeeDocument } from '.';
import { documentService } from '@/services/document.service';
import SelectStatus from '@/app/_components/select-status';
import DocumentAttachment from './document-attachment';
import moment from 'moment';
import { Eye, NotepadText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Props = {
   data?: IEmployeeDocument[];
   columns: { label: string; value: string; className?: string }[];
};

const DocumentTable = ({ columns, data }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await documentService.patchDocument({ id, statusId: value });
         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('error updating status', error);
         toast.error('حدث خطأ أثناء تحديث الحالة.');
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
            </TableRow>
         </TableHeader>
         <TableBody>
            {(!data || data.length === 0) && (
               <TableRow>
                  <TableCell colSpan={columns.length} className='text-center py-6 text-muted-foreground'>
                     لا توجد مستمسكات مسجلة
                  </TableCell>
               </TableRow>
            )}
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                  <TableCell>{item?.employeeDocumentTypeName}</TableCell>
                  <TableCell>{item?.createdAt ? moment(item?.createdAt).format('YYYY-MM-DD') : '----'}</TableCell>

                  <TableCell>
                     <SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='outline' className='text-muted-foreground hover:text-primary text-xl font-bold'>
                              <Eye className='h-4 w-4' />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                           <div className='space-y-1'>
                              <h4 className='text-sm font-medium leading-none'>المعلومات النصية</h4>
                           </div>
                           <Separator className='my-4' />
                           {(!item?.documentAttribute || item.documentAttribute.length === 0) && (
                              <p className='text-xs text-muted-foreground'>لا توجد معلومات إضافية</p>
                           )}
                           {item?.documentAttribute?.map((x: { Key: string; Value: string }) => (
                              <div key={x.Key} className='py-1 space-y-1'>
                                 <div className='flex justify-between items-center text-sm'>
                                    <span className='font-medium text-muted-foreground'>{x?.Key}:</span>
                                    <span>{x?.Value}</span>
                                 </div>
                              </div>
                           ))}
                        </PopoverContent>
                     </Popover>
                  </TableCell>
                  <TableCell>
                     <DocumentAttachment PrimaryTableId={item?.id as string} employeeId={item?.employeeId as string} />
                  </TableCell>
                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='outline' className='text-muted-foreground hover:text-primary text-xl font-bold'>
                              <NotepadText className='h-4 w-4' />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>{item?.note ?? 'لا توجد ملاحظات'}</PopoverContent>
                     </Popover>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default DocumentTable;
