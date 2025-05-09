/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; // Make sure to import X icon
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CalendarIcon, X } from 'lucide-react';

interface DatePickerProps {
   control: any;
   name: string;
   label: string;
   defaultValue?: Date;
   placeholder?: string;
}

export function DatePickerForm({ control, name, label, defaultValue, placeholder = 'اختيار تاريخ' }: DatePickerProps) {
   const [date, setDate] = React.useState<Date | undefined>(undefined);

   const clearDate = (e: React.MouseEvent) => {
      e.stopPropagation();
      setDate(undefined);
   };

   return (
      <FormField
         control={control}
         name={name}
         defaultValue={defaultValue}
         render={({ field }) => (
            <FormItem className='flex flex-col mt-[11px]'>
               <FormLabel>{label}</FormLabel>
               <Popover>
                  <PopoverTrigger asChild>
                     <FormControl>
                        <Button variant={'outline'} className={cn('pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                           {field.value ? format(field.value, 'yyyy-MM-dd') : <span>{placeholder}</span>}
                           <div className='mr-auto flex items-center'>
                              {field.value && (
                                 <X
                                    className='h-4 w-4  hover:text-red-600 cursor-pointer ml-1'
                                    onClick={(e: any) => {
                                       e.stopPropagation();
                                       field.onChange(null);
                                    }}
                                 />
                              )}
                              <CalendarIcon className='h-4 w-4  text-primary' />
                           </div>
                        </Button>
                     </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                     <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: any) => date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
               <FormMessage />
            </FormItem>
         )}
      />
   );
}
