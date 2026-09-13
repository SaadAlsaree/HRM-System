import React from 'react';
import TypeOfSeniorityForm from './type-of-seniority-form';

const TypeOfSeniorityToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع القدم .</div>
               <div>
                  <TypeOfSeniorityForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TypeOfSeniorityToolbar;
