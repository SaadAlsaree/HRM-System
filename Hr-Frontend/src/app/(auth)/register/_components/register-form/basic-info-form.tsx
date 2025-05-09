import { UseFormReturn } from 'react-hook-form';

import { FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PhoneInput } from '@/components/ui/phone-input';
import { EmployeeInfo } from './register-schema';
import { DatePickerForm } from '@/components/date-picker-form';
import { Separator } from '@/components/ui/separator';

type Props = {
   form: UseFormReturn<EmployeeInfo>;
};

const BasicInfoForm = ({ form }: Props) => {
   return (
      <div className='space-y-4'>
         <div>
            <h2 className='text-lg font-semibold text-gray-800'>المعلومات الشخصية</h2>
            <Separator />
         </div>
         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='first_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الأسم الأول</FormLabel>
                        <FormControl>
                           <Input placeholder='الأسم الأول' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='second_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الأسم الثاني</FormLabel>
                        <FormControl>
                           <Input placeholder='الأسم الثاني' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='third_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الأسم الثالث</FormLabel>
                        <FormControl>
                           <Input placeholder='الأسم الثالث' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='fourth_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الأسم الرابع</FormLabel>
                        <FormControl>
                           <Input placeholder='الأسم الرابع' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='last_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>اللقب</FormLabel>
                        <FormControl>
                           <Input placeholder='اللقب' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
               <DatePickerForm control={form.control} label='تارسخ الميلاد' name='date_of_birth' placeholder='تارسخ الميلاد' />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='place_of_birth'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>محل الولادة</FormLabel>
                        <FormControl>
                           <Input placeholder='محل الولادة' type='' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='employee_gender'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الجنس</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='الجنس' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value='1'>ذكر</SelectItem>
                              <SelectItem value='2'>أنثى</SelectItem>
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='mother_first_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>أسم الأم الأول</FormLabel>
                        <FormControl>
                           <Input placeholder='أسم الأم الأول' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='mother_second_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>أسم الأم الثاني</FormLabel>
                        <FormControl>
                           <Input placeholder='أسم الأم الثاني' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='mother_third_name'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>أسم الأم الثالث</FormLabel>
                        <FormControl>
                           <Input placeholder='أسم الأم الثالث' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='id_number'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>رقم البطاقة الوطنية</FormLabel>
                        <FormControl>
                           <Input placeholder='رقم البطاقة الوطنية' type='number' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='issuing_authority'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>جهة الأصدار</FormLabel>
                        <FormControl>
                           <Input placeholder='جهة الاصدار' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                     <FormItem className='flex flex-col items-start mt-2.5'>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <FormControl className='w-full'>
                           <PhoneInput placeholder='رقم الهاتف' {...field} defaultCountry='IQ' />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
               {/* <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>رقم الهاتف</FormLabel>
                        <FormControl>
                           <Input placeholder='رقم الهاتف' type='number' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               /> */}
            </div>

            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>البريد الألكتروني</FormLabel>
                        <FormControl>
                           <Input placeholder='البريد الألكتروني' type='email' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>
      </div>
   );
};

export default BasicInfoForm;
