'use client';
import React from 'react';
import { IUnit } from '../page';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRouter } from 'next/navigation';
import { unitService } from '@/services/system-settings/unit.service';
import { toast } from 'sonner';
import { AlignJustify, Settings2 } from 'lucide-react';
import SelectStatus from '@/app/_components/select-status';
import UnitForm from './unit-form';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   DepartmentData: [];
   directorateList: [];
   subDirectorateList: [];
   sectionsList: [];
   data: IUnit[];
};

const UnitTable = ({ DepartmentData, columns, data, directorateList, subDirectorateList, sectionsList }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await unitService.patchUnit({ id, statusId: value });

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
      <div>
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
               {data.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>{item.id}</TableCell>
                     <TableCell>{item.name}</TableCell>
                     <TableCell>{item.shortKey}</TableCell>
                     <TableCell>{item.directorateName}</TableCell>
                     <TableCell>{item.subDirectorateName}</TableCell>
                     <TableCell>{item.departmentName}</TableCell>
                     <TableCell>{item.sectionName}</TableCell>
                     <TableCell>{<SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />}</TableCell>
                     <TableCell>
                        <div className='flex items-center gap-2'>
                           <UnitForm
                              DepartmentData={DepartmentData}
                              directorateList={directorateList}
                              subDirectorateList={subDirectorateList}
                              sectionList={sectionsList}
                              title=''
                              icon={<Settings2 className='h-4 w-4' />}
                              data={item}
                              variant='ghost'
                           />
                        </div>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
};

export default UnitTable;
