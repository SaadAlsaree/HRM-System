'use client';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { IRegion } from '../page';
import { provinceService } from '@/services/system-settings/province.service';
import { governorateService } from '@/services/system-settings/governorate.service';

const formSchema = z.object({
   name: z.string().min(2).max(35),
   governorateId: z.string().optional()
});

type Props = {
   data?: IRegion;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const RegionForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [governorates, setGovernorates] = useState<any[]>([]);
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: data ? data.name || '' : '',
         governorateId: data?.governorateId ? String(data.governorateId) : ''
      }
   });

   useEffect(() => {
      const loadGov = async () => {
         try {
            const res = await governorateService.getGovernorate({ PageSize: 100, Page: 1 } as any);
            const items = res?.data?.items || res?.items || res?.data || [];
            if (Array.isArray(items)) {
               setGovernorates(items);
            }
         } catch (e) {
            console.error(e);
         }
      };
      if (open) {
         loadGov();
      }
   }, [open]);

   useEffect(() => {
      if (open && data) {
         form.reset({
            name: data.name || '',
            governorateId: data.governorateId ? String(data.governorateId) : ''
         });
      } else if (open && !data) {
         form.reset({
            name: '',
            governorateId: ''
         });
      }
   }, [open, data, form]);

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const payload = {
            name: values.name,
            governorateId: values.governorateId ? Number(values.governorateId) : undefined
         };

         if (data) {
            await provinceService.updateProvince(data.id, payload);
            toast.success('تم تعديل البيانات بنجاح.');
            setSubmitting(false);
            router.refresh();
            setOpen(false);
            form.reset();
         } else {
            await provinceService.createProvince(payload);
            toast.success('تم حفظ البيانات بنجاح.');
            setSubmitting(false);
            router.refresh();
            setOpen(false);
            form.reset();
         }
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('حدث خطأ أثناء الحفظ. يرجى المحاولة مرة أخرى.');
         setSubmitting(false);
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
                              <FormLabel>أسم القضاء</FormLabel>
                              <FormControl>
                                 <Input placeholder='أسم القضاء' type='text' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='governorateId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>المحافظة</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ''}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='اختر المحافظة' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {governorates.map((gov: any) => (
                                       <SelectItem key={gov.id} value={String(gov.id)}>
                                          {gov.name}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
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

export default RegionForm;
