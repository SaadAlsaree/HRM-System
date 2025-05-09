'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define Zod schemas for each step
const step1Schema = z.object({
   firstName: z.string().min(2, 'First name must be at least 2 characters'),
   lastName: z.string().min(2, 'Last name must be at least 2 characters')
});

const step2Schema = z.object({
   email: z.string().email('Invalid email address'),
   phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits')
});

const step3SchemaObject = z.object({
   password: z.string().min(8, 'Password must be at least 8 characters'),
   confirmPassword: z.string()
});

// Combine all schemas
const formSchema = z
   .object({
      ...step1Schema.shape,
      ...step2Schema.shape,
      ...step3SchemaObject.shape
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword']
   });

type FormValues = z.infer<typeof formSchema>;

export default function FormStepper() {
   const [step, setStep] = useState(1);

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      mode: 'onChange',
      defaultValues: {
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         password: '',
         confirmPassword: ''
      }
   });

   const onSubmit = (values: FormValues) => {
      console.log(values);
      // Handle form submission here
      form.reset();
      setStep(1);
   };

   const nextStep = async () => {
      let fields: (keyof FormValues)[] = [];
      switch (step) {
         case 1:
            fields = ['firstName', 'lastName'];
            break;
         case 2:
            fields = ['email', 'phone'];
            break;
         case 3:
            fields = ['password', 'confirmPassword'];
            break;
         default:
            break;
      }

      const isValid = await form.trigger(fields);
      if (isValid) {
         setStep((prev) => Math.min(prev + 1, 3));
      }
   };

   const prevStep = () => {
      setStep((prev) => Math.max(prev - 1, 1));
   };

   return (
      <Card className=''>
         <CardHeader>
            <CardTitle>Sign Up Form</CardTitle>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
               <div
                  className='bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out'
                  style={{ width: `${(step / 3) * 100}%` }}
               ></div>
            </div>
            <div className='flex justify-between mb-2'>
               {[1, 2, 3].map((num) => (
                  <div
                     key={num}
                     className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                     }`}
                  >
                     {num}
                  </div>
               ))}
            </div>
         </CardHeader>
         <CardContent>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                  {step === 1 && (
                     <>
                        <FormField
                           control={form.control}
                           name='firstName'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>First Name</FormLabel>
                                 <FormControl>
                                    <Input {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='lastName'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Last Name</FormLabel>
                                 <FormControl>
                                    <Input {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </>
                  )}
                  {step === 2 && (
                     <>
                        <FormField
                           control={form.control}
                           name='email'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Email</FormLabel>
                                 <FormControl>
                                    <Input {...field} type='email' />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='phone'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Phone</FormLabel>
                                 <FormControl>
                                    <Input {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </>
                  )}
                  {step === 3 && (
                     <>
                        <FormField
                           control={form.control}
                           name='password'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Password</FormLabel>
                                 <FormControl>
                                    <Input {...field} type='password' />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='confirmPassword'
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Confirm Password</FormLabel>
                                 <FormControl>
                                    <Input {...field} type='password' />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </>
                  )}
               </form>
            </Form>
         </CardContent>
         <CardFooter className='flex justify-between'>
            {step > 1 && (
               <Button variant='outline' onClick={prevStep}>
                  Previous
               </Button>
            )}
            {step < 3 ? <Button onClick={nextStep}>Next</Button> : <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>}
         </CardFooter>
      </Card>
   );
}
