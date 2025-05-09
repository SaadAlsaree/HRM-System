import React from 'react';
import CountryForm from './country-form';

const CountryToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>البلدان .</div>
               <div>
                  <CountryForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CountryToolbar;
