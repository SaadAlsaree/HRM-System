'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SelectStatus from '@/app/_components/select-status';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AlignJustify, Settings2 } from 'lucide-react';
import { ITypeOfSeniority } from '../page';
import TypeOfSeniorityForm from './type-of-seniority-form';
import { typeOfSeniorityServiceClient } from '@/services/system-settings/type-of-seniority.service';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   data?: ITypeOfSeniority[];
};

const TypeOfSeniorityTable = ({ columns, data }: Props) => {
   const router = useRouter();

   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await typeOfSeniorityServiceClient.patchTypeOfSeniority({ id: Number(id), statusId: Number(value), tableName: 1 as any });

         toast(
            <pre className=' w-[340px] rounded-md'>
               <h1 className='text-xl'>{response?.message || 'تم تحديث الحالة بنجاح'}</h1>
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
            {(!data || data.length === 0) && (
               <TableRow>
                  <TableCell colSpan={columns.length + 1} className='text-center py-6 text-muted-foreground'>
                     لا توجد بيانات لنوع القدم
                  </TableCell>
               </TableRow>
            )}
            {data?.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                     <SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />
                  </TableCell>
                  <TableCell>
                     <div className='flex items-center gap-2'>
                        <TypeOfSeniorityForm title='' icon={<Settings2 className='h-4 w-4' />} data={item} variant='ghost' />
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default TypeOfSeniorityTable;
