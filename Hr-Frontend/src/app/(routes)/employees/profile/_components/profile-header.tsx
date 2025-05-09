'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import { IEmployeeInfo } from '../[id]/page';
import { employeeService } from '@/services/Employee/employee.service';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
   data: IEmployeeInfo;
   onAvatarChange?: (newData: IEmployeeInfo) => void;
};

const ProfileHeader = ({ data, onAvatarChange }: Props) => {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [isUploading, setIsUploading] = useState(false);
   const router = useRouter();
   const handleAvatarClick = () => {
      fileInputRef.current?.click();
   };

   const handelPinned = async () => {
      try {
         const response = await employeeService.updateEmployeePinned(data.employeeId, { isPinned: !data?.isPinned });
         console.log(response);
         toast.success('تم تحديث الحالة بنجاح');
         router.refresh();
      } catch (error) {
         console.error('Error updating pinned status:', error);
      }
   };

   const addAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files?.length || !data?.employeeId) return;

      const file = event.target.files[0];

      try {
         setIsUploading(true);

         // Create proper payload object instead of FormData
         await employeeService.addEmployeeAvatar({
            EmployeeId: data.employeeId,
            File: file,
            CreateBy: data.employeeId // Using employeeId as CreateBy
         });

         // Get updated employee info
         const response = await employeeService.getEmployeeById(data.employeeId);

         if (response?.data) {
            let updatedData = response.data;

            // Format avatar if needed
            if (updatedData.fileExtension && updatedData.avatar) {
               const imageData = `data:image/${updatedData.fileExtension.replace('.', '')};base64,${updatedData.avatar}`;
               updatedData = {
                  ...updatedData,
                  avatar: imageData
               };
            }

            // Call the callback function if provided
            if (onAvatarChange) {
               onAvatarChange(updatedData);
            }
         }
      } catch (error) {
         console.error('Error uploading avatar:', error);
      } finally {
         setIsUploading(false);
      }
   };

   return (
      <div className='flex mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow gap-4'>
         <div className='space-y-2 items-center justify-center'>
            <Avatar className='w-32 h-32 border rounded-full hover:shadow-lg cursor-pointer active:shadow-none' onClick={handleAvatarClick}>
               <AvatarImage src={data?.avatar || '/avatar.jpg'} />
               <AvatarFallback>{isUploading ? '...' : '?'}</AvatarFallback>
            </Avatar>
            <input type='file' ref={fileInputRef} accept='image/*' className='hidden' onChange={addAvatar} />
            <div className='flex gap-8'>
               <div>
                  <p>{data?.typeOfJobName}</p>
               </div>
               <div className='w-full'>
                  <p className='text-sm text-gray-600 text-center'>الرقم الوظيفي</p>
                  <p className='font-medium text-center'>{data?.jobCode}</p>
               </div>
            </div>
         </div>
         <Separator orientation='vertical' className='bg-gray-600' />

         <div className='flex flex-col gap-x-4 gap-y-3 mt-6 mr-14 w-1/4'>
            <div>
               <p className='font-medium'>{data?.fullName}</p>
            </div>

            <div className='mt-6'>
               <p className='text-sm text-gray-600 '>مثبت على الملاك</p>
               <Checkbox checked={data?.isPinned} onCheckedChange={handelPinned} />
            </div>
         </div>

         {/* Data grid - 3 columns */}
         <div className='grid grid-cols-3 gap-x-4 gap-y-3 mt-6 text-right w-full'>
            {/* Column 1 */}
            <div>
               <p className='text-sm text-gray-600'>رقم الإضبارة</p>
               <p className='font-medium'>{data?.lotNumber}</p>
            </div>
            <div>
               <p className='text-sm text-gray-600'>رمز الموظف</p>
               <p className='font-medium'>{data?.lotNumber}</p>
            </div>
            <div>
               <p className='text-sm text-gray-600'>الرقم الإحصائي</p>
               <p className='font-medium'>{data?.statisticalIndex || data?.lotNumber}</p>
            </div>

            {/* Column 2 */}
            <div>
               <p className='text-sm text-gray-600'>رقم الباج</p>
               <p className='font-medium'>{data?.jobCode ? `PL${data.jobCode}` : 'PL58741'}</p>
            </div>
            <div>
               <p className='text-sm text-gray-600'>المنصب</p>
               <p className='font-medium'>{'موظف'}</p>
            </div>
            <div className='flex items-center'>
               <div className='flex-1'>
                  <p className='text-sm text-gray-600'>الحالة</p>
                  <Select>
                     <SelectTrigger>
                        <SelectValue placeholder='اختر الحالة' />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value='active'>مستمر في الخدمة</SelectItem>
                        <SelectItem value='inactive'>منقطع الخدمة</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileHeader;
