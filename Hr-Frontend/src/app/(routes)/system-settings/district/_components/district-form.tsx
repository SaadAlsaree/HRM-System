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
import { IDistrict } from '../page';
import { territoryService } from '@/services/system-settings/territory.service';
import { provinceService } from '@/services/system-settings/province.service';

const formSchema = z.object({
   name: z.string().min(2).max(35),
   provinceId: z.string().optional()
});

type Props = {
   data?: IDistrict;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const DistrictForm = ({ title, data, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [provinces, setProvinces] = useState<any[]>([]);
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: data ? data.name || '' : '',
         provinceId: data?.provinceId ? String(data.provinceId) : ''
      }
   });

   useEffect(() => {
      const loadProvinces = async () => {
         try {
            const res = await provinceService.getProvinces({ PageSize: 100, Page: 1 } as any);
            const items = res?.data?.items || res?.items || res?.data || [];
            if (Array.isArray(items)) {
               setProvinces(items);
            }
         } catch (e) {
            console.error(e);
         }
      };
      if (open) {
         loadProvinces();
      }
   }, [open]);

   useEffect(() => {
      if (open && data) {
         form.reset({
            name: data.name || '',
            provinceId: data.provinceId ? String(data.provinceId) : ''
         });
      } else if (open && !data) {
         form.reset({
            name: '',
            provinceId: ''
         });
      }
   }, [open, data, form]);

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const payload = {
            name: values.name,
            provinceId: values.provinceId ? Number(values.provinceId) : undefined
         };

         if (data) {
            await territoryService.updateTerritory(data.id, payload);
            toast.success('تم تعديل البيانات بنجاح.');
            setSubmitting(false);
            router.refresh();
            setOpen(false);
            form.reset();
         } else {
            await territoryService.createTerritory(payload);
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
                              <FormLabel>الناحية</FormLabel>
                              <FormControl>
                                 <Input placeholder='الناحية' type='text' {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        control={form.control}
                        name='provinceId'
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>القضاء</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ''}>
                                 <FormControl>
                                    <SelectTrigger>
                                       <SelectValue placeholder='اختر القضاء' />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                    {provinces.map((prov: any) => (
                                       <SelectItem key={prov.id} value={String(prov.id)}>
                                          {prov.name}
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

export default DistrictForm;
