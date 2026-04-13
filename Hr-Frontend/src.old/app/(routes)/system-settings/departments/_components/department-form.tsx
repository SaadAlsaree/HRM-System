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
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IDepartment } from './department-table';
import { useRouter } from 'next/navigation';
import { departmentService } from '@/services/system-settings/department.service';

const formSchema = z.object({
   directorateId: z.string().optional(),
   subDirectorateId: z.string().optional(),
   name: z.string().min(4).max(75),
   shortKey: z.string().min(2).max(20)
});

type Props = {
   data?: IDepartment;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   directorateList: [];
   subDirectorateList: [];
};

const DepartmentForm = ({ title, data, icon, variant, directorateList, subDirectorateList }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const router = useRouter();
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const directorateOptions = directorateList.map((item: any) => {
      return { value: item.id, label: item.name };
   });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const subDirectorateOptions = subDirectorateList.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: data?.name,
         shortKey: data?.shortKey,
         directorateId: data?.directorateId?.toString(),
         subDirectorateId: data?.subDirectorateId?.toString()
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await departmentService.updateDepartment(data.id, values);
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
            console.log(values);
            await departmentService.createDepartment(values);
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
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='الدائرة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent defaultValue={field.value}>
                                    {directorateOptions.map((item) => (
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
                        name='subDirectorateId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>حدد المديرية</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='المديرية' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent defaultValue={field.value}>
                                    {subDirectorateOptions.map((item) => (
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
                              <FormLabel>أسم القسم</FormLabel>
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
                              <FormLabel>رمز القسم</FormLabel>
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

export default DepartmentForm;
