// components/DocumentToolbar.tsx
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Send } from 'lucide-react';

const DocumentToolbar = ({ onSelectResult }) => {
    const [searchType, setSearchType] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearch = () => {
        // Simulate search logic (replace with actual API call)
        const results = [
            { id: 1, employeeName: 'علي أحمد', fileNumber: '12345', jobNumber: '67890', statisticalNumber: '98765' },
            { id: 2, employeeName: 'محمد خالد', fileNumber: '54321', jobNumber: '09876', statisticalNumber: '12345' },
        ];
        setSearchResults(results);
    };

    const handleSendToCorrectionCommittee = () => {
        // Logic to send to correction committee
        console.log('تم الإرسال إلى لجنة التصويب');
    };

    const handleSendToPromotionsCommittee = () => {
        // Logic to send to promotions committee
        console.log('تم الإرسال إلى لجنة العلاوات والترفيعات');
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-white dark:bg-gray-900 border-b rounded-t-lg shadow-sm">
            <div className="text-xl font-bold">إدارة التحقق من المستندات</div>

            <div className="flex items-center gap-4">
                <Select onValueChange={(value) => setSearchType(value)} defaultValue="name">
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="نوع البحث" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">الاسم الكامل</SelectItem>
                        <SelectItem value="jobNumber">الرقم الوظيفي</SelectItem>
                        <SelectItem value="fileNumber">رقم الاضبارة</SelectItem>
                        <SelectItem value="statisticalNumber">الرقم الاحصائي</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                    placeholder="بحث..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[200px]"
                />
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    بحث
                </Button>
            </div>

            {/* Display search results */}
            {searchResults.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">نتائج البحث:</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>اسم الموظف</TableHead>
                                <TableHead>رقم الاضبارة</TableHead>
                                <TableHead>الرقم الوظيفي</TableHead>
                                <TableHead>الرقم الاحصائي</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {searchResults.map((result) => (
                                <TableRow key={result.id} onClick={() => onSelectResult(result)} className="cursor-pointer hover:bg-gray-100">
                                    <TableCell>{result.employeeName}</TableCell>
                                    <TableCell>{result.fileNumber}</TableCell>
                                    <TableCell>{result.jobNumber}</TableCell>
                                    <TableCell>{result.statisticalNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            {/* Buttons for sending to committees */}
            <div className="flex justify-end gap-4 mt-4">
                <Button onClick={handleSendToCorrectionCommittee} className="bg-green-600 hover:bg-green-700">
                    <Send className="w-4 h-4 mr-2" />
                    إرسال إلى لجنة التصويب
                </Button>
                <Button onClick={handleSendToPromotionsCommittee} className="bg-purple-600 hover:bg-purple-700">
                    <Send className="w-4 h-4 mr-2" />
                    إرسال إلى لجنة العلاوات والترفيعات
                </Button>
            </div>
        </div>
    );
};

export default DocumentToolbar;