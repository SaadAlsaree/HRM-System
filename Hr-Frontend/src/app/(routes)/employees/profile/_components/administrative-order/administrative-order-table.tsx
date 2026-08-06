'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlignJustify, Settings2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { IAdministrativeOrder } from '.';
import { administrativeOrderService } from '@/services/administrative-order.service';
import SelectStatus from '@/app/_components/select-status';
import AdministrativeOrderForm from './administrative-order-form';
import AdministrativeOrderAttachment from './administrative-order-attachment';
import AdministrativeOrderNote from './administrative-order-note';

type Props = {
   columns: { label: string; value: string; className?: string }[];
   data?: IAdministrativeOrder[];
   employeeId?: string;
};

const AdministrativeOrderType = (type: number | undefined) => {
   switch (type) {
      case 1:
         return 'الأمر الوزاري بالتعيين';
      case 2:
         return 'الأمر الأداري بالتعيين';
      case 3:
         return 'الأمر الأداري بالمباشرة';
      case 4:
         return 'الأمر الأداري بتثبيت العمر';
      default:
         return 'غير محدد';
   }
};

const AdministrativeOrderTable = ({ data, columns, employeeId }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await administrativeOrderService.patchAdministrativeOrder({ id, statusId: value });

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
            {(!data || data.length === 0) && (
               <TableRow>
                  <TableCell colSpan={columns.length + 1} className='text-center py-6 text-muted-foreground'>
                     لا توجد بيانات أوامر إدارية
                  </TableCell>
               </TableRow>
            )}
            {data?.map((item) => {
               const resolvedEmpId = (item?.employeeId || employeeId) as string;
               return (
                  <TableRow key={item.id}>
                     <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>
                     <TableCell>{AdministrativeOrderType(item?.administrativeOrderType)}</TableCell>

                     <TableCell>{item?.bookTitle}</TableCell>
                     <TableCell>{item?.orderNo}</TableCell>
                     <TableCell>{item?.orderDate}</TableCell>
                     <TableCell>
                        <SelectStatus id={item?.id} status={item?.status?.toString()} onChange={handleStatusChange} />
                     </TableCell>
                     <TableCell>
                        <AdministrativeOrderAttachment PrimaryTableId={item?.id as string} employeeId={resolvedEmpId} />
                     </TableCell>
                     <TableCell>
                        <AdministrativeOrderNote note={item?.fullName as string} />
                     </TableCell>
                     <TableCell>
                        <div className='flex items-center gap-2'>
                           <AdministrativeOrderForm
                              title=''
                              icon={<Settings2 className='h-4 w-4' />}
                              data={item}
                              variant='ghost'
                              employeeId={resolvedEmpId}
                           />
                        </div>
                     </TableCell>
                  </TableRow>
               );
            })}
         </TableBody>
      </Table>
   );
};

export default AdministrativeOrderTable;
