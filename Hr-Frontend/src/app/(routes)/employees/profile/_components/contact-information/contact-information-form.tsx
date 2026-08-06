'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IContactInformation } from '.';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import Spinner from '@/components/spinner';
import { contactInformationService } from '@/services/contact-information.service';
import { levelOfRelationshipService } from '@/services/system-settings/level-of-relationship.service';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const formSchema = z.object({
   levelOfRelationshipId: z.string().min(1, 'صلة القرابة مطلوبة'),
   contactName: z.string().min(2, 'الاسم مطلوب').max(35),
   phoneNumber: z.string().min(6, 'رقم الهاتف مطلوب').max(20),
   notes: z.string().optional()
});

type Props = {
   icon?: React.ReactNode;
   title?: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
   data?: IContactInformation;
};

const ContactInformationForm = ({ title, employeeId, icon, variant, data }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [levelOfRelationship, setLevelOfRelationship] = useState([]);
   const { triggerRefresh } = useEmployeeProfileRefresh();
   const router = useRouter();

   useEffect(() => {
      const fetchLevelOfRelationship = async () => {
         try {
            const response = await levelOfRelationshipService.getLevelOfRelationship();
            setLevelOfRelationship(response?.data?.items || []);
         } catch (e) {
            console.error('Error fetching relations:', e);
         }
      };
      fetchLevelOfRelationship();
   }, []);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const levvelOfRelationshipOptions = levelOfRelationship?.map((item: any) => ({
      value: item.id.toString(),
      label: item.name
   }));

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         levelOfRelationshipId: '',
         contactName: '',
         phoneNumber: '',
         notes: ''
      }
   });

   useEffect(() => {
      if (open && data) {
         form.reset({
            levelOfRelationshipId: data.levelOfRelationshipId ? String(data.levelOfRelationshipId) : '',
            contactName: data.contactName || data.fullName || '',
            phoneNumber: data.phoneNumber || '',
            notes: data.notes || ''
         });
      } else if (open && !data) {
         form.reset({
            levelOfRelationshipId: '',
            contactName: '',
            phoneNumber: '',
            notes: ''
         });
      }
   }, [open, data, form]);

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const empId = employeeId || data?.employeeId || '';
         if (data) {
            const dataToUpdate = {
               lastUpdateBy: empId,
               employeeId: empId,
               ...values,
               levelOfRelationshipId: Number(values.levelOfRelationshipId)
            };
            await contactInformationService.updateContactInformation(data.id as string, dataToUpdate);
            toast.success('تم تعديل البيانات بنجاح .');
         } else {
            const dataToSave = {
               ...values,
               employeeId: empId,
               createBy: empId,
               levelOfRelationshipId: Number(values.levelOfRelationshipId)
            };
            await contactInformationService.createContactInformation(dataToSave);
            toast.success('تم حفظ البيانات بنجاح .');
         }
         setSubmitting(false);
         setOpen(false);
         form.reset();
         triggerRefresh();
         router.refresh();
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('حدث خطأ أثناء حفظ البيانات. يرجى المحاولة مرة أخرى.');
         setSubmitting(false);
      }
   }

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant} size='sm' className='mr-2'>
                  {title && <p>{title}</p>}
                  {icon || <Plus className='h-4 w-4' />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[600px] max-w-[95vw]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{data ? 'تعديل معلومات الاتصال' : (title ? title : 'إضافة معلومات الاتصال')}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />

               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='levelOfRelationshipId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>صلة القرابة</FormLabel>
                                    <Select
                                       value={field.value ? String(field.value) : ''}
                                       onValueChange={field.onChange}
                                    >
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='حدد صلة القرابة' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {levvelOfRelationshipOptions?.map((item) => (
                                             <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='contactName'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>الاسم</FormLabel>
                                    <FormControl>
                                       <Input placeholder='الاسم' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>

                        <div className='col-span-12 md:col-span-4'>
                           <FormField
                              control={form.control}
                              name='phoneNumber'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>رقم الهاتف</FormLabel>
                                    <FormControl>
                                       <Input placeholder='رقم الهاتف' type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </div>
                     </div>

                     <FormField
                        control={form.control}
                        name='notes'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الملاحظات</FormLabel>
                              <FormControl>
                                 <Textarea placeholder='الملاحظات' className='resize-none' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button disabled={isSubmitting} className='w-full'>
                        {isSubmitting ? (
                           <>
                              <p className='ml-2'>جاري الحفظ...</p> <Spinner />
                           </>
                        ) : (
                           'حفظ البيانات'
                        )}
                     </Button>
                  </form>
               </Form>

               <Separator />
               <DialogFooter>
                  <DialogClose asChild>
                     <Button variant='destructive' onClick={() => form.reset()}>
                        إغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default ContactInformationForm;
