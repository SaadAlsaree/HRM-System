import { UseFormReturn } from 'react-hook-form';
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Paperclip } from 'lucide-react';
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/ui/file-upload';
import { EmployeeInfo } from './register-schema';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import FileSvgDraw from '@/components/FileSvgDraw';

type Props = {
   form: UseFormReturn<EmployeeInfo>;
};

const AttachmentForm = ({ form }: Props) => {
   const [files, setFiles] = useState<File[] | null>(null);

   const dropZoneConfig = {
      maxFiles: 5,
      maxSize: 1024 * 1024 * 4,
      multiple: true
   };

   return (
      <div className='space-y-4 col-span-12'>
         <div>
            <h2 className='text-lg font-semibold text-gray-800'>المعلومات الشخصية</h2>
            <Separator />
         </div>

         <FormField
            control={form.control}
            name='attachment'
            render={({ field }) => (
               <FormItem>
                  <FormLabel>المرفقات</FormLabel>
                  <FileUploader
                     value={field.value || []}
                     onValueChange={(files) => {
                        field.onChange(files);
                        setFiles(files);
                     }}
                     dropzoneOptions={dropZoneConfig}
                     className='relative bg-background rounded-lg p-[1px]'
                  >
                     <FileInput className='outline-dashed outline-1 outline-gray-400'>
                        <div className='flex items-center justify-center flex-col pt-3 pb-4 w-full '>
                           <FileSvgDraw />
                        </div>
                     </FileInput>
                     <FileUploaderContent>
                        {files &&
                           files.length > 0 &&
                           files.map((file, i) => (
                              <FileUploaderItem key={i} index={i}>
                                 <Paperclip className='h-4 w-4 stroke-current' />
                                 <span className='left-1'>{file.name}</span>
                              </FileUploaderItem>
                           ))}
                     </FileUploaderContent>
                  </FileUploader>
                  <FormDescription>قم بتحميل صور الهوية لكل جانب .</FormDescription>
                  <FormMessage />
               </FormItem>
            )}
         ></FormField>
      </div>
   );
};

export default AttachmentForm;
