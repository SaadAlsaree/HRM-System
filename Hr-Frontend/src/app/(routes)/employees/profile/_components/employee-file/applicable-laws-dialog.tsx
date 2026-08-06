'use client';
import React, { useState, useEffect } from 'react';
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { applicableLawServiceClient } from '@/services/applicable-law.service';
import Spinner from '@/components/spinner';
import { Scale, FileText } from 'lucide-react';

type Props = {
   employeeId: string;
};

interface ApplicableLawItem {
   id: string;
   lawId?: number;
   lawNamw?: string;
   lawName?: string;
   note?: string;
   status?: number;
}

const ApplicableLawsDialog = ({ employeeId }: Props) => {
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [laws, setLaws] = useState<ApplicableLawItem[]>([]);

   useEffect(() => {
      if (open && employeeId) {
         fetchLaws();
      }
   }, [open, employeeId]);

   const fetchLaws = async () => {
      setLoading(true);
      try {
         const response = await applicableLawServiceClient.getApplicableLaw({ employeeId });
         const items = response?.data?.items || response?.data || [];
         setLaws(Array.isArray(items) ? items : []);
      } catch (error) {
         console.error('Failed to fetch applicable laws:', error);
         setLaws([]);
      } finally {
         setLoading(false);
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button size='sm' variant='outline' className='h-8 px-3 text-xs'>
               عرض
            </Button>
         </DialogTrigger>
         <DialogContent className='sm:max-w-lg'>
            <DialogHeader>
               <DialogTitle className='flex items-center gap-2 text-base font-semibold'>
                  <Scale className='w-5 h-5 text-primary' />
                  <span>القوانين المشمول بها</span>
               </DialogTitle>
            </DialogHeader>

            <div className='py-4'>
               {loading ? (
                  <div className='flex items-center justify-center py-8'>
                     <Spinner />
                  </div>
               ) : laws.length === 0 ? (
                  <div className='flex flex-col items-center justify-center py-8 text-muted-foreground gap-2'>
                     <FileText className='w-8 h-8 opacity-40' />
                     <p className='text-sm'>لا توجد قوانين مشمول بها مسجلة لهذا الموظف</p>
                  </div>
               ) : (
                  <div className='space-y-3 max-h-[350px] overflow-y-auto pr-1'>
                     {laws.map((law, index) => (
                        <div
                           key={law.id || index}
                           className='p-3 border rounded-lg bg-card hover:bg-muted/40 transition-colors'
                        >
                           <div className='flex items-center justify-between'>
                              <span className='font-medium text-sm'>
                                 {law.lawNamw || law.lawName || `قانون رقم ${law.lawId ?? index + 1}`}
                              </span>
                           </div>
                           {law.note && (
                              <p className='text-xs text-muted-foreground mt-1.5 leading-relaxed'>
                                 {law.note}
                              </p>
                           )}
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default ApplicableLawsDialog;
