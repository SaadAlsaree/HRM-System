'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Settings2, AlignJustify, NotepadText } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import LeavesForm from './leaves-form';
import SelectStatus from '@/app/_components/select-status';
import { leavesService } from '@/services/Leaves/leaves.service';
import { ILeave } from '../page';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import LeavesAttachment from './leaves-attachment';
import moment from 'moment';
import LeavesCatForm from './leaves-cat-form';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   leavesData: ILeave[];
   countryData: Array<{ [key: string]: unknown }>;
};

const LeavesTable = ({ leavesData, columns, countryData }: Props) => {
   const router = useRouter();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            // Fetch your data here if needed
            // Example: const data = await leavesService.getLeaves();
            // setLeavesData(data);
         } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Failed to fetch data.');
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await leavesService.patchLeave({ id: String(id) || 0, statusId: Number(value) });
         console.log(response);

         toast.success(response?.message || 'تم تحديث الحالة بنجاح.');
         router.refresh();
      } catch (error) {
         console.error('Error updating status:', error);
         toast.error('فشل في تحديث الحالة. يرجى المحاولة مرة أخرى.');
      }
   };

   return (
      <ScrollArea className='w-[1380px] whitespace-nowrap '>
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
               {loading
                  ? Array.from({ length: 10 }).map((_, index) => (
                       <TableRow key={index}>
                          <TableCell colSpan={columns.length + 1}>
                             <Skeleton className='h-10' />
                          </TableCell>
                       </TableRow>
                    ))
                  : leavesData.map((item) => (
                       <TableRow key={item.id}>
                          <TableCell>{item.id.split('-')[0].toUpperCase()}</TableCell>
                          <TableCell>{item.jobCode}</TableCell>
                          <TableCell>{item.fullName}</TableCell>
                          <TableCell>{item.orderNo}</TableCell>
                          <TableCell>{item.orderDate}</TableCell>
                          <TableCell>{moment(item.fromDate).format('yyyy-MM-DD')}</TableCell>
                          <TableCell>{moment(item.toDate).format('yyyy-MM-DD')}</TableCell>
                          <TableCell>{item.noOfRelease}</TableCell>
                          <TableCell>{moment(item.dateOfRelease).format('yyyy-MM-DD')}</TableCell>
                          <TableCell>{moment(item.releaseDate).format('yyyy-MM-DD')}</TableCell>
                          <TableCell>{item.countOfDays}</TableCell>
                          <TableCell>{item.remainingBalance}</TableCell>
                          <TableCell>
                             <SelectStatus id={item.id} status={item.status.toString()} onChange={handleStatusChange} />
                          </TableCell>
                          <TableCell>
                             <LeavesAttachment employeeId={item.employeeId} PrimaryTableId={item.id} />
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
                             <div className='flex justify-center space-x-2'>
                                <LeavesCatForm data={item} />
                                <LeavesForm
                                   title=''
                                   icon={<Settings2 className='h-4 w-4' />}
                                   data={item}
                                   variant='ghost'
                                   countryData={countryData}
                                />
                             </div>
                          </TableCell>
                       </TableRow>
                    ))}
            </TableBody>
         </Table>
         <ScrollBar orientation='horizontal' />
      </ScrollArea>
   );
};

export default LeavesTable;
