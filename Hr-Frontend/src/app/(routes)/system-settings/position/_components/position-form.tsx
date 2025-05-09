'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { IPosition } from '../page';
import { useRouter } from 'next/navigation';
import { positionService } from '@/services/system-settings/position.service';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

const formSchema = z.object({
   name: z.string().min(2).max(35)
});

type Props = {
   data?: IPosition;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const PositionForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: data ? data.name : ''
      }
   });

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await positionService.updatePosition(data.id, values);
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
            await positionService.createPosition(values);
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
                        name='name'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>المنصب</FormLabel>
                              <FormControl>
                                 <Input placeholder='المنصب' type='text' {...field} />
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

export default PositionForm;
