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

const LeavesAttachment = ({ PrimaryTableId, employeeId }: Props) => {
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
               <pre className='w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ المرفقات بنجاح .</h1>
               </pre>
            );
         } else {
            toast(
               <pre className='w-[340px] rounded-md'>
                  <h1 className='text-xl'>حدث خطأ اثناء حفظ المرفقات .</h1>
               </pre>
            );
         }
      } catch (error) {
         console.error('Upload Failed:', error);
         toast(
            <pre className='w-[340px] rounded-md'>
               <h1 className='text-xl'>حدث خطأ اثناء حفظ المرفقات .</h1>
            </pre>
         );
      }
   };

   return (
      <div>
         <Dialog
            open={open}
            onOpenChange={(isOpen) => {
               setOpen(isOpen);
            }}
         >
            <DialogTrigger asChild>
               <Button variant='destructive' size='icon' className='rounded-full'>
                  <Paperclip className='h-4 w-4' />
               </Button>
            </DialogTrigger>
            <DialogContent className='w-[500px]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>المرفقات</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />

               <Tabs defaultValue='view' className='w-[400px]'>
                  <TabsList>
                     <TabsTrigger value='view'>عرض المرفقات</TabsTrigger>
                     <TabsTrigger value='form'>اضافة المرفقات</TabsTrigger>
                  </TabsList>
                  <TabsContent value='view'>
                     <AttachmentTable PrimaryTableId={PrimaryTableId} employeeId={employeeId} />
                  </TabsContent>
                  <TabsContent value='form'>
                     <AttachmentForm onChange={handleSubmit} />
                  </TabsContent>
               </Tabs>

               <Separator />
               <DialogFooter>
                  <DialogClose asChild>
                     <Button variant='destructive'>أغلاق</Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default LeavesAttachment;
