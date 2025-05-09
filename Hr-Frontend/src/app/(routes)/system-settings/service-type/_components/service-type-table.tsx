'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SelectStatus from '@/app/_components/select-status';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AlignJustify, Settings2 } from 'lucide-react';
import { IStudyResult } from '../page';
import { typeOfServiceService } from '@/services/system-settings/type-of-service.service';
import ServiceTypeForm from './service-type-form';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   data?: IStudyResult[];
};
const ServiceTypeTable = ({ columns, data }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await typeOfServiceService.patchTypeOfService({ id, statusId: value });

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
               <TableHead className='w-[100px] text-center'>
                  <AlignJustify className='justify-center' />
               </TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>

                  <TableCell>{<SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />}</TableCell>
                  <TableCell>
                     <div className='flex items-center gap-2'>
                        <ServiceTypeForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ServiceTypeTable;
