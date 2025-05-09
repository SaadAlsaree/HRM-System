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
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import Spinner from '@/components/spinner';
import { IJobTitle } from '../page';
import { jobTitleService } from '@/services/system-settings/job-title.service';

const formSchema = z.object({
   degreeId: z.string(),
   name: z.string().min(3).max(35)
});

type Props = {
   data?: IJobTitle;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   jobDegrees: [];
};

const JobTitleForm = ({ title, data, icon, variant, jobDegrees }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegrees?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         degreeId: data ? data.degreeId?.toString() : '',
         name: data ? data.name : ''
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await jobTitleService.updateJobTitle(data.id, values);
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
            await jobTitleService.createJobTitle(values);
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
                  </div>
               </DialogHeader>
               <Separator />
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2' autoComplete='off'>
                     <FormField
                        control={form.control}
                        name='degreeId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>حدد الدرجة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الدرجة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent defaultValue={field.value.toString()}>
                                    {jopDegreeOptions.map((item) => (
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

                     <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>أسم العنوان الوظيفي</FormLabel>
                              <FormControl>
                                 <Input placeholder='العنوان الوظيفي' type='text' {...field} />
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

export default JobTitleForm;
