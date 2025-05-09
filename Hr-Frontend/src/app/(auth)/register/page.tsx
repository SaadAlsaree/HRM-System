import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import RegisterForm from './_components/register-form/index';

const RegisterPage = () => {
   return (
      <section className='bg-white'>
         <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
            <aside className='relative block h-16 lg:order-last lg:col-span-4 lg:h-full xl:col-span-5'>
               <img
                  alt=''
                  src='https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  className='absolute inset-0 h-full w-full object-cover'
               />
            </aside>

            <div className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-8 lg:px-16 lg:py-12 xl:col-span-7'>
               <div className=''>
                  <Image src='/logoINSS.png' alt='Squid Logo' width={50} height={50} />

                  <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>جهاز الأمن الوطني</h1>

                  <p className='mt-4 leading-relaxed text-gray-500'>المنصة الرقمية لأدارة المهام والقضايا والتواصل بين الأقسام والموظفين</p>
                  <div className='my-6'>
                     <Separator />
                  </div>

                  <div className='mt-6 w-full'>
                     <RegisterForm />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default RegisterPage;
