import React, { useRef } from 'react';
import { EmployeeInfo } from './register-schema';
import { UseFormReturn } from 'react-hook-form';
import { Separator } from '@/components/ui/separator';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import SignatureInput from '@/components/ui/signature-input';

type Props = {
   form: UseFormReturn<EmployeeInfo>;
};

const SignatureForm = ({ form }: Props) => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   return (
      <div className='space-y-4'>
         <div>
            <h2 className='text-lg font-semibold text-gray-800'>التعهد و التوقيع .</h2>
            <Separator />
         </div>
         <FormField
            control={form.control}
            name='pledge'
            render={({ field }) => (
               <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                  <FormControl>
                     <Checkbox className='ml-2' checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                     <FormLabel>تعهد</FormLabel>
                     <FormDescription>أتعد بصحة البيانات المدخلة و على خلاف ذلك اتحمل كافة المسألات القانونية .</FormDescription>
                     <FormMessage />
                  </div>
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name='signature'
            render={({ field }) => (
               <FormItem>
                  <FormLabel>وقع هنا</FormLabel>
                  <FormControl>
                     <SignatureInput canvasRef={canvasRef} onSignatureChange={field.onChange} />
                  </FormControl>
                  <FormDescription>يرجى تقديم توقيعك أعلاه</FormDescription>
                  <FormMessage />
               </FormItem>
            )}
         />
      </div>
   );
};

export default SignatureForm;
