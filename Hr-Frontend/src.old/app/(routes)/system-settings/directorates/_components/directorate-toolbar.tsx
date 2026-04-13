'use client';
import React from 'react';
import DirectorateForm from './directorate-form';

export interface org {
   id: number;
   name: string;
}
type Props = {
   data: org[];
};
const DirectorateToolbar = ({ data }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المديريات .</div>
            <div>
               <DirectorateForm title='أضافة' orgData={data} />
            </div>
         </div>
      </div>
   );
};

export default DirectorateToolbar;
