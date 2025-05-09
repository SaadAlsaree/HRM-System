'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { IContactInformation } from '.';
import { contactInformationService } from '@/services/contact-information.service';
import { AlignJustify, NotepadText, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SelectStatus from '@/app/_components/select-status';
import ContactInformationForm from './contact-information-form';

type Props = {
   data: IContactInformation[] | [];
   columns: { label: string; value: string; className?: string }[];
};
const ContactInformationTable = ({ columns, data }: Props) => {
   const router = useRouter();
   //Handel Update status
   const handleStatusChange = async (value: string | number | null, id: string | number | null) => {
      try {
         const response = await contactInformationService.patchContactInformation({ id, statusId: value });

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
   console.log(data);
   // if (data.length < 0) {
   //    return (
   //       <div className='flex flex-col'>
   //          <h1>لا يوجد بيانات !</h1>
   //       </div>
   //    );
   // }
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
                  <TableCell>{item?.id?.toString().toUpperCase().split('-', 1)}</TableCell>

                  <TableCell>{item?.fullName}</TableCell>
                  <TableCell>{item?.levelOfRelationshipName}</TableCell>
                  <TableCell>{item?.phoneNumber}</TableCell>

                  <TableCell>
                     <SelectStatus id={item?.id as string} status={item?.status?.toString()} onChange={handleStatusChange} />
                  </TableCell>

                  <TableCell>
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant='outline' className='text-muted-foreground hover:text-primary text-xl font-bold'>
                              <NotepadText />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                           <div className='space-y-1'>
                              <h4 className='text-sm font-medium leading-none'>الملاحظات</h4>
                           </div>
                           <Separator className='my-4' />
                           {item?.notes ?? 'لا يوجد ملاحظات'}
                        </PopoverContent>
                     </Popover>
                  </TableCell>
                  <TableCell>
                     <ContactInformationForm
                        title=''
                        data={item}
                        employeeId={item.employeeId}
                        icon={<Settings2 className='h-4 w-4' />}
                        variant='ghost'
                     />
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ContactInformationTable;
