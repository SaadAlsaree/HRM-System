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
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await documentService.patchDocument({ id, statusId: value });

         toast(
            <pre className=' w-[340px] rounded-md'>
               <h1 className='text-xl'>{response?.message}</h1>
            </pre>
         );
         router.refresh();
      } catch (error) {
         console.log('error', error);
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
               {/* <TableHead className='w-[100px] text-center'>
                  <AlignJustify className='justify-center' />
               </TableHead> */}
            </TableRow>
         </TableHeader>
         <TableBody>
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>

                  <TableCell>{item?.employeeDocumentTypeName}</TableCell>
                  <TableCell>{moment(item?.createdAt).format('YYYY-MM-DD')}</TableCell>

                  <TableCell>
                     <SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='outline' className='text-muted-foreground hover:text-primary text-xl font-bold'>
                              <Eye />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                           <div className='space-y-1'>
                              <h4 className='text-sm font-medium leading-none'>المعلومات النصية</h4>
                           </div>
                           <Separator className='my-4' />
                           {item?.documentAttribute?.map((x: { Key: string; Value: string }) => (
                              <div key={x.Key} className='p-4 space-y-4'>
                                 <div className='flex justify-between h-5 items-center space-x-4 text-sm'>
                                    <div>{x?.Key}</div>
                                    <Separator orientation='vertical' />
                                    <div>{x?.Value}</div>
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
                              <NotepadText />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>{item?.note ?? 'لا يوجد ملاحظات'}</PopoverContent>
                     </Popover>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default DocumentTable;
