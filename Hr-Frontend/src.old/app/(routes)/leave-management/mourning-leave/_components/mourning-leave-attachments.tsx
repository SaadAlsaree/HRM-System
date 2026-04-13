import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Paperclip } from 'lucide-react';
import AttachmentForm, { IAttachments } from '@/app/_components/attachments/attachment-form';
import { toast } from 'sonner';
import AttachmentTable from '@/app/_components/attachments/attachment-table';
import { leavesService } from '@/services/Leaves/leaves.service';

type Props = {
   employeeId: string;
   PrimaryTableId: string;
};

const MourningLeaveAttachments = ({ PrimaryTableId, employeeId }: Props) => {
   const [open, setOpen] = useState(false);

   const handleSubmit: (attachment: IAttachments) => Promise<void> = async (attachment: IAttachments) => {
      const formData = new FormData();
      formData.append('File', attachment.File);
      formData.append('Tags.BookTitle', attachment.BookTitle || '');
      formData.append('Tags.BookNo', attachment.BookNo || '');
      formData.append('Tags.BookDate', attachment.BookDate || '');
      formData.append('employeeId', employeeId);
      formData.append('CreateBy', employeeId);
      formData.append('PrimaryTableId', PrimaryTableId);

      try {
         const response = await leavesService.uploadAttachment(formData);

         if (response) {
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ المرفقات بنجاح .</h1>
               </pre>
            );
            setOpen(false);
         } else {
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>حدث خطأ اثناء حفظ المرفقات .</h1>
               </pre>
            );
         }
      } catch (error) {
         console.error('Upload Failed:', error);
         toast(
            <pre className=' w-[340px] rounded-md'>
               <h1 className='text-xl'>حدث خطأ اثناء حفظ المرفقات .</h1>
            </pre>
         );
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant='outline' size='sm'>
               <Paperclip className='h-4 w-4 ml-2' />
               المرفقات
            </Button>
         </DialogTrigger>
         <DialogContent className='sm:max-w-[800px]'>
            <DialogHeader>
               <DialogTitle>المرفقات</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue='attachments'>
               <TabsList className='grid w-full grid-cols-2'>
                  <TabsTrigger value='attachments'>المرفقات</TabsTrigger>
                  <TabsTrigger value='add'>إضافة مرفق</TabsTrigger>
               </TabsList>
               <TabsContent value='attachments'>
                  <AttachmentTable employeeId={employeeId} PrimaryTableId={PrimaryTableId} />
               </TabsContent>
               <TabsContent value='add'>
                  <AttachmentForm onChange={handleSubmit} />
               </TabsContent>
            </Tabs>
            <Separator />
            <DialogFooter>
               <DialogClose asChild>
                  <Button type='button' variant='outline'>
                     إغلاق
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default MourningLeaveAttachments;