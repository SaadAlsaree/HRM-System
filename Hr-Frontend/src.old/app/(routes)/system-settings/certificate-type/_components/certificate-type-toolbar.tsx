'use client';
import React from 'react';
import CertificateTypeForm from './certificate-type-form';

const CertificateTypeToolbar = () => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>نوع الشهادة الأكاديمة .</div>
            <div>
               <CertificateTypeForm title='أضافة' />
            </div>
         </div>
      </div>
   );
};

export default CertificateTypeToolbar;
