import React from 'react';
import OrganizationForm from './organization-form';

const OrganizationToolbar = () => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>الدوائر .</div>
            <div>
               <OrganizationForm title='أضافة' />
            </div>
         </div>
      </div>
   );
};

export default OrganizationToolbar;
