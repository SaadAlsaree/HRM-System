import React from 'react';
import BookTypeForm from './book-type-form';

const BookTypeToolbar = () => {
   return (
      <div>
         <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
               <div className='text-xl text-muted-foreground'>نوع الكتاب .</div>
               <div>
                  <BookTypeForm title='أضافة' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookTypeToolbar;
