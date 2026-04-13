'use client';
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
//Icons
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react';
import Spinner from '@/components/spinner';
import { useToast } from '@/hooks/use-toast';

export const addCommentSchema = z.object({
   bookId: z.string().min(3, 'هذا الحقل أجباري !').max(255),
   comment: z.string().min(3, 'هذا الحقل أجباري !').max(255),
   userId: z.string().optional()
});

type addCommentData = z.infer<typeof addCommentSchema>;

type Props = {
   bookId: string;
};
const CommentForm = ({ bookId }: Props) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [error, setError] = useState('');
   const [isSubmitting, setSubmitting] = useState(false);
   const { toast } = useToast();
   const router = useRouter();

   const form = useForm<addCommentData>({
      resolver: zodResolver(addCommentSchema),
      defaultValues: {
         comment: '',
         bookId: bookId
      }
   });

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const onSubmit = form.handleSubmit(async (data) => {
      try {
         setSubmitting(true);
         // await createComment(data);
         //  const response = await axios.post('/api/book/comment', data);
         form.reset();
         setSubmitting(false);
         router.refresh();
         toast({
            title: 'تم إضافة التعليق بنجاح',
            description: 'تم إضافة التعليق بنجاح',
            variant: 'default',
            duration: 5000
         });
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
         setError('حدث خطأ ما');
         setSubmitting(false);
         toast({
            title: 'حدث خطأ ما',
            description: 'حدث خطأ ما',
            variant: 'destructive',
            duration: 5000
         });
      }
   });

   return (
      <div>
         <Form {...form}>
            <form
               onSubmit={onSubmit}
               autoComplete='off'
               className='relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring'
               x-chunk='dashboard-03-chunk-1'
            >
               <Label htmlFor='comment' className='sr-only'>
                  تعليق
               </Label>
               <Textarea
                  {...form.register('comment')}
                  id='comment'
                  placeholder='اكتب تعليقك هنا...'
                  className='min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0'
               />
               <div className='flex items-center p-3 pt-0'>
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant='ghost' size='icon'>
                              <Paperclip className='size-4' />
                              <span className='sr-only'>أرفق ملف</span>
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent side='top'>أرفق ملف</TooltipContent>
                     </Tooltip>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant='ghost' size='icon'>
                              <Mic className='size-4' />
                              <span className='sr-only'>استخدم الميكروفون</span>
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent side='top'>استخدم الميكروفون</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
                  <Button type='submit' disabled={isSubmitting} size='sm' className='mr-auto gap-1.5'>
                     {isSubmitting ? (
                        <>
                           <p className='ml-2'>ارسال التعليق</p> <Spinner />
                        </>
                     ) : (
                        'أرسال التعليق'
                     )}
                     <CornerDownLeft className='size-3.5' />
                  </Button>
               </div>
            </form>
         </Form>
      </div>
   );
};

export default CommentForm;
