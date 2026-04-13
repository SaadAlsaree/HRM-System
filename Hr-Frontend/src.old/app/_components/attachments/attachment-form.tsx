'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Import shadcn/ui components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Define the schema for validation using zod
const attachmentSchema = z.object({
   File: z.instanceof(File, { message: 'A file is required' }),
   BookTitle: z.string().optional(),
   BookNo: z.string().optional(),
   BookDate: z.string().optional()
});

export type IAttachments = z.infer<typeof attachmentSchema>;

type Props = {
   onChange: (attachment: IAttachments) => void;
};

const AttachmentForm = ({ onChange }: Props) => {
   const form = useForm<IAttachments>({
      resolver: zodResolver(attachmentSchema),
      defaultValues: {
         BookTitle: '',
         BookNo: '',
         BookDate: ''
      }
   });

   const onSubmit = (data: IAttachments) => {
      onChange(data);
      form.reset();
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            {/* File Upload Field */}
            <FormField
               control={form.control}
               name='File'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>اختر الملف</FormLabel>
                     <FormControl>
                        <Input type='file' onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            {/* Book Title Field */}
            <FormField
               control={form.control}
               name='BookTitle'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>عنوان الكتاب</FormLabel>
                     <FormControl>
                        <Input {...field} placeholder='Enter book title' />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            {/* Book No Field */}
            <FormField
               control={form.control}
               name='BookNo'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>رقم الكتاب</FormLabel>
                     <FormControl>
                        <Input {...field} placeholder='Enter book number' />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            {/* Book Date Field */}
            <FormField
               control={form.control}
               name='BookDate'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>تاريخ الكتاب</FormLabel>
                     <FormControl>
                        <Input type='date' {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button>
               <p className='ml-2'>حفظ البيانات</p>
            </Button>
         </form>
      </Form>
   );
};

export default AttachmentForm;
