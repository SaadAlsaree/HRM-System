import { Separator } from '@/components/ui/separator';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { EmployeeInfo } from './register-schema';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerForm } from '@/components/date-picker-form';
// data
import {
   appointment_batchOptions,
   categoryOptions,
   job_gradeOptions,
   job_positionOptions,
   job_specializationOptions,
   job_titleOptions,
   organizationOptions,
   departmentOptions,
   directorateOptions
} from './data';

type Props = {
   form: UseFormReturn<EmployeeInfo>;
};

const JobInfoForm = ({ form }: Props) => {
   return (
      <div className='space-y-4'>
         <div>
            <h2 className='text-lg font-semibold text-gray-800'>معلومات الوظيفة .</h2>
            <Separator />
         </div>
         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='job_number'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>رقم الوظيفي</FormLabel>
                        <FormControl>
                           <Input placeholder='رقم الوظيفي' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='job_grade'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الدرجة الوظيفية</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='الدرجة الوظيفية' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {job_gradeOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الفئة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='الفئة' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {categoryOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
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
                  name='job_title'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>العنوان الوظيفي</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='العنوان الوظيفي' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {job_titleOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='job_specialization'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>التخصص الوظيفي</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='التخصص الوظيفي' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {job_specializationOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='job_position'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>المنصب الوظيفي</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='المنصب الوظيفي' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {job_positionOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>

         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
               <DatePickerForm control={form.control} label='تاريخ التعين' name='date_of_appointment' />
            </div>

            <div className='col-span-6'>
               <FormField
                  control={form.control}
                  name='appointment_batch'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>أسم الدورة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='أسم الدورة' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {appointment_batchOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
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
                  name='organization'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>الدائرة</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='الدائرة' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {organizationOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='directorate'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>المديرية</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='المديرية' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {directorateOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className='col-span-4'>
               <FormField
                  control={form.control}
                  name='department'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>القسم</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='القسم' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              {departmentOptions.map((option) => (
                                 <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </div>
      </div>
   );
};

export default JobInfoForm;
