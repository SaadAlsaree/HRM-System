import { z } from 'zod';
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { employeeDocumentsTypeService } from '@/services/Employee/employee-documents-type.service';
import { documentService } from '@/services/document.service';
import { toast } from 'sonner';
import { useEmployeeProfileRefresh } from '@/hooks/use-employee-profile-refresh';

const documentAttributeSchema = z.object({
   key: z.string().min(1, 'Key is required'),
   value: z.string().min(1, 'Value is required')
});

const formSchema = z.object({
   employeeId: z.string().optional(),
   employeeDocumentTypeId: z.coerce.number().min(1, 'نوع المستمسك مطلوب'),
   documentAttributes: z.array(documentAttributeSchema),
   notes: z.string().optional()
});

export type FormValues = z.infer<typeof formSchema>;

type Props = {
   icon?: React.ReactNode;
   title?: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const DocumentForm = ({ title, employeeId, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   const [documentTypes, setDocumentTypes] = useState<any>([]);
   const [loading, setLoading] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const { triggerRefresh } = useEmployeeProfileRefresh();

   const {
      control,
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         employeeId: employeeId,
         employeeDocumentTypeId: undefined,
         documentAttributes: [{ key: '', value: '' }],
         notes: ''
      }
   });

   useEffect(() => {
      const fetchDocumentTypes = async () => {
         setLoading(true);
         try {
            const data = await employeeDocumentsTypeService.getEmployeeDocumentsType();
            setDocumentTypes(data?.data?.items || data?.items || []);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchDocumentTypes();
   }, []);

   useEffect(() => {
      if (open) {
         reset({
            employeeId: employeeId,
            employeeDocumentTypeId: undefined,
            documentAttributes: [{ key: '', value: '' }],
            notes: ''
         });
      }
   }, [open, employeeId, reset]);

   const documentTypeOptions = (documentTypes || []).map((item: any) => ({
      value: item.id.toString(),
      label: item.name
   }));

   const { fields, append, remove } = useFieldArray({
      control,
      name: 'documentAttributes'
   });

   const onSubmit = async (data: FormValues) => {
      setIsSubmitting(true);
      try {
         const payload = {
            ...data,
            employeeId: employeeId || data.employeeId || ''
         };
         await documentService.createDocument(payload);
         toast.success('تم حفظ البيانات بنجاح .');
         setOpen(false);
         reset();
         triggerRefresh();
      } catch (error) {
         console.error('Error creating document:', error);
         toast.error('حدث خطأ أثناء حفظ المستمسك.');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant={variant}>
               {title && <p>{title}</p>}
               {icon ? icon : <Plus />}
            </Button>
         </DialogTrigger>
         <DialogContent className='w-[500px] max-w-[95vw]'>
            <DialogHeader>
               <div className='flex items-center justify-between'>
                  <DialogTitle>{title ? title : 'إضافة مستمسك'}</DialogTitle>
               </div>
            </DialogHeader>
            <Separator />
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' autoComplete='off'>
               {loading && <div className='text-sm text-muted-foreground'>جاري تحميل الأنواع...</div>}
               <div>
                  <Label htmlFor='employeeDocumentTypeId'>نوع المستمسك :</Label>
                  <Controller
                     name='employeeDocumentTypeId'
                     control={control}
                     render={({ field }) => (
                        <Select
                           onValueChange={(value) => field.onChange(Number(value))}
                           value={field.value ? field.value.toString() : ''}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder='اختر نوع المستمسك' />
                           </SelectTrigger>
                           <SelectContent>
                              {documentTypeOptions.map((item: { value: string; label: string }) => (
                                 <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  {errors.employeeDocumentTypeId && <p className='text-sm text-red-500 mt-1'>{errors.employeeDocumentTypeId.message}</p>}
               </div>
               <div>
                  <Label>معلومات المستمسك :</Label>
                  {fields.map((field, index) => (
                     <div key={field.id} className='flex mb-2 gap-2'>
                        <Input {...register(`documentAttributes.${index}.key`)} placeholder='العنوان مثال: رقم جواز السفر' />
                        <Input {...register(`documentAttributes.${index}.value`)} placeholder='القيمة مثال: 12345678' />
                        {fields.length > 1 && (
                           <Button type='button' variant='destructive' size='icon' className='px-3' onClick={() => remove(index)}>
                              <Trash2 className='h-4 w-4' />
                           </Button>
                        )}
                     </div>
                  ))}
                  <Button type='button' variant='outline' size='sm' onClick={() => append({ key: '', value: '' })} className='mt-2'>
                     إضافة معلومة
                  </Button>
               </div>

               <div>
                  <Label htmlFor='notes'>الملاحظات</Label>
                  <Textarea id='notes' {...register('notes')} placeholder='الملاحظات' />
                  {errors.notes && <p className='text-sm text-red-500 mt-1'>{errors.notes.message}</p>}
               </div>

               <Button type='submit' disabled={isSubmitting} className='w-full'>
                  {isSubmitting ? 'جاري الحفظ...' : 'حفظ'}
               </Button>
            </form>
            <Separator />
            <DialogFooter>
               <DialogClose asChild>
                  <Button variant='destructive' onClick={() => reset()}>
                     إغلاق
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default DocumentForm;
