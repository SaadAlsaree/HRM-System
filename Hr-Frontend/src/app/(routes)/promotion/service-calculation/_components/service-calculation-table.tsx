'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { AlignJustify, NotepadText, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import SelectStatus from '@/app/_components/select-status';
import { IServiceCalculation } from '../page';
import AffiliatesFromOrgForm from './service-calculation-form';
import { serviceCalculationService } from '@/services/service-calculation.service';
import ServiceCalculationAttachment from './service-calculation-attachment';
import { Button } from '@/components/ui/button';
import { IJobDegree } from '@/app/(routes)/system-settings/job-degree/page';
import { IJobTitle } from '@/app/(routes)/system-settings/job-title/page';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   serviceCalculationData: IServiceCalculation[];
   jobDegreesList: IJobDegree[];
   jobTitlesList: IJobTitle[];
};

const ServiceCalculationTable = ({ serviceCalculationData, columns, jobDegreesList, jobTitlesList }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await serviceCalculationService.patchServiceCalculation({ id: String(id) || 0, statusId: String(value) });
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
            {serviceCalculationData?.map((item) => (
               <TableRow key={item?.id}>
                  <TableCell>{item?.jobCode}</TableCell>
                  <TableCell>{item?.fullName}</TableCell>
                  <TableCell>{item?.typeOfServiceName}</TableCell>
                  <TableCell>{item?.countOfMonth}</TableCell>
                  <TableCell>{item?.orderNo}</TableCell>
                  <TableCell>{item?.orderDate}</TableCell>
                  <TableCell>{!item?.isPoliticalTermination ? 'كلا' : 'نعم'}</TableCell>

                  <TableCell>
                     <ServiceCalculationAttachment employeeId={item?.employeeId} PrimaryTableId={item?.id} />
                  </TableCell>
                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='ghost' size='icon'>
                              <NotepadText className='justify-center' />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                           <pre>{item?.notes}</pre>
                        </PopoverContent>
                     </Popover>
                  </TableCell>
                  <TableCell>
                     <div className='flex items-center gap-2'>
                        <SelectStatus id={item?.id} status={item?.status.toString()} onChange={handleStatusChange} />
                     </div>
                  </TableCell>
                  <TableCell>
                     <AffiliatesFromOrgForm
                        title=''
                        icon={<Settings2 className='h-4 w-4' />}
                        data={item}
                        variant='ghost'
                        jobDegreesList={jobDegreesList}
                        jobTitlesList={jobTitlesList}
                     />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ServiceCalculationTable;
