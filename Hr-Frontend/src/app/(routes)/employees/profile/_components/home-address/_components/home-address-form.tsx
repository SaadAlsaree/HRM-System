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
const HomeAddressForm = ({ title, data, icon, variant, employeeId }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const [governorate, setGovernorate] = useState([]);
   const [provinces, setProvinces] = useState([]);
   const [territories, setTerritories] = useState([]);
   const router = useRouter();

   useEffect(() => {
      const fetchGovernorate = async () => {
         const response = await governorateService.getGovernorate();
         setGovernorate(response?.data?.items);
      };

      const fetchProvinces = async () => {
         const response = await provinceService.getProvinces();
         setProvinces(response?.data?.items);
      };

      const fetchTerritories = async () => {
         const response = await territoryService.getTerritories();
         setTerritories(response?.data?.items);
      };

      fetchGovernorate();
      fetchProvinces();
      fetchTerritories();
   }, []);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const governorateOptions = governorate.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const provinceOptions = provinces.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const territoryOptions = territories.map((item: any) => {
      return { value: item.id, label: item.name };
   });

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

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true);
      try {
         if (data) {
            await addressInformationService.updateAddressInformation(data.id as string, values);
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
               employeeId
            };
            await addressInformationService.createAddressInformation(dataToSave);
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
                                 <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='المحافظة' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {governorateOptions.map((item) => (
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
                                 <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='القضاء' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {provinceOptions.map((item) => (
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
                                 <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                    <FormControl>
                                       <SelectTrigger>
                                          <SelectValue placeholder='الناحية' />
                                       </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {territoryOptions.map((item) => (
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
