'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { promotionRulesService, PromotionRuleType } from '@/services/system-settings/promotion-rules.service';
import { ILookupItem, IPromotionRule, IPromotionRuleLookups } from '../page';

// '0' is the "any" option: the backend treats an empty condition as matching every value.
const ANY = '0';

const formSchema = z.object({
   jobDegreeId: z.string(),
   jobCategoryId: z.string(),
   academicAchievementId: z.string(),
   applicableLawId: z.string(),
   baseMonths: z.coerce.number({ invalid_type_error: 'أدخل عدد الأشهر' }).int('أدخل عدداً صحيحاً').min(1, 'المدة يجب أن تكون شهراً واحداً على الأقل').max(600, 'الحد الأقصى 600 شهر'),
   priority: z.coerce.number({ invalid_type_error: 'أدخل رقماً' }).int('أدخل عدداً صحيحاً').min(0, 'لا يمكن أن تكون سالبة').max(1000, 'الحد الأقصى 1000'),
   isActive: z.boolean()
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
   ruleType: PromotionRuleType;
   lookups: IPromotionRuleLookups;
   data?: IPromotionRule;
   title?: string;
   icon?: React.ReactNode;
   variant?: 'ghost' | 'outline' | 'default';
};

const toSelectValue = (id?: number | null) => (id ? String(id) : ANY);
const toId = (value: string) => (value && value !== ANY ? Number(value) : null);

const buildDefaults = (data?: IPromotionRule): FormValues => ({
   jobDegreeId: toSelectValue(data?.jobDegreeId),
   jobCategoryId: toSelectValue(data?.jobCategoryId),
   academicAchievementId: toSelectValue(data?.academicAchievementId),
   applicableLawId: toSelectValue(data?.applicableLawId),
   baseMonths: data?.baseMonths ?? (undefined as unknown as number),
   priority: data?.priority ?? 0,
   isActive: data?.isActive ?? true
});

const LookupSelect = ({ value, onChange, items, placeholder }: { value: string; onChange: (value: string) => void; items: ILookupItem[]; placeholder: string }) => (
   <Select value={value} onValueChange={onChange}>
      <FormControl>
         <SelectTrigger>
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
      </FormControl>
      <SelectContent>
         <SelectItem value={ANY}>الكل (أي قيمة)</SelectItem>
         {items.map((item) => (
            <SelectItem key={item.id} value={String(item.id)}>
               {item.name}
            </SelectItem>
         ))}
      </SelectContent>
   </Select>
);

const PromotionRuleForm = ({ ruleType, lookups, data, title, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [isSubmitting, setSubmitting] = useState(false);
   const router = useRouter();
   const periodLabel = ruleType === 1 ? 'مدة الترفيع (بالأشهر)' : 'مدة العلاوة (بالأشهر)';

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: buildDefaults(data)
   });

   useEffect(() => {
      if (open) form.reset(buildDefaults(data));
   }, [open, data, form]);

   // Categories belong to a degree: only offer the categories of the chosen degree.
   const watchedDegreeId = form.watch('jobDegreeId');
   const categoryOptions = useMemo(
      () => lookups.jobCategories.filter((c) => watchedDegreeId === ANY || String(c.degreeId) === watchedDegreeId),
      [lookups.jobCategories, watchedDegreeId]
   );

   const handleDegreeChange = (value: string, onChange: (value: string) => void) => {
      onChange(value);
      const categoryId = form.getValues('jobCategoryId');
      const category = lookups.jobCategories.find((c) => String(c.id) === categoryId);
      if (value !== ANY && category && String(category.degreeId) !== value) {
         form.setValue('jobCategoryId', ANY);
      }
   };

   async function onSubmit(values: FormValues) {
      setSubmitting(true);
      try {
         const payload = {
            ruleType,
            jobDegreeId: toId(values.jobDegreeId),
            jobCategoryId: toId(values.jobCategoryId),
            academicAchievementId: toId(values.academicAchievementId),
            applicableLawId: toId(values.applicableLawId),
            baseMonths: values.baseMonths,
            priority: values.priority,
            isActive: values.isActive
         };
         const res = data
            ? await promotionRulesService.updatePromotionRule(data.id, payload)
            : await promotionRulesService.createPromotionRule(payload);

         if (res?.succeeded !== true) {
            toast.error(res?.message || res?.detail || res?.title || 'فشل حفظ القاعدة.');
            return;
         }
         toast.success(data ? 'تم تعديل القاعدة. اضغط «إعادة احتساب الكل» لتطبيقها على الموظفين الحاليين.' : 'تمت إضافة القاعدة. اضغط «إعادة احتساب الكل» لتطبيقها على الموظفين الحاليين.');
         setOpen(false);
         router.refresh();
      } finally {
         setSubmitting(false);
      }
   }

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant={variant}>
               {title && <p>{title}</p>}
               {icon || <Plus className='h-4 w-4' />}
            </Button>
         </DialogTrigger>
         <DialogContent className='w-[560px] max-w-[95vw]'>
            <DialogHeader>
               <DialogTitle>
                  {data ? 'تعديل' : 'إضافة'} {ruleType === 1 ? 'قاعدة ترفيع' : 'قاعدة علاوة'}
               </DialogTitle>
            </DialogHeader>
            <Separator />
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4 py-2' autoComplete='off'>
                  <FormField
                     control={form.control}
                     name='jobDegreeId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الدرجة الوظيفية</FormLabel>
                           <LookupSelect value={field.value} onChange={(v) => handleDegreeChange(v, field.onChange)} items={lookups.jobDegrees} placeholder='الدرجة' />
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='jobCategoryId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الفئة الوظيفية</FormLabel>
                           <LookupSelect value={field.value} onChange={field.onChange} items={categoryOptions} placeholder='الفئة' />
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='academicAchievementId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>التحصيل الدراسي</FormLabel>
                           <LookupSelect value={field.value} onChange={field.onChange} items={lookups.academicAchievements} placeholder='التحصيل الدراسي' />
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='applicableLawId'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>القانون المطبق</FormLabel>
                           <LookupSelect value={field.value} onChange={field.onChange} items={lookups.laws} placeholder='القانون' />
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='baseMonths'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>{periodLabel}</FormLabel>
                           <FormControl>
                              <Input type='number' min={1} max={600} placeholder={ruleType === 1 ? 'مثال: 48' : 'مثال: 12'} {...field} value={field.value ?? ''} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='priority'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>الأولوية</FormLabel>
                           <FormControl>
                              <Input type='number' min={0} max={1000} {...field} />
                           </FormControl>
                           <p className='text-xs text-muted-foreground'>تُستخدم فقط عند تساوي قاعدتين في درجة التحديد.</p>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name='isActive'
                     render={({ field }) => (
                        <FormItem className='col-span-2 flex items-center justify-between rounded-md border p-3'>
                           <div>
                              <FormLabel>القاعدة فعالة</FormLabel>
                              <p className='text-xs text-muted-foreground'>القواعد المعطلة لا تدخل في الاحتساب.</p>
                           </div>
                           <FormControl>
                              <Switch checked={field.value} onCheckedChange={field.onChange} />
                           </FormControl>
                        </FormItem>
                     )}
                  />
                  <div className='col-span-2'>
                     <Button disabled={isSubmitting}>
                        {isSubmitting ? (
                           <>
                              <p className='ml-2'>حفظ البيانات</p> <Spinner />
                           </>
                        ) : (
                           'حفظ البيانات'
                        )}
                     </Button>
                  </div>
               </form>
            </Form>
            <Separator />
            <DialogFooter>
               <DialogClose asChild>
                  <Button variant='destructive'>أغلاق</Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default PromotionRuleForm;
