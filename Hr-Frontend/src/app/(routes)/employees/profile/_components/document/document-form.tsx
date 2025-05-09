import { z } from 'zod';
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form'; // Import Controller
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Import Select components
import { Plus, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
// service
import { employeeDocumentsTypeService } from '@/services/Employee/employee-documents-type.service';
import { documentService } from '@/services/document.service';
import { toast } from 'sonner';

const documentAttributeSchema = z.object({
   key: z.string().min(1, 'Key is required'),
   value: z.string().min(1, 'Value is required')
});

const formSchema = z.object({
   employeeId: z.string().optional(),
   employeeDocumentTypeId: z.number().min(0, 'Document type ID must be at least 0'),
   documentAttributes: z.array(documentAttributeSchema),
   notes: z.string().optional()
});

export type FormValues = z.infer<typeof formSchema>;

type Props = {
   icon?: React.ReactNode;
   title: string;
   variant?: 'ghost' | 'outline' | 'default' | 'destructive' | 'link';
   employeeId?: string;
};

const DocumentForm = ({ title, employeeId, icon, variant }: Props) => {
   const [open, setOpen] = useState(false);
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [documentTypes, setDocumentTypes] = useState<any>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<unknown>(null);
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
         employeeDocumentTypeId: 0,
         documentAttributes: [{ key: '', value: '' }],
         notes: ''
      }
   });

   useEffect(() => {
      const fetchDocumentTypes = async () => {
         setLoading(true);
         try {
            const data = await employeeDocumentsTypeService.getEmployeeDocumentsType();
            setDocumentTypes(data);
         } catch (error) {
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      fetchDocumentTypes();
   }, []);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const documentTypeOptions = documentTypes.data?.items?.map((item: any) => {
      return { value: item.id, label: item.name };
   });

   const { fields, append, remove } = useFieldArray({
      control,
      name: 'documentAttributes'
   });

   const onSubmit = async (data: FormValues) => {
      try {
         const response = await documentService.createDocument(data);
         console.log(response);
         if (response.succeeded) {
            setOpen(false);
            toast(
               <pre className=' w-[340px] rounded-md'>
                  <h1 className='text-xl'>تم حفظ البيانات بنجاح .</h1>
               </pre>
            );
         }
         reset(); // Reset the form after submission
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button variant={variant}>
               <p>{title}</p>
               {icon ? icon : <Plus />}
            </Button>
         </DialogTrigger>
         <DialogContent className='w-[500px] bg-gray-100 dark:bg-gray-800'>
            <DialogHeader>
               <div className='flex items-center justify-between'>
                  <DialogTitle>{title ? title : 'تعديل'}</DialogTitle>
                  {/* <Button variant='ghost' size='icon' className='rounded-full' onClick={() => setOpen(false)}>
                <X className='h-4 w-4' />
             </Button> */}
               </div>
            </DialogHeader>
            <Separator />
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' autoComplete='off'>
               {loading && <div>Loading...</div>}
               {error && <div>Error: {String(error)}</div>}
               {documentTypeOptions && (
                  <div>
                     <Label htmlFor='employeeDocumentTypeId'>نوع المستمسك :</Label>
                     <Controller
                        name='employeeDocumentTypeId'
                        control={control}
                        render={({ field }) => (
                           <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
                              <SelectTrigger>
                                 <SelectValue placeholder='اختر نوع المستمسك' />
                              </SelectTrigger>
                              <SelectContent>
                                 {documentTypeOptions.map((item: { value: number; label: string }) => (
                                    <SelectItem key={item.value} value={item.value.toString()}>
                                       {item.label}
                                    </SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                        )}
                     />
                     {errors.employeeDocumentTypeId && <p className='text-sm text-red-500'>{errors.employeeDocumentTypeId.message}</p>}
                  </div>
               )}
               <div>
                  <Label>معلومات المستمسك :</Label>
                  {fields.map((field, index) => (
                     <div key={field.id} className='flex mb-2 gap-2'>
                        <Input {...register(`documentAttributes.${index}.key`)} placeholder='العنوان مثال: رقم جواز السفر' />
                        <Input {...register(`documentAttributes.${index}.value`)} placeholder='القيمة مثال: 12345678' />
                        <Button variant='destructive' size='icon' className='px-3' onClick={() => remove(index)}>
                           <Trash2 />
                        </Button>
                     </div>
                  ))}
                  <Button type='button' onClick={() => append({ key: '', value: '' })} className='mt-2'>
                     أضافة معلومة
                  </Button>
               </div>

               <div>
                  <Label htmlFor='notes'>الملاحظات</Label>
                  <Textarea id='notes' {...register('notes')} placeholder='الملاحظات' />
                  {errors.notes && <p className='text-sm text-red-500'>{errors.notes.message}</p>}
               </div>

               <Button type='submit'>حفض</Button>
            </form>
            <Separator />
            <DialogFooter>
               <DialogClose asChild>
                  <Button variant='destructive' onClick={() => reset()}>
                     أغلاق
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default DocumentForm;
