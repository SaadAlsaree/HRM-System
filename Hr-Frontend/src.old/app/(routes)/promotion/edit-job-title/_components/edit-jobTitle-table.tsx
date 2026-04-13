'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IEditJobTitle } from '../page';
import EditJobTitleForm from './edit-jobTitle-form';
import { changeJobTitlesService } from '@/services/change-job-titles.service';
import { Button } from '@/components/ui/button';
import EditJobTitleAttachment from './edit-jobTitle-attachment';
import moment from 'moment';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   editJobTitleData: IEditJobTitle[];
};

const EditJobTitleTable = ({ editJobTitleData, columns }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      console.log(value,id)
      try {
         const response = await changeJobTitlesService.patchChangeJobTitles({ id: String(id), statusId: Number(value) });
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
            {editJobTitleData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.jobCode}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.lotNumber}</TableCell>
                  <TableCell>{item.oldJobTitleName}</TableCell>
                  <TableCell>{item.newJobTitleName}</TableCell>
                  <TableCell>{item.oldJobDescriptionName}</TableCell>
                  <TableCell>{item.newJobDescriptionName}</TableCell>
                  <TableCell>{item.orderNo}</TableCell>
                  <TableCell>{moment(item.orderDate).format('YYYY-MM-DD')}</TableCell>
                  <TableCell>
                     <EditJobTitleAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
                  </TableCell>
                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='ghost' size='icon'>
                              <NotepadText className='justify-center' />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                           <pre>{item?.note}</pre>
                        </PopoverContent>
                     </Popover>
                  </TableCell>
                  <TableCell>
                     <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <EditJobTitleForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default EditJobTitleTable;
