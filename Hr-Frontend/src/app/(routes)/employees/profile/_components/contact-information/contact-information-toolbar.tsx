import React from 'react';
import ContactInformationForm from './contact-information-form';

type Props = {
   employeeId: string;
};
const ContactInformationToolbar = ({ employeeId }: Props) => {
   return (
      <div className='flex w-full'>
         <div className='flex items-center justify-between w-full p-2'>
            <div className='text-xl text-muted-foreground'>المعلومات الادارية .</div>
            <div>
               <ContactInformationForm title='أضافة' employeeId={employeeId} />
            </div>
         </div>
      </div>
   );
};

export default ContactInformationToolbar;
