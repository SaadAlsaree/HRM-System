'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { promotionsService } from '@/services/promotions.service';

interface RecalculateResult {
   total?: number;
   succeeded?: number;
   failed?: number;
}

type Props = {
   variant?: 'default' | 'outline' | 'secondary';
};

// Due dates are only recalculated when an employee's own records change, so after editing
// promotion/allowance periods or rules this re-runs the calculation for everyone.
const RecalculateAllButton = ({ variant = 'outline' }: Props) => {
   const [isRunning, setRunning] = useState(false);
   const router = useRouter();

   const handleRecalculate = async () => {
      setRunning(true);
      try {
         const res = await promotionsService.recalculateAll();
         if (res?.succeeded !== true) {
            toast.error(res?.message || 'فشلت إعادة الاحتساب.');
            return;
         }
         const result: RecalculateResult = res?.data ?? {};
         if (result.failed) {
            toast.warning(`تمت إعادة احتساب ${result.succeeded} من ${result.total} موظف، وفشل ${result.failed}.`);
         } else {
            toast.success(`تمت إعادة احتساب الترفيع والعلاوة لـ ${result.total ?? 0} موظف.`);
         }
         router.refresh();
      } finally {
         setRunning(false);
      }
   };

   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant={variant} className='gap-2' disabled={isRunning}>
               <RefreshCw className={`h-4 w-4 ${isRunning ? 'animate-spin' : ''}`} />
               {isRunning ? 'جاري إعادة الاحتساب...' : 'إعادة احتساب الكل'}
            </Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>إعادة احتساب الترفيع والعلاوة</AlertDialogTitle>
               <AlertDialogDescription>
                  سيتم إعادة احتساب تاريخ استحقاق الترفيع والعلاوة لجميع الموظفين حسب المدد والقواعد الحالية.
                  استخدمها بعد تعديل مدد الدرجات أو الفئات أو قواعد الترفيع والعلاوة. قد تستغرق بعض الوقت مع عدد كبير من الموظفين.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>إلغاء</AlertDialogCancel>
               <AlertDialogAction onClick={handleRecalculate}>إعادة الاحتساب</AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};

export default RecalculateAllButton;
