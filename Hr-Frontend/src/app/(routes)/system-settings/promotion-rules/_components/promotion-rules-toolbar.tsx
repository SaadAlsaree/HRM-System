import React from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PromotionRuleType } from '@/services/system-settings/promotion-rules.service';
import RecalculateAllButton from '@/app/(routes)/promotion/_components/recalculate-all-button';
import PromotionRuleForm from './promotion-rule-form';
import { IPromotionRuleLookups } from '../page';

type Props = {
   ruleType: PromotionRuleType;
   lookups: IPromotionRuleLookups;
};

const tabs: { type: PromotionRuleType; label: string }[] = [
   { type: 1, label: 'قواعد الترفيع (الدرجة)' },
   { type: 2, label: 'قواعد العلاوة (الفئة)' }
];

const PromotionRulesToolbar = ({ ruleType, lookups }: Props) => {
   return (
      <div className='flex flex-col w-full gap-2 p-2'>
         <div className='flex flex-wrap items-center justify-between gap-2'>
            <div className='text-xl text-muted-foreground'>قواعد الترفيع والعلاوة .</div>
            <div className='flex items-center gap-2'>
               <RecalculateAllButton />
               <PromotionRuleForm title='أضافة قاعدة' ruleType={ruleType} lookups={lookups} />
            </div>
         </div>

         <div className='flex items-center gap-1 border-b'>
            {tabs.map((tab) => (
               <Link
                  key={tab.type}
                  href={`?type=${tab.type}`}
                  className={cn(
                     'px-4 py-2 text-sm border-b-2 -mb-px transition-colors',
                     tab.type === ruleType
                        ? 'border-primary text-primary font-semibold'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                  )}
               >
                  {tab.label}
               </Link>
            ))}
         </div>

         <div className='flex gap-2 text-xs text-muted-foreground bg-muted/40 rounded-md p-3 leading-6'>
            <Info className='h-4 w-4 shrink-0 mt-1' />
            <div>
               {ruleType === 1
                  ? 'تحدد مدة الترفيع بالأشهر. الشرط الفارغ يعني «أي قيمة». عند تطابق أكثر من قاعدة تُعتمد الأكثر تحديداً ثم الأعلى أولوية، وإن لم تطابق أي قاعدة تُستخدم «مدة الترفيع» المحددة في الدرجة الوظيفية.'
                  : 'تحدد مدة العلاوة السنوية بالأشهر. الشرط الفارغ يعني «أي قيمة». عند تطابق أكثر من قاعدة تُعتمد الأكثر تحديداً ثم الأعلى أولوية، وإن لم تطابق أي قاعدة تُستخدم «مدة العلاوة» المحددة في الفئة الوظيفية.'}
               <br />
               بعد إضافة أو تعديل القواعد اضغط «إعادة احتساب الكل» لتحديث تواريخ الاستحقاق للموظفين الحاليين.
            </div>
         </div>
      </div>
   );
};

export default PromotionRulesToolbar;
