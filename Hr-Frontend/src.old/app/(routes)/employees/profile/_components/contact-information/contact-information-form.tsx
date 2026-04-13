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

const formSchema = z.object({
   levelOfRelationshipId: z.string(),
   contactName: z.string().min(3).max(35),
   phoneNumber: z.string().min(6).max(20),
   notes: z.string()
});

type Props = {
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
   data?: IContactInformation;
};

const ContactInformationForm = ({ title, employeeId, icon, variant, data }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [levelOfRelationship, setLevelOfRelationship] = useState([]);
   const router = useRouter();

   useEffect(() => {
      const fetchLevelOfRelationship = async () => {
         const response = await levelOfRelationshipService.getLevelOfRelationship();
         setLevelOfRelationship(response?.data?.items);
      };
      fetchLevelOfRelationship();
   }, []);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const levvelOfRelationshipOptions = levelOfRelationship?.map((item: any) => {
      return {
         value: item.id,
         label: item.name
      };
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         levelOfRelationshipId: data?.levelOfRelationshipId?.toString() || '',
         contactName: data?.contactName || '',
         phoneNumber: data?.phoneNumber || '',
         notes: data?.notes || ''
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            const dataToUpdate = {
               lastUpdateBy: employeeId,
               employeeId,
               ...values
            };
            await contactInformationService.updateContactInformation(data.id as string, dataToUpdate);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            setSubmitting(false);
            router.refresh();
            setOpen(false);
            form.reset();
         } else {
            const dataToSave = {
               ...values,
               employeeId,
               createBy: employeeId
            };
            await contactInformationService.createContactInformation(dataToSave);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
            setSubmitting(false);
            router.refresh();
            setOpen(false);
            form.reset();
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
         setSubmitting(false);
         setOpen(false);
         form.reset();
      }
   }

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant} size='sm' className='mr-2'>
                  <p>{title}</p>
                  {icon || <Plus className='h-4 w-4' />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[700px]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />

               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-3xl mx-auto py-10'>
                     <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-4'>
                           <FormField
                              control={form.control}
                              name='levelOfRelationshipId'
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>صلة القرابة</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                       <FormControl>
                                          <SelectTrigger>
                                             <SelectValue placeholder='حدد صلة القرابة' />
                                          </SelectTrigger>
                                       </FormControl>
                                       <SelectContent>
                                          {levvelOfRelationshipOptions?.map((item) => (
                                             <SelectItem key={item.value} value={item.value.toString()}>
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

                        <div className='col-span-4'>
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

                        <div className='col-span-4'>
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
                     <Button disabled={isSubmitting}>
                        {isSubmitting ? (
                           <>
                              <p className='ml-2'>حفظ البيانات</p> <Spinner />
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
                        أغلاق
                     </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default ContactInformationForm;
