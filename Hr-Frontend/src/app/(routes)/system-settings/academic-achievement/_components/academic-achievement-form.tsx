'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IAcademicAchievement } from './academic-achievement-table';
import { academicAchievementService } from '@/services/system-settings/academic-chievement.service';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
   name: z.string().min(3).max(200),
   jobDegreeId: z.string().optional()
});

type Props = {
   data?: IAcademicAchievement;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   jobDegreeList: [];
};

const AcademicAchievementForm = ({ data, icon, title, variant, jobDegreeList }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);

   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const jopDegreeOptions = jobDegreeList?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: data?.name ?? '',
         jobDegreeId: data ? data.jobDegreeId?.toString() : ''
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await academicAchievementService.putAcademicAchievementById(data.id, values);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            setOpen(false);
            router.refresh();
         } else {
            await academicAchievementService.createAcademicAchievement(values);

            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
            form.reset();
            setSubmitting(false);
            setOpen(false);
            router.refresh();
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
         form.reset();
         setSubmitting(false);
         setOpen(false);
      }
   }

   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant={variant}>
                  <p>{title}</p>
                  {icon ? icon : <Plus />}
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
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
                        name='jobDegreeId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>حدد الدرجة</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الدرجة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent defaultValue={field.value?.toString()}>
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
                              <FormLabel>الأسم</FormLabel>
                              <FormControl>
                                 <Input placeholder='الأسم' type='text' {...field} />
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

export default AcademicAchievementForm;
