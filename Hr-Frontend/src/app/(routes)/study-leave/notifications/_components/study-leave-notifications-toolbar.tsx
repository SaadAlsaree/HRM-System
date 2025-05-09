'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { employeeService } from '@/services/Employee/employee.service';
import { toast } from 'sonner';

const StudyLeaveToolbar = () => {
    const [searchType, setSearchType] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const employees = await employeeService.getEmployees({
                [searchType]: searchTerm,
            });
            console.log('Search Results:', employees.data);
            toast.success('تم العثور على النتائج.');
        } catch (error) {
            console.error('Error searching for employees:', error);
            toast.error('فشل في البحث. يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <div className='flex w-full'>
            <div className='flex items-center justify-between w-full p-2'>
                <div className='text-xl text-muted-foreground'>إدارة إجازات الدراسة</div>
                <div className='flex items-center gap-2'>
                    <Select onValueChange={(value) => setSearchType(value)} defaultValue='name'>
                        <SelectTrigger className='w-[150px]'>
                            <SelectValue placeholder='نوع البحث' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='name'>الاسم</SelectItem>
                            <SelectItem value='motherName'>اسم الأم</SelectItem>
                            <SelectItem value='jobCode'>الرقم الوظيفي</SelectItem>
                            <SelectItem value='fileNumber'>رقم الاضبارة</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        placeholder='بحث...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='w-[200px]'
                    />
                    <Button onClick={handleSearch}>بحث</Button>
                </div>
            </div>
        </div>
    );
};

export default StudyLeaveToolbar;