'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calculator } from 'lucide-react';
import { changeDueDateService } from '@/services/change-due-date.service';
import type { ChangeDueDateCalculationDetails } from '@/services/change-due-date.service';
import CalculationDetailsDisplay from './calculation-details-display';

type Props = {
  employeeId: string;
  employeeName?: string;
  variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

export default function CalculationDetailsDialog({ employeeId, employeeName, variant = 'ghost' }: Props) {
  const [open, setOpen] = useState(false);
  const [calculation, setCalculation] = useState<ChangeDueDateCalculationDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen && !calculation) {
      setIsLoading(true);
      try {
        const response = await changeDueDateService.getLatestCalculationDetails(employeeId);
        setCalculation(response?.data ?? null);
      } catch {
        setCalculation(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={variant} size='icon'>
          <Calculator className='h-4 w-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[800px] max-w-[95vw] max-h-[85vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>
            تفاصيل الاحتساب
            {employeeName && <span className='text-muted-foreground text-sm mr-2'>- {employeeName}</span>}
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <CalculationDetailsDisplay calculation={calculation} isLoading={isLoading} />
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='destructive'>إغلاق</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
