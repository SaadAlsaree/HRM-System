'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { AlignJustify, Settings2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
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
import { promotionRulesService, PromotionRuleType } from '@/services/system-settings/promotion-rules.service';
import PromotionRuleForm from './promotion-rule-form';
import { IPromotionRule, IPromotionRuleLookups } from '../page';

type Props = {
   ruleType: PromotionRuleType;
   data: IPromotionRule[];
   lookups: IPromotionRuleLookups;
};

const anyValue = (name?: string | null) => name || <span className='text-muted-foreground'>الكل</span>;

const PromotionRulesTable = ({ ruleType, data, lookups }: Props) => {
   const router = useRouter();
   const columns = ['#', 'الدرجة', 'الفئة', 'التحصيل الدراسي', 'القانون', ruleType === 1 ? 'مدة الترفيع' : 'مدة العلاوة', 'الأولوية', 'الحالة'];

   const handleDelete = async (rule: IPromotionRule) => {
      const res = await promotionRulesService.deletePromotionRule(rule.id, ruleType);
      if (res?.succeeded !== true) {
         toast.error(res?.message || 'فشل حذف القاعدة.');
         return;
      }
      toast.success('تم حذف القاعدة. اضغط «إعادة احتساب الكل» لتحديث الموظفين الحاليين.');
      router.refresh();
   };

   return (
      <Table>
         <TableHeader>
            <TableRow>
               {columns.map((label) => (
                  <TableHead key={label} className='font-bold'>
                     {label}
                  </TableHead>
               ))}
               <TableHead className='w-[100px] text-center'>
                  <AlignJustify className='justify-center' />
               </TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length === 0 && (
               <TableRow>
                  <TableCell colSpan={columns.length + 1} className='text-center py-6 text-muted-foreground'>
                     لا توجد قواعد. إن لم تُضف قواعد تُستخدم {ruleType === 1 ? '«مدة الترفيع» المحددة في الدرجات الوظيفية' : '«مدة العلاوة» المحددة في الفئات الوظيفية'}.
                  </TableCell>
               </TableRow>
            )}
            {data.map((rule) => (
               <TableRow key={rule.id} className={rule.isActive ? '' : 'opacity-60'}>
                  <TableCell>{rule.id}</TableCell>
                  <TableCell>{anyValue(rule.jobDegreeName)}</TableCell>
                  <TableCell>{anyValue(rule.jobCategoryName)}</TableCell>
                  <TableCell>{anyValue(rule.academicAchievementName)}</TableCell>
                  <TableCell>{anyValue(rule.applicableLawName)}</TableCell>
                  <TableCell className='font-semibold'>{rule.baseMonths} شهر</TableCell>
                  <TableCell>{rule.priority}</TableCell>
                  <TableCell>
                     {rule.isActive ? <Badge className='bg-green-600 hover:bg-green-600'>فعالة</Badge> : <Badge variant='secondary'>معطلة</Badge>}
                  </TableCell>
                  <TableCell>
                     <div className='flex items-center gap-1'>
                        <PromotionRuleForm ruleType={ruleType} lookups={lookups} data={rule} icon={<Settings2 className='h-4 w-4' />} variant='ghost' />
                        <AlertDialog>
                           <AlertDialogTrigger asChild>
                              <Button variant='ghost' size='icon' title='حذف'>
                                 <Trash2 className='h-4 w-4 text-destructive' />
                              </Button>
                           </AlertDialogTrigger>
                           <AlertDialogContent>
                              <AlertDialogHeader>
                                 <AlertDialogTitle>حذف القاعدة</AlertDialogTitle>
                                 <AlertDialogDescription>
                                    سيتم حذف القاعدة ولن تدخل في الاحتساب بعد الآن. إن أردت إيقافها مؤقتاً فعطّلها من شاشة التعديل بدلاً من الحذف.
                                 </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                 <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                 <AlertDialogAction onClick={() => handleDelete(rule)}>حذف</AlertDialogAction>
                              </AlertDialogFooter>
                           </AlertDialogContent>
                        </AlertDialog>
                     </div>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default PromotionRulesTable;
