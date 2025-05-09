import React from 'react';

import useGetAttachments from '@/hooks/use-get-attachment';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import AttachmentViewer from './attachment-viewer';

type Props = {
   employeeId?: string | null;
   PrimaryTableId?: string | null;
};
const AttachmentTable = ({ PrimaryTableId, employeeId }: Props) => {
   const { attachments, error, loading } = useGetAttachments({ PrimaryTableId, employeeId });

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: حدث خطاء اثناء تحميل البيانات !!</p>;

   if (attachments.length === 0) return <p>لا يوجد مرفقات</p>;

   return (
      <div>
         <ScrollArea className='h-[380px] p-4'>
            {attachments.map((attachment) => (
               <div
                  key={attachment.id}
                  className='flex justify-between bg-white dark:bg-gray-950 items-center gap-4 border rounded-[8px] px-4 py-2 mb-3'
               >
                  <div className='flex items-center gap-4'>
                     <AttachmentViewer AttachmentId={attachment.id} employeeId={employeeId as string} />
                     {/* <Paperclip size={24} className='text-gray-700' />
                     <p className='text-[12px] text-neutral-500'>{attachment?.File?.name}</p> */}
                  </div>
                  <div className='grow'>
                     <div className='flex justify-between mb-2'>
                        <p className='text-[16px] font-bold'>{attachment?.attachmentProperty?.BookNo} </p>
                        <Badge variant='outline'>{attachment?.attachmentProperty?.BookDate}</Badge>
                     </div>
                     <p className='text-[12px] text-neutral-500'>{attachment?.attachmentProperty?.BookTitle}</p>
                  </div>
               </div>
            ))}
         </ScrollArea>
      </div>
   );
};

export default AttachmentTable;
