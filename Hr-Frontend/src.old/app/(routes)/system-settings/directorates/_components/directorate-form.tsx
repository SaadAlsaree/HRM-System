'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { IDirectorate } from './directorate-table';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { org } from './directorate-toolbar';
import { subDirectorService } from '@/services/system-settings/sub-directorate.service';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
   directorateId: z.string().optional(),
   name: z.string().min(4).max(75),
   shortKey: z.string().min(2).max(20)
});

type Props = {
   data?: IDirectorate;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   orgData?: org[];
};

const DirectorateForm = ({ title, data, icon, variant, orgData }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const router = useRouter();

   const orgOptions = orgData?.map((org) => ({ label: org.name, value: org.id }));

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         directorateId: data?.directorateId ? data.directorateId.toString() : undefined,
         name: data?.name,
         shortKey: data?.shortKey
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await subDirectorService.updateSubDirectorates(data.id, { ...values, directorateId: values.directorateId || '' });
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
            await subDirectorService.createSubDirectorates({ ...values, directorateId: values.directorateId || '' });
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
               <Button variant={variant}>
                  <p>{title}</p>
                  {icon || <Plus className='h-4 w-4' />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[500px]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                     {/* <Button variant='ghost' size='icon' className='rounded-full' onClick={() => setOpen(false)}>
                  <X className='h-4 w-4' />
               </Button> */}
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-10' autoComplete='off'>
                     <FormField
                        control={form.control}
                        name='directorateId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>حدد الدائرة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الدائرة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent defaultValue={field.value?.toString()}>
                                    {orgOptions?.map((option) => (
                                       <SelectItem key={option.value} value={option.value.toString()}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>أسم المديرية</FormLabel>
                              <FormControl>
                                 <Input placeholder='الأسم' type='text' {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='shortKey'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>رمز المديرية</FormLabel>
                              <FormControl>
                                 <Input placeholder='الرمز' type='text' {...field} />
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

export default DirectorateForm;
