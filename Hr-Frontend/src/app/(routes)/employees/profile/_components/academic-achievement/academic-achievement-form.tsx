'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IEducationInfo } from './academic-achievement-table';
import { educationInfoService } from '@/services/education-info.service';
import { Checkbox } from '@/components/ui/checkbox';
//Services
import { academicCertificateTypeService } from '@/services/system-settings/academic-certificate-type.service';
import { studyTypeService } from '@/services/system-settings/study-type.service';
import { countryService } from '@/services/system-settings/country.service';
import { useQuery } from '@tanstack/react-query';
import { AcademicCertificateType, Country, StudyType } from '@/types';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const formSchema = z.object({
  countryId: z.coerce.number().min(1, 'البلد مطلوب'),
  originalDocument: z.string().min(1, 'عنوان الوثيقة مطلوب'),
  documentNo: z.string().min(1, 'رقم الوثيقة مطلوب'),
  documentDate: z.string().min(1, 'تاريخ الوثيقة مطلوب'),
  documentSender: z.string().min(1, 'الجهة المرسلة مطلوبة'),
  documentSendDate: z.string().optional(),
  academicAchievementId: z.coerce.number().min(1, 'التحصيل الدراسي مطلوب'),
  academicFieldId: z.coerce.number().optional(),
  preciseAcademicFieldId: z.coerce.number().optional(),
  nameOfIssuingCertificate: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  graduationYear: z.string().optional(),
  studyTypeId: z.coerce.number().min(1, 'نوع الدراسة مطلوب'),
  isDuringRecruitment: z.boolean().default(false),
  isDocumentVerify: z.boolean().default(false),
  isInHiring: z.boolean().default(false),
  notes: z.string().optional(),
  employeeId: z.string().optional(),
  createBy: z.string().optional(),
  lastUpdateBy: z.string().optional()
});

type Props = {
  data?: IEducationInfo;
  icon?: React.ReactNode;
  title?: string;
  variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
  employeeId?: string;
};

const formatDateForInput = (dateString?: string | null) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString.split('T')[0] || dateString;
  return date.toISOString().split('T')[0];
};

const AcademicAchievementForm = ({ data, icon, title, variant, employeeId }: Props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const { triggerRefresh } = useEmployeeProfileRefresh();
  const router = useRouter();

  const { data: academicAchievement } = useQuery<AcademicCertificateType[]>({
    queryKey: ['academic-achievement-options'],
    queryFn: async () => {
      const res = await academicCertificateTypeService.getAcademicCertificateTypes();
      return res?.data?.items || res?.items || [];
    }
  });

  const { data: country } = useQuery<Country[]>({
    queryKey: ['country-options'],
    queryFn: async () => {
      const res = await countryService.getCountries();
      return res?.data?.items || res?.items || [];
    }
  });

  const { data: studyType } = useQuery<StudyType[]>({
    queryKey: ['study-type-options'],
    queryFn: async () => {
      const res = await studyTypeService.getStudyTypes();
      return res?.data?.items || res?.items || [];
    }
  });

  const countryOptions = (country || []).map((c: Country) => ({
    label: c.name,
    value: c.id
  }));
  
  const studyTypeOptions = (studyType || []).map((s: StudyType) => ({
    label: s.name,
    value: s.id
  }));
  
  const academicAchievementOptions = (academicAchievement || []).map((a: AcademicCertificateType) => ({
    label: a.name,
    value: a.id
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeId: employeeId || '',
      countryId: undefined,
      originalDocument: '',
      documentNo: '',
      documentDate: '',
      documentSender: '',
      documentSendDate: '',
      academicAchievementId: undefined,
      academicFieldId: 1,
      preciseAcademicFieldId: 1,
      nameOfIssuingCertificate: '',
      startDate: '',
      endDate: '',
      graduationYear: '',
      studyTypeId: undefined,
      isDuringRecruitment: false,
      isDocumentVerify: false,
      isInHiring: false,
      notes: '',
      createBy: '',
      lastUpdateBy: ''
    }
  });

  useEffect(() => {
    if (open && data) {
      const matchedCountry = countryOptions.find(c => c.label === data.countryName)?.value;
      const matchedAcademic = academicAchievementOptions.find(a => a.label === data.academicAchievementName)?.value;
      const matchedStudyType = studyTypeOptions.find(s => s.label === data.studyTypeName)?.value;

      form.reset({
        employeeId: data.employeeId || employeeId || '',
        countryId: (data as any).countryId || matchedCountry || undefined,
        originalDocument: data.originalDocument || '',
        documentNo: data.documentNo || '',
        documentDate: formatDateForInput(data.documentDate),
        documentSender: data.documentSender || '',
        documentSendDate: formatDateForInput(data.documentSendDate),
        academicAchievementId: (data as any).academicAchievementId || matchedAcademic || undefined,
        academicFieldId: (data as any).academicFieldId || 1,
        preciseAcademicFieldId: (data as any).preciseAcademicFieldId || 1,
        nameOfIssuingCertificate: data.nameOfIssuingCertificate || '',
        startDate: formatDateForInput(data.startDate),
        endDate: formatDateForInput(data.endDate),
        graduationYear: data.graduationYear ? String(data.graduationYear) : '',
        studyTypeId: (data as any).studyTypeId || matchedStudyType || undefined,
        isDuringRecruitment: data.isDuringRecruitment ?? false,
        isDocumentVerify: data.isDocumentVerify ?? false,
        isInHiring: (data as any).isInHiring ?? false,
        notes: data.notes || '',
        createBy: '',
        lastUpdateBy: ''
      });
    } else if (open && !data) {
      form.reset({
        employeeId: employeeId || '',
        countryId: undefined,
        originalDocument: '',
        documentNo: '',
        documentDate: '',
        documentSender: '',
        documentSendDate: '',
        academicAchievementId: undefined,
        academicFieldId: 1,
        preciseAcademicFieldId: 1,
        nameOfIssuingCertificate: '',
        startDate: '',
        endDate: '',
        graduationYear: '',
        studyTypeId: undefined,
        isDuringRecruitment: false,
        isDocumentVerify: false,
        isInHiring: false,
        notes: '',
        createBy: '',
        lastUpdateBy: ''
      });
    }
  }, [open, data, employeeId, country, academicAchievement, studyType, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const formattedValues = {
        ...values,
        documentSendDate: values.documentSendDate ? values.documentSendDate : undefined,
        startDate: values.startDate ? values.startDate : undefined,
        endDate: values.endDate ? values.endDate : undefined,
        nameOfIssuingCertificate: values.nameOfIssuingCertificate ? values.nameOfIssuingCertificate : undefined,
        documentDate: values.documentDate ? values.documentDate : undefined,
        graduationYear: values.graduationYear ? values.graduationYear : undefined,
        notes: values.notes ? values.notes : undefined
      };

      if (data) {
        const dataToUpdate = {
          ...formattedValues,
          employeeId: data.employeeId || employeeId,
          lastUpdateBy: employeeId || ''
        };
        await educationInfoService.updateEducationInfo(data.id as string, dataToUpdate);
        toast.success('تم تعديل البيانات بنجاح .');
      } else {
        const dataToCreate = {
          ...formattedValues,
          employeeId: employeeId || '',
          createBy: employeeId || '',
          lastUpdateBy: undefined
        };
        await educationInfoService.createEducationInfo(dataToCreate);
        toast.success('تم حفظ البيانات بنجاح .');
      }
      form.reset();
      setSubmitting(false);
      setOpen(false);
      triggerRefresh();
      router.refresh();
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('حدث خطأ أثناء حفظ البيانات. يرجى المحاولة مرة أخرى.');
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={variant}>
            {title && <p>{title}</p>}
            {icon ? icon : <Plus />}
          </Button>
        </DialogTrigger>
        <DialogContent className='w-[700px] max-w-[95vw] bg-gray-100 dark:bg-gray-800'>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>{data ? 'تعديل التحصيل الدراسي' : (title ? title : 'إضافة تحصيل دراسي')}</DialogTitle>
            </div>
          </DialogHeader>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3 p-4 overflow-y-auto max-h-[70vh]'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='countryId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البلد</FormLabel>
                        <Select
                          value={field.value ? String(field.value) : ''}
                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='اختر البلد' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countryOptions?.map((option) => (
                              <SelectItem key={option.value} value={String(option.value || '')}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='originalDocument'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>التحصيل الدراسي عند التعين</FormLabel>
                        <FormControl>
                          <Input placeholder='التحصيل الدراسي ' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='documentNo'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رقم الوثيقة</FormLabel>
                        <FormControl>
                          <Input placeholder='رقم الوثيقة' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='documentDate'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormLabel>تاريخ الوثيقة</FormLabel>
                        <Input type='date' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='documentSender'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الجهة المرسلة للوثيقة</FormLabel>
                        <FormControl>
                          <Input placeholder='الجهة المرسلة' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='documentSendDate'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormLabel>تاريخ الارسال</FormLabel>
                        <Input type='date' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='academicAchievementId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>التحصيل الدراسي بعد التعين</FormLabel>
                        <Select
                          value={field.value ? String(field.value) : ''}
                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='اختر التحصيل الدراسي' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {academicAchievementOptions?.map((option) => (
                              <SelectItem key={option.value} value={String(option.value || '')}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='nameOfIssuingCertificate'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>جهة منح الشهادة</FormLabel>
                        <FormControl>
                          <Input placeholder='جهة منح الشهادة' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='startDate'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormLabel>تاريخ بدء الدراسة</FormLabel>
                        <Input type='date' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='endDate'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <FormLabel>تاريخ انتهاء الدراسة</FormLabel>
                        <Input type='date' {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='graduationYear'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>سنة التخرج</FormLabel>
                        <FormControl>
                          <Input placeholder='سنة التخرج' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='studyTypeId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نوع الدراسة</FormLabel>
                        <Select
                          value={field.value ? String(field.value) : ''}
                          onValueChange={(val) => field.onChange(val ? Number(val) : undefined)}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='اختر نوع الدراسة' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {studyTypeOptions?.map((option) => (
                              <SelectItem key={option.value} value={String(option.value || '')}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-4'>
                  <FormField
                    control={form.control}
                    name='isDuringRecruitment'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-4'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none me-3'>
                          <FormLabel>
                            الشهادة ممنوحة بعد التعيين
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='col-span-4'>
                  <FormField
                    control={form.control}
                    name='isDocumentVerify'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-4'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none me-3'>
                          <FormLabel>
                            تأكيد صحة الصدور
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className='col-span-4'>
                  <FormField
                    control={form.control}
                    name='isInHiring'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-start space-x-3 space-y-0 py-4'>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className='space-y-1 leading-none me-3'>
                          <FormLabel>
                            ضمن التعيين
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                  <FormField
                    control={form.control}
                    name='notes'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ملاحظات</FormLabel>
                        <FormControl>
                          <Input placeholder='ملاحظات' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button disabled={isSubmitting} className='w-full'>
                {isSubmitting ? (
                  <>
                    <p className='ml-2'>جاري الحفظ...</p> <Spinner />
                  </>
                ) : (
                  'حفظ البيانات'
                )}
              </Button>
            </form>
          </Form>
          <Separator />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='destructive' onClick={() => form.reset()}>
                إغلاق
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AcademicAchievementForm;