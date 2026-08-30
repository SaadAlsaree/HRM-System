'use client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { governorateService } from '@/services/system-settings/governorate.service';
import { provinceService } from '@/services/system-settings/province.service';
import { territoryService } from '@/services/system-settings/territory.service';
import { useRouter } from 'next/navigation';
import { IAddressInformation } from '..';
import { addressInformationService } from '@/services/address-information.service';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const formSchema = z.object({
   governorateId: z.string(),
   provinceId: z.string(),
   territoryId: z.string(),
   area: z.string().min(2).max(35),
   district: z.string().min(2).max(35),
   streetNo: z.string().min(2).max(35),
   houseNo: z.string().min(2).max(35),
   nearestPoint: z.string().min(2).max(45),
   notes: z.string()
});

type Props = {
   data?: IAddressInformation;
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId: string;
};
const extractItems = (res: any): any[] => {
   if (!res) return [];
   if (Array.isArray(res)) return res;
   if (Array.isArray(res.items)) return res.items;
   if (Array.isArray(res.data?.items)) return res.data.items;
   if (Array.isArray(res.data)) return res.data;
   if (Array.isArray(res.data?.data?.items)) return res.data.data.items;
   if (Array.isArray(res.data?.data)) return res.data.data;
   return [];
};

const HomeAddressForm = ({ title, data, icon, variant, employeeId }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [governorate, setGovernorate] = useState<any[]>([]);
   const [allProvinces, setAllProvinces] = useState<any[]>([]);
   const [allTerritories, setAllTerritories] = useState<any[]>([]);
   const router = useRouter();
   const { refresh } = useEmployeeProfileRefresh();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         governorateId: data?.governorateId?.toString() || '',
         provinceId: data?.provinceId?.toString() || '',
         territoryId: data?.territoryId?.toString() || '',
         area: data?.area || '',
         district: data?.district || '',
         streetNo: data?.streetNo || '',
         houseNo: data?.houseNo || '',
         nearestPoint: data?.nearestPoint || '',
         notes: data?.notes || ''
      }
   });

   useEffect(() => {
      const loadAllLocations = async () => {
         try {
            const [govRes, provRes, terrRes] = await Promise.allSettled([
               governorateService.getGovernorate({ PageSize: 100, Page: 1 } as any),
               provinceService.getProvinces({ PageSize: 100, Page: 1 } as any),
               territoryService.getTerritories({ PageSize: 100, Page: 1 } as any)
            ]);

            if (govRes.status === 'fulfilled') setGovernorate(extractItems(govRes.value));
            if (provRes.status === 'fulfilled') setAllProvinces(extractItems(provRes.value));
            if (terrRes.status === 'fulfilled') setAllTerritories(extractItems(terrRes.value));
         } catch (err) {
            console.error('Error loading locations', err);
         }
      };

      if (open) {
         loadAllLocations();
      }
   }, [open]);

   useEffect(() => {
      if (open && data) {
         form.reset({
            governorateId: data.governorateId ? data.governorateId.toString() : '',
            provinceId: data.provinceId ? data.provinceId.toString() : '',
            territoryId: data.territoryId ? data.territoryId.toString() : '',
            area: data?.area || '',
            district: data?.district || '',
            streetNo: data?.streetNo || '',
            houseNo: data?.houseNo || '',
            nearestPoint: data?.nearestPoint || '',
            notes: data?.notes || ''
         });
      } else if (open && !data) {
         form.reset({
            governorateId: '',
            provinceId: '',
            territoryId: '',
            area: '',
            district: '',
            streetNo: '',
            houseNo: '',
            nearestPoint: '',
            notes: ''
         });
      }
   }, [open, data, form]);

   const watchGovernorateId = form.watch('governorateId');
   const watchProvinceId = form.watch('provinceId');

   const governorateOptions = governorate.map((item: any) => ({
      value: String(item.id),
      label: item.name
   }));

   const filteredProvinces = watchGovernorateId
      ? allProvinces.filter((p: any) => p.governorateId && String(p.governorateId) === String(watchGovernorateId))
      : allProvinces;

   const provinceDisplayList = (watchGovernorateId && filteredProvinces.length > 0)
      ? filteredProvinces
      : allProvinces;

   const provinceOptions = provinceDisplayList.map((item: any) => ({
      value: String(item.id),
      label: item.name
   }));

   const filteredTerritories = watchProvinceId
      ? allTerritories.filter((t: any) => t.provinceId && String(t.provinceId) === String(watchProvinceId))
      : allTerritories;

   const territoryDisplayList = (watchProvinceId && filteredTerritories.length > 0)
      ? filteredTerritories
      : allTerritories;

   const territoryOptions = territoryDisplayList.map((item: any) => ({
      value: String(item.id),
      label: item.name
   }));

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         const payload = {
            ...values,
            governorateId: Number(values.governorateId) || 0,
            provinceId: Number(values.provinceId) || 0,
            territoryId: Number(values.territoryId) || 0
         };

         if (data) {
            const recordId = (data.id || (data as any).Id) as string;
            const res = await addressInformationService.updateAddressInformation(recordId, payload);
            if (res && (res.succeeded === false || res.Succeeded === false)) {
               toast.error(res.message || res.Message || 'تعذر تعديل جهة السكن');
               setSubmitting(false);
               return;
            }
            toast.success('تم تعديل البيانات بنجاح.');
            setSubmitting(false);
            refresh();
            router.refresh();
            setOpen(false);
            form.reset();
         } else {
            const dataToSave = {
               ...payload,
               employeeId
            };
            const res = await addressInformationService.createAddressInformation(dataToSave);
            if (res && (res.succeeded === false || res.Succeeded === false)) {
               toast.error(res.message || res.Message || 'تعذر حفظ جهة السكن');
               setSubmitting(false);
               return;
            }
            toast.success('تم حفظ البيانات بنجاح.');
            setSubmitting(false);
            refresh();
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
               <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                  <div className='grid grid-cols-12 gap-2'>
                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='governorateId'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>المحافظة</FormLabel>
                                 <Select
                                    onValueChange={(value) => {
                                       field.onChange(value);
                                       form.setValue('provinceId', '');
                                       form.setValue('territoryId', '');
                                    }}
                                    value={field.value ? field.value.toString() : ''}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='المحافظة' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {governorateOptions?.map((item: any) => (
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

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='provinceId'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>القضاء</FormLabel>
                                 <Select
                                    onValueChange={(value) => {
                                       field.onChange(value);
                                       form.setValue('territoryId', '');
                                       const selectedProv = allProvinces.find((p: any) => String(p.id) === String(value));
                                       if (selectedProv?.governorateId && !form.getValues('governorateId')) {
                                          form.setValue('governorateId', String(selectedProv.governorateId));
                                       }
                                    }}
                                    value={field.value ? field.value.toString() : ''}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='القضاء' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {provinceOptions?.map((item: any) => (
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

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='territoryId'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>الناحية</FormLabel>
                                 <Select
                                    onValueChange={(value) => {
                                       field.onChange(value);
                                       const selectedTerr = allTerritories.find((t: any) => String(t.id) === String(value));
                                       if (selectedTerr?.provinceId && !form.getValues('provinceId')) {
                                          form.setValue('provinceId', String(selectedTerr.provinceId));
                                          const selectedProv = allProvinces.find((p: any) => String(p.id) === String(selectedTerr.provinceId));
                                          if (selectedProv?.governorateId && !form.getValues('governorateId')) {
                                             form.setValue('governorateId', String(selectedProv.governorateId));
                                          }
                                       }
                                    }}
                                    value={field.value ? field.value.toString() : ''}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='الناحية' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {territoryOptions?.map((item: any) => (
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

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='area'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>المنطقة</FormLabel>
                                 <FormControl>
                                    <Input placeholder='المنطقة' type='text' {...field} />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>
                  </div>

                  <div className='grid grid-cols-12 gap-2'>
                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='district'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>محلة</FormLabel>
                                 <FormControl>
                                    <Input placeholder='محلة' type='text' {...field} />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='streetNo'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>زقاق</FormLabel>
                                 <FormControl>
                                    <Input placeholder='زقاق' type='text' {...field} />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='houseNo'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>دار</FormLabel>
                                 <FormControl>
                                    <Input placeholder='دار' type='text' {...field} />
                                 </FormControl>

                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='col-span-3'>
                        <FormField
                           control={form.control}
                           name='nearestPoint'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>اقرب نقطة دالة</FormLabel>
                                 <FormControl>
                                    <Input placeholder='اقرب نقطة دالة' type='text' {...field} />
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
   );
};
export default HomeAddressForm;
