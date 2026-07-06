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

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/spinner';
import { IEditDueDate } from '../page';
import EmployeeSearch, { IEmployeeSearch } from '@/app/_components/employee-search';
import { Textarea } from '@/components/ui/textarea';
import { changeDueDateService, type ChangeDueDateCalculationDetails } from '@/services/change-due-date.service';
import CalculationDetailsDisplay from '../../_shared/calculation-details-display';

const formSchema = z.object({
  employeeId: z.coerce.string().min(1, 'الرقم الوظيفي مطلوب'),
  orderNo: z.string().min(1, 'رقم الأمر الإداري مطلوب'),
  orderDate: z.string().min(1, 'تاريخ الأمر الإداري مطلوب'),
  note: z.string().optional(),
});

type Props = {
  data?: IEditDueDate;
  icon?: React.ReactNode;
  title: string;
  variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
};

const EditDueDateForm = ({ data, icon, title, variant }: Props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IEmployeeSearch | null>(null);
  const [calculation, setCalculation] = useState<ChangeDueDateCalculationDetails | null>(null);
  const [isLoadingCalc, setIsLoadingCalc] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeId: data?.employeeId ?? '',
      orderNo: data?.orderNo ?? '',
      orderDate: data?.orderDate ?? '',
      note: data?.note ?? '',
    },
  });

  const fetchLatestCalculation = async (employeeId: string) => {
    setIsLoadingCalc(true);
    setCalculation(null);
    try {
      const response = await changeDueDateService.getLatestCalculationDetails(employeeId);
      setCalculation(response?.data ?? null);
    } catch {
      setCalculation(null);
    } finally {
      setIsLoadingCalc(false);
    }
  };

  const handleUserSelect = (user: IEmployeeSearch | null) => {
    setSelectedUser(user);
    if (user?.employeeId) {
      form.setValue('employeeId', user.employeeId || '');
      fetchLatestCalculation(user.employeeId);
    } else {
      form.setValue('employeeId', '');
      setCalculation(null);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen && data?.employeeId) {
      fetchLatestCalculation(data.employeeId);
    }
    if (!isOpen) {
      setSelectedUser(null);
      setCalculation(null);
      form.reset();
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!data && !selectedUser) {
      toast.error('يجب اختيار موظف');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        employeeId: data?.employeeId ?? selectedUser?.employeeId ?? '',
        orderNo: values.orderNo,
        orderDate: values.orderDate,
        note: values.note,
        createBy: selectedUser?.employeeId ?? data?.employeeId ?? '',
      };

      if (data) {
        await changeDueDateService.updateChangeDueDate(data.id as string, payload);
        toast.success('تم تحديث البيانات بنجاح.');
      } else {
        await changeDueDateService.createChangeDueDate(payload);
        toast.success('تم حفظ البيانات بنجاح.');
      }

      form.reset();
      setSubmitting(false);
      setSelectedUser(null);
      setCalculation(null);
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('فشل في حفظ البيانات. يرجى المحاولة مرة أخرى.');
      setSubmitting(false);
    }
  }

  const canSave = Boolean(data || selectedUser);

  return (
    <div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button variant={variant}>
            <p>{title}</p>
            {icon ? icon : <Plus />}
          </Button>
        </DialogTrigger>
        <DialogContent className='w-[800px] max-w-[95vw] max-h-[85vh] overflow-y-auto'>
          <DialogHeader>
            <div className='flex items-center justify-between'>
              <DialogTitle>{title ? title : 'إعادة حساب تاريخ الاستحقاق'}</DialogTitle>
            </div>
          </DialogHeader>
          <Separator />

          {/* Section 1: Employee Selection (create mode only) */}
          {!data && (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col items-center justify-between w-full p-2'>
                <EmployeeSearch onSelectUser={handleUserSelect} />
              </div>
              {selectedUser && (
                <div className='grid grid-cols-3 gap-4 px-2'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm text-muted-foreground'>الاسم الرباعي واللقب</span>
                    <Input value={selectedUser.fullName} disabled />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm text-muted-foreground'>الرقم الوظيفي</span>
                    <Input value={selectedUser.jobCode} disabled />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm text-muted-foreground'>رقم الاضبارة</span>
                    <Input value={selectedUser.lotNumber} disabled />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Section 1: Employee Info (edit mode) */}
          {data && (
            <div className='grid grid-cols-3 gap-4 px-2'>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-muted-foreground'>الاسم الرباعي واللقب</span>
                <Input value={data.fullName} disabled />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-muted-foreground'>الرقم الوظيفي</span>
                <Input value={data.jobCode} disabled />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-muted-foreground'>رقم الاضبارة</span>
                <Input value={data.lotNumber} disabled />
              </div>
            </div>
          )}

          {/* Section 2: Stored Current Dates */}
          {(selectedUser || data) && (
            <>
              <Separator />
              <div className='px-2'>
                <h3 className='text-sm font-medium text-muted-foreground mb-2'>التواريخ المخزنة الحالية</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm text-muted-foreground'>تاريخ تسكين الدرجة</span>
                    <Input
                      value={selectedUser?.degreeDueDate ?? data?.currentDegreeDueDate ?? ''}
                      disabled
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className='text-sm text-muted-foreground'>تاريخ تسكين الفئة</span>
                    <Input
                      value={selectedUser?.categoryDueDate ?? data?.currentCategoryDueDate ?? ''}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Section 3 & 4: Last Calculation Result + Steps */}
          {(selectedUser || data) && (
            <>
              <Separator />
              <div className='px-2'>
                <h3 className='text-sm font-medium text-muted-foreground mb-2'>آخر نتيجة احتساب</h3>
                <CalculationDetailsDisplay calculation={calculation} isLoading={isLoadingCalc} />
              </div>
            </>
          )}

          <Separator />

          {/* Order Info Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2 px-2'>
              <div className='grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='orderNo'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رقم الأمر الإداري</FormLabel>
                        <FormControl>
                          <Input placeholder='' type='text' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='col-span-6'>
                  <FormField
                    control={form.control}
                    name='orderDate'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>تاريخ الأمر الإداري</FormLabel>
                        <FormControl>
                          <Input placeholder='تاريخ الأمر الإداري' type='date' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name='note'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الملاحظة</FormLabel>
                    <FormControl>
                      <Textarea placeholder='' className='resize-none' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isSubmitting || !canSave}>
                {isSubmitting ? (
                  <>
                    <p className='ml-2'>جاري الحفظ</p> <Spinner />
                  </>
                ) : data ? (
                  'إعادة حساب وتحديث السجل'
                ) : (
                  'طلب إعادة حساب'
                )}
              </Button>
            </form>
          </Form>

          <Separator />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant='destructive' onClick={() => { form.reset(); setSelectedUser(null); setCalculation(null); }}>
                إغلاق
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDueDateForm;
