'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

import { Form } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// schema
import { EmployeeInfo, formSchema } from './register-schema';
import BasicInfoForm from './basic-info-form';
import JobInfoForm from './job-info-form';
import AttachmentForm from './attachment-form';
import SignatureForm from './signature-form';
import { Separator } from '@/components/ui/separator';

const RegisterForm = () => {
   const [step, setStep] = useState(1);

   const form = useForm<EmployeeInfo>({
      resolver: zodResolver(formSchema),
      mode: 'onChange',
      defaultValues: {
         first_name: 'الأسم الأول',
         second_name: 'الأسم الثاني',
         third_name: 'الأسم الثالث',
         fourth_name: 'الأسم الرابع',
         last_name: 'اللقب',
         date_of_birth: new Date(),
         employee_gender: '1',
         place_of_birth: 'بغداد',
         mother_first_name: 'اسم الأم الأول',
         mother_second_name: 'اسم الأم الثاني',
         mother_third_name: 'اسم الأم الثالث',
         id_number: '19876522142',
         issuing_authority: 'بغداد',

         email: 'saad@INSS.com',
         // Info Job
         job_number: '1234567890'
      }
   });

   const onSubmit = (values: EmployeeInfo) => {
      console.log(values);
      // Handle form submission here
      form.reset();
      setStep(5);
   };

   const nextStep = async () => {
      let fields: (keyof EmployeeInfo)[] = [];
      switch (step) {
         case 1:
            fields = [
               'first_name',
               'second_name',
               'third_name',
               'fourth_name',
               'last_name',
               'date_of_birth',
               'place_of_birth',
               'employee_gender',
               'mother_first_name',
               'mother_second_name',
               'mother_third_name',
               'id_number',
               'issuing_authority',
               'phone',
               'email'
            ];

            break;
         case 2:
            fields = [
               'job_number',
               'job_grade',
               'category',
               'job_title',
               'job_specialization',
               'job_position',
               'date_of_appointment',
               'appointment_batch',
               'organization',
               'directorate',
               'department'
            ];
            break;
         case 3:
            fields = ['attachment'];
            console.log(form.getValues('attachment'));
            break;
         case 4:
            fields = ['signature', 'pledge'];
            break;
         case 5:
            break;
         default:
            break;
      }

      const isValid = await form.trigger(fields);
      if (isValid) {
         setStep((prev) => Math.min(prev + 1, 5));
      }
   };

   const prevStep = () => {
      setStep((prev) => Math.max(prev - 1, 1));
   };

   return (
      <Card className='w-full '>
         <CardHeader>
            <CardTitle>بيانات تسجيل جديد .</CardTitle>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
               <div
                  className='bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out'
                  style={{ width: `${(step / 5) * 100}%` }}
               ></div>
            </div>
            <div className='flex justify-between mb-2'>
               {[1, 2, 3, 4, 5].map((num) => (
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
                  {step === 1 && <BasicInfoForm form={form} />}
                  {step === 2 && <JobInfoForm form={form} />}
                  {step === 3 && <AttachmentForm form={form} />}
                  {step === 4 && <SignatureForm form={form} />}
                  {step === 5 && (
                     <div>
                        <Separator />
                        <div className='flex flex-col items-center text-muted-foreground mt-6  gap-4'>
                           <h2 className='text-2xl font-semibold text-gray-800'>تم تقديم الطلب بنجاح .</h2>
                           <p className='text-sm'>تم تقديم طلبك بنجاح و سيتم تدقيق البيانات لتحقق من صحتها .</p>
                           <p className='text-sm'>سوف يتم تفعيل حسابك بعد أكمال عملية تدقيق البيانات ليتسنا لك أستخدام مميزات المنصة .</p>
                           <Button className='mt-6' onClick={() => setStep(1)}>
                              إعادة التقديم
                           </Button>
                        </div>
                     </div>
                  )}
               </form>
            </Form>
         </CardContent>
         <CardFooter className='flex justify-between'>
            {step > 1 && step < 5 && (
               <Button variant='outline' onClick={prevStep}>
                  السابق
               </Button>
            )}

            {step < 4 && <Button onClick={nextStep}>التالي</Button>}

            {step === 4 && <Button onClick={form.handleSubmit(onSubmit)}>حفظ</Button>}
         </CardFooter>
      </Card>
   );
};

export default RegisterForm;
