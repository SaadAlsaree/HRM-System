// components/EmployeeForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Briefcase, GraduationCap, FileText } from 'lucide-react';

const EmployeeForm = ({ selectedResult }) => {
    const [formData, setFormData] = useState({
        employeeName: '',
        fileNumber: '',
        jobNumber: '',
        statisticalNumber: '',
        employeeStatus: '',
        currentGrade: '',
        jobTitle: '',
        gradeDate: '',
        currentCategory: '',
        categoryDate: '',
        appointmentOrderNumber: '',
        appointmentOrderDate: '',
        directOrderNumber: '',
        directOrderDate: '',
        directorate: '',
        subDirectorate: '',
        academicAchievementBeforeAppointment: '',
        academicFieldBeforeAppointment: '',
        graduationYearBeforeAppointment: '',
        academicAchievementAfterAppointment: '',
        academicFieldAfterAppointment: '',
        graduationYearAfterAppointment: '',
        notes: '',
        hasPromotionOrAllowance: '-----',
    });

    useEffect(() => {
        if (selectedResult) {
            setFormData({
                ...formData,
                employeeName: selectedResult.employeeName,
                fileNumber: selectedResult.fileNumber,
                jobNumber: selectedResult.jobNumber,
                statisticalNumber: selectedResult.statisticalNumber,
            });
        }
    }, [selectedResult]);

    return (
        <div className="space-y-6">
            {/* معلومات الموظف الأساسية */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        <span>معلومات الموظف الأساسية</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="اسم الموظف"
                        value={formData.employeeName}
                        readOnly
                    />
                    <Input
                        label="رقم الاضبارة"
                        value={formData.fileNumber}
                        readOnly
                    />
                    <Input
                        label="الرقم الوظيفي"
                        value={formData.jobNumber}
                        readOnly
                    />
                    <Input
                        label="الرقم الاحصائي"
                        value={formData.statisticalNumber}
                        readOnly
                    />
                </CardContent>
            </Card>

            {/* المعلومات الوظيفية */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        <span>المعلومات الوظيفية</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="حالة الموظف"
                        value={formData.employeeStatus}
                        readOnly
                    />
                    <Input
                        label="الدرجة الحالية"
                        value={formData.currentGrade}
                        readOnly
                    />
                    <Input
                        label="العنوان الوظيفي"
                        value={formData.jobTitle}
                        readOnly
                    />
                    <Input
                        label="تاريخ تسكين الدرجة"
                        value={formData.gradeDate}
                        readOnly
                    />
                    <Input
                        label="الفئة الحالية"
                        value={formData.currentCategory}
                        readOnly
                    />
                    <Input
                        label="تاريخ تسكين الفئة"
                        value={formData.categoryDate}
                        readOnly
                    />
                    <Input
                        label="رقم الأمر الإداري بالتعيين"
                        value={formData.appointmentOrderNumber}
                        readOnly
                    />
                    <Input
                        label="تاريخ الأمر الإداري بالتعيين"
                        value={formData.appointmentOrderDate}
                        readOnly
                    />
                    <Input
                        label="رقم الأمر الإداري بالمباشرة"
                        value={formData.directOrderNumber}
                        readOnly
                    />
                    <Input
                        label="تاريخ الأمر الإداري بالمباشرة"
                        value={formData.directOrderDate}
                        readOnly
                    />
                    <Input
                        label="الدائرة"
                        value={formData.directorate}
                        readOnly
                    />
                    <Input
                        label="المديرية"
                        value={formData.subDirectorate}
                        readOnly
                    />
                </CardContent>
            </Card>

            {/* المعلومات الأكاديمية */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        <span>المعلومات الأكاديمية</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="التحصيل الدراسي عند التعيين"
                        value={formData.academicAchievementBeforeAppointment}
                        readOnly
                    />
                    <Input
                        label="التخصص الدراسي عند التعيين"
                        value={formData.academicFieldBeforeAppointment}
                        readOnly
                    />
                    <Input
                        label="تاريخ التخرج قبل التعيين"
                        value={formData.graduationYearBeforeAppointment}
                        readOnly
                    />
                    <Input
                        label="التحصيل الدراسي بعد التعيين"
                        value={formData.academicAchievementAfterAppointment}
                        readOnly
                    />
                    <Input
                        label="التخصص الدراسي بعد التعيين"
                        value={formData.academicFieldAfterAppointment}
                        readOnly
                    />
                    <Input
                        label="تاريخ التخرج بعد التعيين"
                        value={formData.graduationYearAfterAppointment}
                        readOnly
                    />
                </CardContent>
            </Card>

            {/* الملاحظات والإجراءات */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        <span>الملاحظات والإجراءات</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        label="الملاحظات"
                        value={formData.notes}
                        readOnly
                    />
                    <div>
                        <p className="text-sm font-medium">لديه ترفيع أو علاوة: {formData.hasPromotionOrAllowance}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EmployeeForm;