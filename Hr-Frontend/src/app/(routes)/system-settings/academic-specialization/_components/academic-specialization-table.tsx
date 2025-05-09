'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Settings2 } from 'lucide-react';
import AcademicSpecializationForm from './academic-specialization-form';
import SelectStatus from '@/app/_components/select-status';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { academicFieldService } from '@/services/system-settings/academic-field.service';

export interface IAcademicSpecialization {
   id: number;
   name: string;
   status: string;
}

type Props = {
   columns: { label: string; value: string; className?: string }[];
   AcademicSpecializationData: IAcademicSpecialization[];
};

const AcademicSpecializationTable = ({ AcademicSpecializationData, columns }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await academicFieldService.patchAcademicField({ id, statusId: value });

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
            {AcademicSpecializationData.map((item) => (
               <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{<SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />}</TableCell>
                  <TableCell>
                     <div className='flex items-center gap-2'>
                        <AcademicSpecializationForm variant='outline' title='' icon={<Settings2 className='h-4 w-4' />} data={item} />
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default AcademicSpecializationTable;
