import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type Props = {
   note: string;
};

const AdministrativeOrderNote = ({ note }: Props) => {
   const [open, setOpen] = useState(false);
   return (
      <div>
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button variant='outline'>عرض الملاحظات</Button>
            </DialogTrigger>
            <DialogContent className='w-[500px]'>
               <DialogHeader>
                  <div className='flex items-center justify-between'>
                     <DialogTitle>الملاحظات</DialogTitle>
                  </div>
               </DialogHeader>
               <Separator />
               <div className='mx-6'>
                  <h1 className='text-xl text-muted-foreground'>{note}</h1>
               </div>
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

export default AdministrativeOrderNote;
