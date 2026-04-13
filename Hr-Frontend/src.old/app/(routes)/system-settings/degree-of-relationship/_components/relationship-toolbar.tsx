import React from 'react';
import RelationshipForm from './relationship-form';

const RelationshipToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>درجة القرابة .</div>
               <div>
                  <RelationshipForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default RelationshipToolbar;
