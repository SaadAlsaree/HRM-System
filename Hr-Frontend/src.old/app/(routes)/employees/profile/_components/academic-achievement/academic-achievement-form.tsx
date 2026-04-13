'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
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
import { formatDate } from '@/utils/format-date';
import { educationInfoService } from '@/services/education-info.service';
import { Checkbox } from '@/components/ui/checkbox';
//Services
import { academicCertificateTypeService } from '@/services/system-settings/academic-certificate-type.service';
import { studyTypeService } from '@/services/system-settings/study-type.service';
import { countryService } from '@/services/system-settings/country.service';
import { useQuery } from '@tanstack/react-query';
import { AcademicCertificateType, Country, StudyType } from '@/types';



const formSchema = z.object({
  countryId: z.coerce.number(),
  originalDocument: z.string().min(3).max(250),
  documentNo: z.string().min(3).max(100),
  documentDate: z.coerce.string(),
  documentSender: z.string().min(3).max(250),
  documentSendDate: z.coerce.string(),
  academicAchievementId: z.coerce.number(),
  academicFieldId: z.coerce.number().optional(),
  preciseAcademicFieldId: z.coerce.number().optional(),
  nameOfIssuingCertificate: z.string().min(3).max(250),
  startDate: z.coerce.string(),
  endDate: z.coerce.string(),
  graduationYear: z.coerce.string(),
  studyTypeId: z.coerce.number(),
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
  title: string;
  variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
  employeeId?: string;
};

const AcademicAchievementForm = ({ data, icon, title, variant, employeeId }: Props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const router = useRouter();

  // user react query to fetch options for academic achievement, country, study type
  const { data: academicAchievement} = useQuery<AcademicCertificateType[]>({
    queryKey: ['academic-achievement-options'],
    queryFn: async () => (await academicCertificateTypeService.getAcademicCertificateTypes()).data.items
  });
  const { data: country } = useQuery<Country[]>({
    queryKey: ['country-options'],
    queryFn: async () => (await countryService.getCountries()).data.items
  });
  const { data: studyType } = useQuery<StudyType[]>({
    queryKey: ['study-type-options'],
    queryFn: async () => (await studyTypeService.getStudyTypes()).data.items
  });


  const countryOptions = country?.map((country: Country) => ({
     label:   country.name,
     value: country.id
  }))
  
  const studyTypeOptions = studyType?.map((studyType: StudyType) => ({
     label: studyType.name,
     value: studyType.id
  }))
  
  const academicAchievementOptions = academicAchievement?.map((academicAchievement: AcademicCertificateType) => ({
     label: academicAchievement.name,
     value: academicAchievement.id
  }))
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeId: data?.employeeId,
      countryId: data?.countryName ? countryOptions?.find(c => c.label === data.countryName)?.value : undefined,
      originalDocument: data?.originalDocument ?? '',
      documentNo: data?.documentNo ?? '',
      documentDate: data?.documentDate,
      documentSender: data?.documentSender ?? '',
      documentSendDate: data?.documentSendDate,
      academicAchievementId: data?.academicAchievementName ? academicAchievementOptions?.find(a => a.label === data.academicAchievementName)?.value : undefined,
      academicFieldId: 1, // This would need to be populated from real data
      preciseAcademicFieldId: 1, // This would need to be populated from real data
      nameOfIssuingCertificate: data?.nameOfIssuingCertificate ?? '',
      startDate: data?.startDate,
      endDate: data?.endDate,
      graduationYear: data?.graduationYear ?? '',
      studyTypeId: data?.studyTypeName ? studyTypeOptions?.find(s => s.label === data.studyTypeName)?.value : undefined,
      isDuringRecruitment: data?.isDuringRecruitment ?? false,
      isDocumentVerify: data?.isDocumentVerify ?? false,
      isInHiring: false, // Default value for isInHiring
      notes: data?.notes ?? '',
      createBy: '',
      lastUpdateBy: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      if (data) {
        // Update existing education info
        const dataToUpdate = {
          countryId: values.countryId,
          originalDocument: values.originalDocument,
          documentNo: values.documentNo,
          documentDate: values.documentDate,
          documentSender: values.documentSender,
          documentSendDate: values.documentSendDate,
          academicAchievementId: values.academicAchievementId,
          academicFieldId: values.academicFieldId,
          preciseAcademicFieldId: values.preciseAcademicFieldId,
          nameOfIssuingCertificate: values.nameOfIssuingCertificate,
          startDate: values.startDate,
          endDate: values.endDate,
          graduationYear: values.graduationYear,
          studyTypeId: values.studyTypeId,
          isDuringRecruitment: values.isDuringRecruitment,
          isDocumentVerify: values.isDocumentVerify,
          isInHiring: values.isInHiring,
          notes: values.notes,
          lastUpdateBy: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
        };
        await educationInfoService.updateEducationInfo(data.id as string, dataToUpdate);
        toast(
          <pre className=' w-[340px] rounded-md'>
            <h1 className='text-xl'>تم تعديل البيانات بنجاح .</h1>
          </pre>
        );
      } else {
        // Create new education info
        values.employeeId = employeeId;
        values.documentDate = formatDate(new Date(values.documentDate));
        values.documentSendDate = formatDate(new Date(values.documentSendDate));
        values.startDate = formatDate(new Date(values.startDate));
        values.endDate = formatDate(new Date(values.endDate));
        values.lastUpdateBy = undefined;
        values.createBy = employeeId;
        await educationInfoService.createEducationInfo(values);

        toast(
          <pre className=' w-[340px] rounded-md'>
            <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
          </pre>
        );
      }
      form.reset();
      setSubmitting(false);
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
      setSubmitting(false);
      setOpen(false);
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={variant}>
            <p>{title}</p>
            {icon ? icon : <Plus />}
          </Button>
        </DialogTrigger>
        <DialogContent className='w-[700px] bg-gray-100 dark:bg-gray-800'>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
            </div>
          </DialogHeader>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 p-4 overflow-y-auto max-h-[70vh]'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='countryId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البلد</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field?.value?.toString()}>
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
                        <FormLabel>عنوان الوثيقة الدراسية</FormLabel>
                        <FormControl>
                          <Input placeholder='عنوان الوثيقة' type='text' {...field} />
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
                        <FormLabel>التحصيل الدراسي</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field?.value?.toString()}>
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
                          <Input placeholder='سنة التخرج' type='date' {...field} />
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
                        <Select onValueChange={field.onChange} defaultValue={field?.value?.toString()}>
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

              <Button disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <p className='ml-2'>حفظ البيانات</p> <Spinner />
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
                أغلاق
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AcademicAchievementForm;